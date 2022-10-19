import { useState } from "react";
import PhotoHeader from "./PhotoHeader";
import UploadImageEtc from "./UploadImageEtc";
import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";
import { dispatchRoom2Image } from "store/modules/roomRegister";

export default function RoomImage() {

    const [state,dispatch] = useRoomRegisterRedux();

    return (
        <div>
            <PhotoHeader
                title="주방/화장실 사진"
                subTitle="최대 사진으로 구조를 파악할 수 있도록 모든 방의 사진을 다양한 각도로 찍어주세요. (최소 2장 최대 6장)"
            />
            <div className="h-48 mt-[12px]">
                <UploadImageEtc />
            </div >
        </div>
    );
}
