import Image from "next/image";
import useReviewRegisterReudx from "hooks/useReviewRegisterRedux";
import { dispatchFile, dispatchFileUrl } from "store/modules/reviewRegister";


export default function ReviewImg() {
    
    const [state, dispatch] = useReviewRegisterReudx();
    
    //이미지 상대경로로 저장
    let file:any;
    let imageUrlLists:any = [];
    let imageShowLists: (string | ArrayBuffer | null)[] = [];
    
    const handleAddImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        const imageLists = e.target.files;

        if (imageLists instanceof FileList) {
            let filesLength = imageLists.length > 3 ? 3 : imageLists.length;    
            for (let i = 0; i < filesLength; i++) {
                
                // *서버에보낼 용도
                const currentImageUrl = imageLists[i];
                imageUrlLists.push(currentImageUrl);
                // *프리뷰 용도
                file = imageLists[i];
                let reader = new FileReader();
                reader.onload = () => {
                    imageShowLists[i] = reader.result;
                    dispatch(dispatchFileUrl([...imageShowLists]))
                }
                reader.readAsDataURL(file)
            }
        }

        dispatch(dispatchFile(imageUrlLists))
    };
    
    let url:any = [];

    if (state.ReviewfileUrl.length) {
        for (let i = 0; i < state.ReviewfileUrl.length; i++) {
            url.push(state.ReviewfileUrl[i]);
        }
    }
    
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
                        alt="방사진"
                        />
                    : <Image
                        className="rounded-standard_rounded"
                        layout="fixed"
                        objectFit="fill"
                        width={100}
                        height={80}
                        alt="채팅메뉴앨범"
                        src={require("../../../assets/icon/채팅메뉴_앨범.svg")}
                    />
                } 
            </div>
        )
    })

    return (
        <>
            <div>
                {state.ReviewfileUrl.length ? (
                    <div className="flex">
                        <div className="mr-[8px] bg-component_white h-[80px]  flex items-center justify-center relative rounded-standard_rounded">
                            <label
                                className="Pretendard-Regular text-[12px] text-center text-font_gray w-[80px] h-[80px] items-center justify-center"
                                htmlFor="image-upload-review"
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
                                id="image-upload-review"
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
                            htmlFor="image-upload-review"
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
                            id="image-upload-review"
                            accept="image/*"
                            multiple
                        />
                    </div>
                )}
            </div>
        </>
    );
}
