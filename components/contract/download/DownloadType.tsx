import Image from "next/image";
import axios from "axios";

export default function DownloadType() {
    
    return (
        <div className="h-room_register_btn_height1 px-standard_pd">
            
            <div
                className="Pretendard-SemiBold py-10 px-standard_pd mt-10 bg-white rounded-standard_rounded border-b-2 border-background_beige h-room_register_btn_height1 text-2xl flex justify-between items-center" 
            >
                <div>전대동의서.hwp</div>
                <a href=""></a>
                <Image src={require("../../../assets/icon/contract/다운로드2.svg")} />
            </div>
            <div
                className="Pretendard-SemiBold py-10 px-standard_pd mt-4 bg-white rounded-standard_rounded border-b-2 border-background_beige h-room_register_btn_height1 text-2xl flex justify-between items-center" 
            >
                <div>전대차 계약서.hwp</div>
                <Image src={require("../../../assets/icon/contract/다운로드2.svg")} />
            </div>
            <div
                className="Pretendard-SemiBold py-10 px-standard_pd mt-4 bg-white rounded-standard_rounded border-b-2 border-background_beige h-room_register_btn_height1 text-2xl flex justify-between items-center" 
            >
                <div>임차권 양도 승낙서.hwp</div>
                <Image src={require("../../../assets/icon/contract/다운로드2.svg")} />
            </div>
            <div
                className="Pretendard-SemiBold py-10 px-standard_pd mt-4 bg-white rounded-standard_rounded border-b-2 border-background_beige h-room_register_btn_height1 text-2xl flex justify-between items-center" 
            >
                <div>양도 양수 계약서.hwp<span className="font-sans text-sm">(부동산 권리 양도 계약서)</span></div>
                <Image src={require("../../../assets/icon/contract/다운로드2.svg")} />
            </div>
        </div>   
    );
}