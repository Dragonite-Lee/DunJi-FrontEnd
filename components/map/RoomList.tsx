import { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { useQuery } from 'react-query';
import { mapApi } from '_api';
import useRoomRedux from 'hooks/useRoomRedux';
import Popup from './Popup';
import RoomListHeader from './RoomListHeader';
import RoomListSlider from './RoomListSlider';
import RoomListYSlider from './RoomListYSlider';

type propsType = {
  openPopup: boolean;
  focusRoomId: string;
};
export interface State {
  bounds: Object;
}
export default function RoomList({ openPopup, focusRoomId }: propsType) {
  const [upDown, setUpDown] = useState(0); // 컴포넌트 올라온 단계(0: 지도 하단 가림, 1:지도 가림)
  const [touchY, setTouchY] = useState(10000); // n개의 방 컴포넌트 터치 이벤트에서 얻은 y 값
  const [margin, setMargin] = useState({
    marginTop: 'calc(100vh - 22.5rem)',
  });
  const [innerHeight, setInnerHeight] = useState(0); //데스크탑의 높이
  const [windowHeight, setWindowHeight] = useState(0); //window창의 높이
  const [state, dispatch] = useRoomRedux();

  const { status, data, error } = useQuery(
    //useQuery를 사용함으로 다양한 값(로딩,에러,데이터)들이 포함되어 있기에 간편함
    ['getRoomDetailData', focusRoomId], //queryKey로 두개가 바뀌면 위의 useQuery function을 실행한다.
    () => mapApi.getRoomDetail(focusRoomId), //query function 부분임
    {
      enabled: focusRoomId !== '', //query option부분임 focusRoomId가 존재할때만 실행하는 옵션
    },
  );
  useEffect(() => {
    //innerHeight가 달라질 때
    const handleResize = () => {
      //innerHeight가 달라지면 재지정해주는 함수
      setInnerHeight(window.innerHeight);
    };
    handleResize(); //innerHeight가 달라지면 바로 실행함
    window.addEventListener('resize', () => handleResize); //resize는 window가 달라질 때 실행함

    // setMargin({ marginTop: `calc(${innerHeight}px - 22.5rem)` });//margin을 다시잡음 즉, 노트북 크기에따라 마진을 잡는데 위로부터
    // return () => window.removeEventListener("resize", handleResize);//resize하고 나면 쓸모없으니까 이벤트리스너 지움
  }, [innerHeight]);

  const [position, setPosition] = useState({ y: 0 }); // box의 포지션 값
  // 업데이트 되는 값을 set 해줌
  const trackPos = (data: { y: any }) => {
    setPosition({ y: data.y });
  };
  const nodeRef = useRef(null);
  // if(position.y == 0) {
  //     setUpDown(0)
  // }
  // useEffect(()=>{
  //     if( position.y > 300 ) {
  //         setPosition({y: btHeight})
  //     }
  // },[position])
  // const dragEndHandler = () => {

  // }

  const [btHeight, setBtHeight] = useState(
    typeof window !== 'undefined' ? window.innerHeight - 228 : 0,
  );
  const [Cwidth, setCwidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );
  const [bounds, setBounds] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: btHeight,
  });
  const [depo, setdepo] = useState({ x: 0, y: btHeight });
  const [widthHandler, setWidthHandler] = useState(false);
  useEffect(() => {
    if (Cwidth > 640) {
      setWidthHandler(true);
    } else if (Cwidth < 640) {
      setWidthHandler(false);
    }
  }, [Cwidth]);

  return (
    <div className="w-full sm:w-[375px] z-10 relative">
      {upDown === 0 &&
        openPopup && ( //하단에서 올라오는 슬라이드 바가 0이고 openPopUp이 true이며,
          <Popup data={data} /> //지도가 다 보이고, 매물누르면 popup이 true되고, touchY가 있고, windowHeight(이건 당연 존재할 듯)
        )}
      {widthHandler ? (
        <div>
          <RoomListHeader /**헤더를 잡고 끌어올려야 하니까 여기가 중요 */
            setUpDown={setUpDown}
            touchY={touchY}
            setTouchY={setTouchY}
            setMargin={setMargin}
            innerHeight={innerHeight}
            windowHeight={windowHeight}
            setWindowHeight={setWindowHeight}
          />
          <RoomListYSlider />
        </div>
      ) : (
        <Draggable
          nodeRef={nodeRef}
          onDrag={(e, data) => trackPos(data)}
          axis="y"
          bounds={bounds}
          defaultPosition={depo}
          // onStart={()=>console.log('start')}
          // onStop={()=>console.log('end')}
        >
          <div ref={nodeRef} className="absolute ">
            <RoomListHeader /**헤더를 잡고 끌어올려야 하니까 여기가 중요 */
              setUpDown={setUpDown}
              touchY={touchY}
              setTouchY={setTouchY}
              setMargin={setMargin}
              innerHeight={innerHeight}
              windowHeight={windowHeight}
              setWindowHeight={setWindowHeight}
            />
            <RoomListYSlider />
          </div>
        </Draggable>
      )}
    </div>
  );
}
