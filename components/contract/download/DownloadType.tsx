import Image from "next/image";
import axios from "axios";

export default function DownloadType() {
    
    return (
        <div className="h-screen px-[18px] bg-background_beige">
            
            <div
                className="Pretendard-SemiBold py-10 px-[18px] mt-10 bg-white rounded-standard_rounded border-b-2 border-background_beige h-room_register_btn_height1 text-[16px] flex justify-between items-center" 
            >
                <div>전대동의서.hwp</div>
                <a href=""></a>
                <Image src={require("../../../assets/icon/contract/다운로드2.svg")} alt="다운로드"/>
            </div>
            <div
                className="Pretendard-SemiBold py-10 px-[18px] mt-4 bg-white rounded-standard_rounded border-b-2 border-background_beige h-room_register_btn_height1 text-[16px] flex justify-between items-center" 
            >
                <div>전대차 계약서.hwp</div>
                <Image src={require("../../../assets/icon/contract/다운로드2.svg")} alt="다운로드"/>
            </div>
            <div
                className="Pretendard-SemiBold py-10 px-[18px] mt-4 bg-white rounded-standard_rounded border-b-2 border-background_beige h-room_register_btn_height1 text-[16px] flex justify-between items-center" 
            >
                <div>임차권 양도 승낙서.hwp</div>
                <Image src={require("../../../assets/icon/contract/다운로드2.svg")} alt="다운로드"/>
            </div>
            <div
                className="Pretendard-SemiBold py-10 px-[18px] mt-4 bg-white rounded-standard_rounded border-b-2 border-background_beige h-room_register_btn_height1 text-[16px] flex justify-between items-center" 
            >
                <div>양도 양수 계약서.hwp<span className="Pretendard-Regular text-[11px]">(부동산 권리 양도 계약서)</span></div>
                <Image src={require("../../../assets/icon/contract/다운로드2.svg")} alt="다운로드"/>
            </div>
        </div>   
    );
}