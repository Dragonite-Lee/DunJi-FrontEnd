import { useState, useEffect, useRef, useCallback } from 'react';
import Script from 'next/script';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';

import { mapApi } from '_api';
import TabBar from 'components/main/TabBar';
import Header from 'components/map/Header';
import RoomList from 'components/map/RoomList';
import {
  dispatchStartLongitude,
  dispatchStartLatitude,
  dispatchEndLongitude,
  dispatchEndLatitude,
} from 'store/modules/filter';
import { dispatchRoomList, dispatchMapRoomList } from 'store/modules/room';

import type { RootState } from 'store/modules';

function Map() {
  /* 아래로 수정
  const [state, dispatch] = useRoomRedux();
  const [state2, dispatch2] = useMapFilterRedux();
  */
  const dispatch = useDispatch();
  const { ROOM_LIST } = useSelector((state: RootState) => state.room);
  const mapFilter = useSelector((state: RootState) => state.mapFilter);

  const [load, setLoad] = useState(false); // kakao map script 로드 여부
  const [latitude, setLatitude] = useState(37.297526827747966); //한양대 에리카 위도,경도
  const [longitude, setLongitude] = useState(126.835628984629);
  const [openPopup, setOpenPopup] = useState(false);
  const [focusRoomId, setFocusRoomId] = useState('');
  const [coordinate, setCoordinate] = useState([
    126.81869842862838, 37.27339683024221, 126.8524293384371,
    37.321522977544404,
  ]);

  const mapVar = useRef(); //돔(DOM)을 선택하기 위해서 사용

  const { status, data, error } = useQuery(
    ['getRoomData', coordinate],
    () => mapApi.getRoom(mapFilter),
    {
      onSuccess: (data) => {
        dispatch(dispatchMapRoomList(data)); // 지도 상에 보이는 매물 리덕스로 관리
        console.log(data);
        window.kakao &&
          window.kakao.maps.load(() => {
            addOverlay(mapVar.current, data);
          });
      },
    },
  );

  // if( typeof window !== 'undefined') {
  //     sessionStorage.setItem("load", "false");
  // }

  /** 상하좌우 위도경도를 지정하는 함수 */
  const updateCoordinate = useCallback(
    (qa: number, ha: number, pa: number, oa: number) => {
      setCoordinate(() => [qa, ha, pa, oa]); // 함수형파라미터로 기본값()을 []의 값으로 업데이트 한다는 뜻
      // 즉, 비동기적 전의 데이트에 새롭게 업데이트를 계속해서 한다는 뜻
    },
    [],
  );

  const addOverlay = useCallback(
    (map: any, response: any) => {
      const data = response.data;
      const clusterer = new window.kakao.maps.MarkerClusterer({
        //마커클러스터러를 생성한다.
        map: map, //마커클러스터를 관리하고 표시할 지도 객체가 됨
        averageCenter: true, //마커드르이 평균의치를 클러스터 마커 위치로 설정
        minLevel: 7, //클러스터 할 최소 지도 레벨
        minClusterSize: 1,
        styles: [
          {
            color: '#F9F9F9',
            background: '#3F3C3A',
            width: '3rem',
            height: '3rem',
            'border-radius': '100%',
            display: 'flex',
            'align-items': 'center',
            'justify-content': 'center',
          },
        ],
      });
      const existData = ROOM_LIST; //기존 roomlist를 existData에 담음
      const newData = [];
      for (const item of data) {
        if (!existData.hasOwnProperty(item.roomID)) {
          newData.push(item);
        }
      }

      dispatch(dispatchRoomList(newData)); //RoomList에 newData도 저장
      for (const item of newData) {
        //newData라는 변수에 담긴것만큼 반복하며 하나하나를 item이라 부르쟈
        const content = document.createElement('div'); //content변수는 div박스를 만들어주고
        content.innerText = `${item.deposit}만 / ${item.priceUnit}`; //content변수의 내용은 item의 deposit와 priceUnit을 사용
        content.addEventListener('click', () => {
          //content를 클릭하면
          setOpenPopup(!openPopup); //밑에서 popup열리면서 클릭한 방 보여줌
          setFocusRoomId(item.roomID); //클릭한 아이의roomID를 FocusRoomId에 저장함 그래서
        });
        content.style.fontSize = '1.3rem'; // 커스텀 오버레이(10만 / 월)
        content.style.fontWeight = '600';
        content.style.backgroundColor = '#F9F9F9';
        content.style.color = '#3F3C3A';
        content.style.padding = '0.3rem 1.1rem';
        content.style.border = '0.1rem solid #A9A7A2';
        content.style.borderRadius = '1.2rem'; //위의 얘네들로 커스텀오버레이 style을 줌
        const position = new window.kakao.maps.LatLng(
          item.latitude,
          item.longitude,
        ); //커스텀 오버레이가 표시될 위치를 position이란 변수에 담음
        const customOverlay = new window.kakao.maps.CustomOverlay({
          //커스텀 오버레이를 생성한다.
          position: position, //position은 position이라는 변수를
          content: content, //content는 content라는 변수를
        });
        customOverlay.setMap(map); //커스텀 오버레이를 지도에 표시해준다.

        clusterer.setMap(map); //클러스터러를 지도에 올린다.
        clusterer.addMarkers([customOverlay]); //클러스터러에 마커들을 추가
      }
    },
    [dispatch, openPopup, ROOM_LIST],
  );

  /** 카카오맵 로드되면 할 동작 */
  const onLoadKakaoMap = useCallback(() => {
    window.kakao.maps.load(() => {
      //setLoad라는 useState를 바꾸는데 그 이후에false로 되며, 다시 true로 안바뀌기때문에 에러발생
      const container = document.getElementById('map'); //지도생성 표시할 div만듬
      const options = {
        center: new window.kakao.maps.LatLng(latitude, longitude), //지도 중심좌표(학교에리카)
        level: 6, //지도 확대레벨
      };
      const map = new window.kakao.maps.Map(container, options); //지도를 표시할 div와 지도옵션으로 지도생성
      mapVar.current = map; //돔의 current라는 프로퍼티
      // map.relayout();
      window.kakao.maps.event.addListener(map, 'dragend', () => {
        //드래그가 끝나면
        const { ha, qa, oa, pa } = map.getBounds(); //map.getBounds로 현재영역을 얻어옴
        setOpenPopup(false); //그리고 popup을 false로해서 감추고
        updateCoordinate(ha, qa, oa, pa); //변경된영역의 위도경도를 저장함
      }); // 드래그 이벤트 처리
      window.kakao.maps.event.addListener(map, 'dragstart', () => {
        //드래그시작하면
        setOpenPopup(false); //방목록 list내림
      }); // 드래그 이벤트 처리
      window.kakao.maps.event.addListener(map, 'zoom_changed', () => {
        //지도가 확대 또는 축소될 때
        const { ha, qa, oa, pa } = map.getBounds(); //확대되거나 축소되서 마지막의 위도경도를 얻음
        setOpenPopup(false); // pop감추고
        updateCoordinate(ha, qa, oa, pa); //변경된 영역의 위도경도를 저장함
      }); // 줌 이벤트 처리
      const moveLatLon = new window.kakao.maps.LatLng(latitude, longitude); //moveLatLon이라는 변수에 center값을 저장함
      map.panTo(moveLatLon); //센터가 저위도경도로 부드럽게 이동
    });
  }, [latitude, longitude, updateCoordinate]); //위도,경도,또는 위도경도 업데이트함수에 반응

  /**
   * 검색한 주소로 지도 중심 변경 함수
   * @param {boolean} load kakao map script 로드 여부
   * @param {number} latitude 검색 주소 위도
   * @param {number} longitude 검색 주소 경도
   */
  const loadMapOfSearchLocation = useCallback(
    (load: boolean, latitude: number, longitude: number) => {
      if (!load) {
        return;
      }
      // kakao map api 로드 이후에 동작하게 함
      window.kakao.maps.load(function () {
        const moveLatLon = new window.kakao.maps.LatLng(latitude, longitude); // 이동할 위도 경도 위치 생성
        const container = document.getElementById('map'); // 지도를 표시할 div 검색에서 주소를 검색하면 위치가 바뀌니까

        // 지도를 표시하는 옵션
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude), // 주소에서 검색해서 나온 지도의 중심좌표
          level: 6, // 확대수준
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성하기
        mapVar.current = map;
        map.panTo(moveLatLon); // 맵을 부드럽게 이동시키는데 사용
      });
    },
    [],
  );

  // 지도 열릴 때와 위도, 경도가 바뀔 때 해당 위치로 부드럽게 이동
  useEffect(() => {
    loadMapOfSearchLocation(load, latitude, longitude);
  }, [latitude, load, loadMapOfSearchLocation, longitude]);

  useEffect(() => {
    dispatch(dispatchStartLongitude(coordinate[0]));
    dispatch(dispatchStartLatitude(coordinate[1]));
    dispatch(dispatchEndLongitude(coordinate[2]));
    dispatch(dispatchEndLatitude(coordinate[3]));
  }, [coordinate, dispatch]);

  // useEffect(() => { // 현재 위도, 경도 얻는 훅
  //     const getLocation = () => {
  //         if (navigator.geolocation) {
  //             navigator.geolocation.getCurrentPosition(
  //                 function (position) {
  //                     setLatitude(position.coords.latitude);
  //                     setLongitude(position.coords.longitude);
  //                 },
  //                 function (error) {
  //                     console.log(error);
  //                 },
  //                 {
  //                     enableHighAccuracy: false,
  //                     maximumAge: 300000,
  //                     timeout: 30000,
  //                 }
  //             );
  //         } else {
  //             alert("GPS를 지원하지 않습니다");
  //             return;
  //         }
  //     };

  //     getLocation();
  // }, []);

  return (
    <div>
      <Script
        // onLoad={onLoadKakaoMap}
        onReady={onLoadKakaoMap}
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services,clusterer&autoload=false`}
      />
      <div className="flex flex-col w-full sm:m-auto h-screen relative overflow-hidden">
        <TabBar />
        <Header setLatitude={setLatitude} setLongitude={setLongitude} />
        <RoomList openPopup={openPopup} focusRoomId={focusRoomId} />
        <div
          className="absolute top-[95px] w-full h-[77rem] sm:top-[0] sm:left-[375px] sm:h-full"
          id="map"
        />
      </div>
    </div>
  );
}

export default Map;
