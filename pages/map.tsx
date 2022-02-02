import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

declare global {
    interface Window {
        kakao: any;
    }
}

function Map() {
    const [latitude, setLatitude] = useState(37.297526827747966);
    const [longitude, setLongitude] = useState(126.835628984629);

    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function (position) {
                        setLatitude(position.coords.latitude);
                        setLongitude(position.coords.longitude);
                    },
                    function (error) {
                        alert("브라우저 설정에서 위치 접근을 허용해 주세요");
                        console.log(error);
                    },
                    {
                        enableHighAccuracy: false,
                        maximumAge: 300000,
                        timeout: 30000,
                    }
                );
            } else {
                alert("GPS를 지원하지 않습니다");
                return;
            }
        };

        getLocation();
    }, []);

    useEffect(() => {
        const mapScript = document.createElement("script");
        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;
        document.head.appendChild(mapScript);
        const onLoadKakaoMap = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById("map");
                const options = {
                    center: new window.kakao.maps.LatLng(latitude, longitude),
                    level: 5,
                };
                const map = new window.kakao.maps.Map(container, options);
                const markerPosition = new window.kakao.maps.LatLng(
                    latitude,
                    longitude
                );
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                });
                marker.setMap(map);
            });
        };
        mapScript.addEventListener("load", onLoadKakaoMap);
        return () => mapScript.removeEventListener("load", onLoadKakaoMap);
    }, [latitude, longitude]);

    return (
        <div className="w-full h-full">
            <div className="absolute z-10 text-yellow text-5xl top-5 left-5">
                <Link href="/">
                    <a>
                        <FontAwesomeIcon icon="chevron-left" />
                    </a>
                </Link>
            </div>
            <input
                className="absolute z-10 top-20 right-1/2 translate-x-1/2
                h-16
                w-4/5
                rounded-2xl
            "
            ></input>
            <div id="map" className=" z-0 text-yelloww-screen h-screen"></div>;
        </div>
    );
}

export default Map;
