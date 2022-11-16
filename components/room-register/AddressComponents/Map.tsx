import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";
import Script from "next/script";
import { useEffect } from "react";
import {
    dispatchLatitude,
    dispatchLongitude,
} from "store/modules/roomRegister";

declare global {
    interface Window {
        kakao: any;
    }
}
export default function Map() {
    const [state, dispatch] = useRoomRegisterRedux();
    const address = state.address;

    const onLoadKakaoMap = () => {
        window.kakao.maps.load(() => {
            const container = document.getElementById("map");

            var geocoder = new window.kakao.maps.services.Geocoder();//주소-좌표간 변환 서비스 객체 생성
            geocoder.addressSearch(//주소정보에 해당하는 좌표값 불러옴 address,callback함수,option
                address,//첫번째 파라미터 주소
                function (result: any, status: String) {//두번째파라미터 콜백함수 
                    if (status === window.kakao.maps.services.Status.OK) {//주소검색결과가 있다면
                        const longitude = result[0].x; // 경도
                        const latitude = result[0].y; //위도

                        dispatch(dispatchLongitude(longitude));
                        dispatch(dispatchLatitude(latitude));

                        const options = {
                            center: new window.kakao.maps.LatLng(
                                latitude,
                                longitude
                            ),
                            level: 6,
                        };
                        const map = new window.kakao.maps.Map(
                            container,
                            options
                        );

                        const markerPosition = new window.kakao.maps.LatLng(
                            latitude,
                            longitude
                        );
                        const marker = new window.kakao.maps.Marker({
                            position: markerPosition,
                        });
                        marker.setMap(map);
                    }
                }
            );
        });
    };

    return (
        <>
            <Script
                onReady={onLoadKakaoMap}
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services,clusterer&autoload=false`}
            />
            <div id="map" className="w-full h-[25vh]"></div>
        </>
    );
}
