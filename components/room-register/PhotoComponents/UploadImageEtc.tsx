import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction, useState, useEffect  } from "react";
import useRoomRegisterRedux from "hooks/useRoomRegisterRedux";
import { dispatchRoom2Image, dispatchRoom2ImageUrl } from "store/modules/roomRegister";


export default function UploadImageEtc() {
    
    const [state, dispatch] = useRoomRegisterRedux();
    
    //이미지 상대경로로 저장
    let file:any;
    let imageUrlLists:any = [];
    let imageShowLists: (string | ArrayBuffer | null)[] = [];
    
    const handleAddImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        const imageLists = e.target.files;

        if (imageLists instanceof FileList) {
            let filesLength = imageLists.length > 6 ? 6 : imageLists.length;    
            for (let i = 0; i < filesLength; i++) {
                
                // *서버에보낼 용도
                const currentImageUrl = imageLists[i];
                imageUrlLists.push(currentImageUrl);
                // *프리뷰 용도
                file = imageLists[i];
                let reader = new FileReader();
                reader.onload = () => {
                    imageShowLists[i] = reader.result;
                    dispatch(dispatchRoom2ImageUrl([...imageShowLists]))
                }
                reader.readAsDataURL(file)
            }
        }

        dispatch(dispatchRoom2Image(imageUrlLists))
    };
    
    let url:any = [];

    if (state.room2ImageUrl.length) {
        for (let i = 0; i < state.room2ImageUrl.length; i++) {
            url.push(state.room2ImageUrl[i]);
        }
    }

    // console.log(url);
    // console.log(state.room2Image)
    
    const map_result = url.map(function(image: any,index: any) {
        return (
            <div className="w-[100px] h-[80px] mr-[8px]" key={index}>
                {image 
                    ? <Image
                        className="rounded-standard_rounded"
                        layout="fixed"
                        objectFit="fill"
                        width={100}
                        height={80}
                        src={image}
                        />
                    : <Image
                        className="rounded-standard_rounded"
                        layout="fixed"
                        objectFit="fill"
                        width={100}
                        height={80}
                        src={require("../../../assets/icon/채팅메뉴_앨범.svg")}
                    />
                } 
            </div>
        )
    })

    return (
        <>
            <div>
                {state.room2ImageUrl.length ? (
                    <div className="flex">
                        <div className="mr-[8px] bg-component_white h-[80px]  flex items-center justify-center relative rounded-standard_rounded">
                            <label
                                className="Pretendard-Regular text-[12px] text-center text-font_gray w-[80px] h-[80px] items-center justify-center"
                                htmlFor="image-upload-room"
                            >
                                {/* <FontAwesomeIcon icon="plus" /> */}
                                <Image 
                                    width={50}
                                    height={50}
                                    alt="사진로고"
                                    src={require("../../../assets/icon/채팅메뉴_앨범.svg")} 
                                />
                                <div>사진 선택</div>
                            </label>
                            <input
                                onChange={handleAddImages}
                                type="file"
                                className="hidden"
                                id="image-upload-etc"
                                accept="image/*"
                                multiple
                            />
                        </div>
                        {/* *이미지 미리보기  */}
                        <div className="flex h-[100px] overflow-x-auto overflow-y-hidden">
                            {map_result}
                        </div>
                    </div>
                ):(
                    <div className="bg-component_white h-[80px] w-full rounded-standard_rounded flex items-center justify-center relative">
                        <label
                            className="Pretendard-Regular text-[12px] text-center text-font_gray w-24 h-28  items-center justify-center"
                            htmlFor="image-upload-etc"
                        >
                            <Image 
                                width={50}
                                height={50}
                                alt="사진로고"
                                src={require("../../../assets/icon/채팅메뉴_앨범.svg")} 
                            />
                            <div>사진 선택</div>
                        </label>
                        <input
                            onChange={handleAddImages}
                            type="file"
                            className="hidden"
                            id="image-upload-etc"
                            accept="image/*"
                            multiple
                        />
                    </div>
                )}
            </div>
        </>
    );
}
