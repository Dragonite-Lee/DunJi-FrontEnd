import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import DownloadModal from "./DownloadModal";

export default function contractType() {

    const direction = ["right", "down"];
    const [openModal,setopenModal] = useState(false);

    return (
        
        <div>
                <div
                    className="Pretendard-SemiBold py-10 px-standard_pd my-4 mx-12 bg-white rounded-standard_rounded h-room_register_btn_height1 text-2xl flex justify-between items-center" 
                >
                    <div>전대차 계약일 경우 <span className="font-sans">(단기임대 포함)</span></div>
                    <Link href="/room/contract/sublease">
                        <a>
                            <FontAwesomeIcon icon="chevron-right" />
                        </a>
                    </Link>
                </div>
                <div
                    className="Pretendard-SemiBold py-10 px-standard_pd my-4 mx-12 bg-white rounded-standard_rounded h-room_register_btn_height1 text-2xl flex justify-between items-center" 
                >
                    <div>양도양수 계약일 경우</div>
                    <Link href="/room/contract/transfer-agreement">
                        <a>
                            <FontAwesomeIcon icon="chevron-right" />
                        </a>
                    </Link>
                </div>
                <div
                    className="relative Pretendard-SemiBold py-10 px-standard_pd my-4 mx-12 bg-white rounded-standard_rounded h-room_register_btn_height1 text-2xl flex justify-between items-center" 
                >
                    <div>파일 다운로드</div>
                    {openModal === true ?(
                        <FontAwesomeIcon icon="chevron-down" 
                            onClick={() => {setopenModal(!openModal)}}
                        />
                    ):(
                        <FontAwesomeIcon icon="chevron-right" 
                            onClick={() => {setopenModal(!openModal)}}
                        />
                    )}
                    {openModal === true &&(<DownloadModal />)}
                </div>
                
            
            <span
                className="text-red text-center mt-mt_106 block text-xl"
            >
                TIP! 해당 매물의 후기를 둥지에서 확인해보세요
            </span>
        </div>
            
        
    )
}