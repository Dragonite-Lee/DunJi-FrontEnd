import { useState, useEffect, useRef, useCallback } from "react";
import React from "react";
import RoomList from "components/map/RoomList";
import Header from "components/map/Header";
import Script from "next/script";
import { useQuery } from "react-query";
import { mapApi } from "_api";
import useRoomRedux from "hooks/useRoomRedux";
import {dispatchRoomList, dispatchMapRoomList } from "store/modules/room";
import TabBar from "components/main/TabBar";
import useMapFilterRedux from "hooks/useMapFilterRedux";
import { dispatchStartLongitude, dispatchStartLatitude, dispatchEndLongitude, dispatchEndLatitude } from "store/modules/filter";
import Filter from "./filter";

export default function Map() {
    const [state, dispatch] = useRoomRedux();
    const [load, setLoad] = useState(false); // kakao map script 로드 여부
    const [latitude, setLatitude] = useState(37.297526827747966); //한양대 에리카 위도,경도
    const [longitude, setLongitude] = useState(126.835628984629);
    const [openPopup, setOpenPopup] = useState(false);
    const [focusRoomId, setFocusRoomId] = useState("");
    const [coordinate, setCoordinate] = useState([
        126.81869842862838, 37.27339683024221, 126.8524293384371,
        37.321522977544404,
    ]);

    const [state2, dispatch2] = useMapFilterRedux();

    let mapVar = useRef(); //돔(DOM)을 선택하기 위해서 사용
    
    useEffect(() => {
        dispatch(dispatchStartLongitude(coordinate[0]));
        dispatch(dispatchStartLatitude(coordinate[1]));
        dispatch(dispatchEndLongitude(coordinate[2]));
        dispatch(dispatchEndLatitude(coordinate[3]));
    },[Map,Filter])
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
    
    const { status, data, error } = useQuery(
        ["getRoomData", coordinate],
        () => mapApi.getRoom(state2),
        {
            onSuccess: (data) => {
                dispatch(dispatchMapRoomList(data)); // 지도 상에 보이는 매물 리덕스로 관리
                console.log(data)
                window.kakao && window.kakao.maps.load(() => {

                    addOverlay(mapVar.current, data);
                });
            },
        }
    );

    const updateCoordinate = useCallback( //상하좌우 위도경도를 지정하는 함수
        (qa: number, ha: number, pa: number, oa: number) => {
            setCoordinate(() => [qa, ha, pa, oa]);//함수형파라미터로 기본값()을 []의 값으로 업데이트 한다는 뜻
            //즉, 비동기적 전의 데이트에 새롭게 업데이트를 계속해서 한다는 뜻
        },
        []
    );
    
    const addOverlay = useCallback(
        (map: any, response: any) => {
            const data = response.data;
            const clusterer = new window.kakao.maps.MarkerClusterer({
                map: map,
                averageCenter: true,
                minLevel: 7,
                minClusterSize: 1,
                styles: [
                    {
                        color: "#F9F9F9",
                        background: "#3F3C3A",
                        width: "3rem",
                        height: "3rem",
                        "border-radius": "100%",
                        display: "flex",
                        "align-items": "center",
                        "justify-content": "center",
                    },
                ],
            });
            const existData = state.ROOM_LIST;//기존 roomlist를 existData에 담음
            const newData = [];
            for (let item of data) {
                if (!existData.hasOwnProperty(item.roomID)) {
                    newData.push(item);
                }
            }
            
            dispatch(dispatchRoomList(newData));//RoomList에 newData도 저장
            for (let item of newData) {//newData라는 변수에 담긴것만큼 반복하며 하나하나를 item이라 부르쟈
                const content = document.createElement("div");//content변수는 div박스를 만들어주고
                content.innerText = `${item.deposit}만 / ${item.priceUnit}`;//content변수의 내용은 item의 deposit와 priceUnit을 사용
                content.addEventListener("click", () => {//content를 클릭하면
                    setOpenPopup(!openPopup);//밑에서 popup열리면서 클릭한 방 보여줌
                    setFocusRoomId(item.roomID);//클릭한 아이의roomID를 FocusRoomId에 저장함 그래서
                });
                content.style.fontSize = "1.3rem"; // 커스텀 오버레이(10만 / 월)
                content.style.fontWeight = "600";
                content.style.backgroundColor = "#F9F9F9";
                content.style.color = "#3F3C3A";
                content.style.padding = "0.3rem 1.1rem";
                content.style.border = "0.1rem solid #A9A7A2";
                content.style.borderRadius = "1.2rem";//위의 얘네들로 커스텀오버레이 style을 줌
                const position = new window.kakao.maps.LatLng(//커스텀 오버레이가 표시될 위치를 position이란 변수에 담음
                    item.latitude,
                    item.longitude
                );
                const customOverlay = new window.kakao.maps.CustomOverlay({//커스텀 오버레이를 생성한다.
                    position: position,//position은 position이라는 변수를
                    content: content,//content는 content라는 변수를
                });
                customOverlay.setMap(map);//커스텀 오버레이를 지도에 표시해준다.

                clusterer.setMap(map);
                clusterer.addMarkers([customOverlay]);
            }
        },
        [dispatch, openPopup, state.ROOM_LIST]
    );

    // useEffect(() => {
        // setLoad(true)
    // },[]);

    console.log(load)
    const onLoadKakaoMap = useCallback(() => { //*카카오맵 로드되면 할 동작
        window.kakao.maps.load(() => {
            setLoad(true); //setLoad라는 useState를 바꾸는데 그 이후에false로 되며, 다시 true로 안바뀌기때문에 에러발생
            const container = document.getElementById("map"); //지도생성 표시할 div만듬
            const options = {
                center: new window.kakao.maps.LatLng(latitude, longitude), //지도 중심좌표(학교에리카)
                level: 6, //지도 확대레벨
            };
            const map = new window.kakao.maps.Map(container, options); //지도를 표시할 div와 지도옵션으로 지도생성
            mapVar.current = map;//돔의 current라는 프로퍼티

            window.kakao.maps.event.addListener(map, "dragend", () => {//드래그가 끝나면
                const { ha, qa, oa, pa } = map.getBounds(); //map.getBounds로 현재영역을 얻어옴
                setOpenPopup(false); //그리고 popup을 false로해서 감추고
                updateCoordinate(ha, qa, oa, pa);//변경된영역의 위도경도를 저장함
            }); // 드래그 이벤트 처리
            window.kakao.maps.event.addListener(map, "dragstart", () => {//드래그시작하면
                setOpenPopup(false);//방목록 list내림
            }); // 드래그 이벤트 처리
            window.kakao.maps.event.addListener(map, "zoom_changed", () => {//지도가 확대 또는 축소될 때
                const { ha, qa, oa, pa } = map.getBounds();//확대되거나 축소되서 마지막의 위도경도를 얻음
                setOpenPopup(false);// pop감추고
                updateCoordinate(ha, qa, oa, pa); //변경된 영역의 위도경도를 저장함
            }); // 줌 이벤트 처리
            var moveLatLon = new window.kakao.maps.LatLng(latitude, longitude);//moveLatLon이라는 변수에 center값을 저장함
            map.panTo(moveLatLon); //센터가 저위도경도로 부드럽게 이동
        });
    }, [latitude, longitude, updateCoordinate]);//위도,경도,또는 위도경도 업데이트함수에 반응

    useEffect(() => {
        // header에서 주소 주소 검색한 경우 현재 지도 중심 위치 변경 훅
        setLoad(true);
        if (load) {
            window.kakao.maps.load(()=>{
                // kakao map api 로드 이후에 동작하게 함
                var moveLatLon = new window.kakao.maps.LatLng(latitude, longitude);//이동할 위도 경도 위치 생성
                
                const container = document.getElementById("map"); //지도를 표시할 div 검색에서 주소를 검색하면 위치가 바뀌니까
                const options = {
                    center: new window.kakao.maps.LatLng(latitude, longitude), //주소에서 검색해서 나온 지도의 중심좌표
                    level: 6, //확대수준
                }; //지도를 표시하는 옵션
                const map = new window.kakao.maps.Map(container, options); //지도 생성하기
                mapVar.current = map;
                map.panTo(moveLatLon); //맵을 부드럽게 이동시키는데 사용
            })
        }
    }, [latitude, load, longitude,Map]); //*위도, 경도바뀌거나 load되면 해당 위도경도에 맞게끔 부드럽게 이동 근데, load는 기본값이 에리카니까 에리카로 나올듯
    return (
        <div>
            <Script
                onLoad={onLoadKakaoMap}
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services,clusterer&autoload=false`}
            />
            <div className="flex flex-col w-full sm:m-auto h-screen relative overflow-hidden">
                <TabBar />
                <Header setLatitude={setLatitude} setLongitude={setLongitude} />
                <RoomList openPopup={openPopup} focusRoomId={focusRoomId} />
                <div className="absolute top-[95px] w-full h-[712px]" id="map" />
            </div>
        </div>
    );
}