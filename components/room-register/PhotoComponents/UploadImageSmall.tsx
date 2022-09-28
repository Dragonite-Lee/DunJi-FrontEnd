import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";

type propsType = {
    file: string;
    setFile: Dispatch<SetStateAction<string>>;
    index: number;
};

export default function UploadImageSmall({ file, setFile, index }: propsType) {
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        if (e.target.files instanceof FileList)
            reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            if (reader.readyState === 2) setFile(String(reader.result));
        };
        
    };
    return (
        <div className="bg-component_white h-full w-full rounded-standard_rounded flex items-center justify-center relative">
            {file ? (
                <div>
                    <label htmlFor="image-upload">
                        <Image
                            layout="fill"
                            objectFit="contain"
                            src={file}
                            alt="preview-img"
                        />
                    </label>
                    <input
                        onChange={onChange}
                        type="file"
                        className="hidden"
                        id="image-upload"
                        accept="image/*"
                    />
                </div>
            ) : (
                <>
                    <label
                        className="Pretendard-Regular text-[12px] text-center text-font_gray w-15 h-18"
                        htmlFor={`image-upload-${index}`}
                    >
                        <Image 
                            width={40}
                            height={40}
                            alt="사진로고"
                            src={require("../../../assets/icon/채팅메뉴_앨범.svg")} 
                        />
                        <div>사진 선택</div>
                    </label>
                    <input
                        onChange={onChange}
                        type="file"
                        className="hidden"
                        id={`image-upload-${index}`}
                        accept="image/*"
                    />
                </>
            )}
        </div>
    );
}
