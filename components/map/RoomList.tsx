import useRoomRedux from "hooks/useRoomRedux";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { mapApi } from "_api";
import Popup from "./Popup";
import RoomListHeader from "./RoomListHeader";
import RoomListSlider from "./RoomListSlider";
import RoomListYSlider from "./RoomListYSlider";

type propsType = {
    openPopup: boolean;
    focusRoomId: string;
};
export default function RoomList({ openPopup, focusRoomId }: propsType) {
    const [upDown, setUpDown] = useState(0); // 컴포넌트 올라온 단계(0: 지도 하단 가림, 1: 지도 절반 가림 2: 지도 가림)
    const [touchY, setTouchY] = useState(10000); // n개의 방 컴포넌트 터치 이벤트에서 얻은 y 값
    const [margin, setMargin] = useState({
        marginTop: "calc(100vh - 22.5rem)",
    });
    const [innerHeight, setInnerHeight] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0); // 화면 전체 y값
    const [state, dispatch] = useRoomRedux();
    
    const { status, data, error } = useQuery(//useQuery를 사용함으로 다양한 값(로딩,에러,데이터)들이 포함되어 있기에 간편함
        ["getRoomDetailData", focusRoomId],//queryKey로 두개가 바뀌면 위의 useQuery function을 실행한다.
        () => mapApi.getRoomDetail(focusRoomId),//query function 부분임
        {
            enabled: focusRoomId !== "",//query option부분임 focusRoomId가 존재할때만 실행하는 옵션
        }
    );
    useEffect(() => {//innerHeight가 달라질 때
        const handleResize = () => {
            setInnerHeight(window.innerHeight);
        };
        handleResize();
        window.addEventListener("resize", () => handleResize);

        setMargin({ marginTop: `calc(${innerHeight}px - 22.5rem)` });
        return () => window.removeEventListener("resize", handleResize);
    }, [innerHeight]);

    return (
        <div className="w-full sm:w-[375px] z-10" style={margin}>
            {upDown === 0 && openPopup && touchY === windowHeight && (//하단에서 올라오는 슬라이드 바가 0이고 openPopUp이 true이며, 
                <Popup data={data} />
            )}
            <RoomListHeader
                setUpDown={setUpDown}
                touchY={touchY}
                setTouchY={setTouchY}
                setMargin={setMargin}
                innerHeight={innerHeight}
                windowHeight={windowHeight}
                setWindowHeight={setWindowHeight}
            />
            <RoomListSlider />
            <RoomListYSlider />
        </div>
    );
}
