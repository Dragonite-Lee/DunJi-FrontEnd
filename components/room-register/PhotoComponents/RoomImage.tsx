import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";
import { useEffect, useState } from "react";
import { dispatchRoom1Image } from "store/modules/roomRegister";
import PhotoHeader from "./PhotoHeader";
import UploadImageSmall from "./UploadImageSmall";

export default function RoomImage() {
    const [file1, setFile1] = useState("");
    const [file2, setFile2] = useState("");
    const [file3, setFile3] = useState("");

    const fileArr = [
        { file: file1, setFile: setFile1 },
        { file: file2, setFile: setFile2 },
        { file: file3, setFile: setFile3 },
    ];
    const room1file = [file1,file2,file3]

    const [state,dispatch] = useRoomRegisterRedux();
    
    // console.log(state.room1Image)
    return (
        <div className="py-[30px]">
            <PhotoHeader
                title="거실/방 사진"
                subTitle="최대 사진으로 구조를 파악할 수 있도록 모든 방의 사진을 다양한 각도로 찍어주세요. (최소 2장 최대 3장)"
            />
            <div className="h-32 grid grid-cols-3 gap-4 mt-[12px]"
                
            >
                {fileArr.map((item, index) => (
                    <div
                        key={index}   
                        onLoad={()=>{
                                dispatch(dispatchRoom1Image(room1file))
                        }}
                    >
                        <UploadImageSmall
                        index={index}
                        file={item.file}
                        setFile={item.setFile}
                    />
                    </div>
                    
                ))}
                {/* <div
                    onChange={() => {dispatch(dispatchRoom1Image(room1file))}}
                >
                    <UploadImageSmall
                        index={1}
                        file={file1}
                        setFile={setFile1}
                    />
                </div>
                <div
                    onChange={() => {dispatch(dispatchRoom1Image(room1file))}}
                >
                    <UploadImageSmall
                        index={2}
                        file={file2}
                        setFile={setFile2}
                    />
                </div>
                <div
                    onChange={() => {dispatch(dispatchRoom1Image(room1file))}}
                >
                    <UploadImageSmall
                        index={3}
                        file={file3}
                        setFile={setFile3}
                    />
                </div> */}
                
            </div >
        </div>
    );
}
