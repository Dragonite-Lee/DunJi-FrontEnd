import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

export default function ContractContent() {
    const direction = ["up", "down"];
    const [openModal1,setopenModal1] = useState(false);
    const [openModal2,setopenModal2] = useState(false);
    const [openModal3,setopenModal3] = useState(false);
    const [openModal4,setopenModal4] = useState(false);
    
    return (
        <div className="h-full px-[18px]">
            {/* 양도승낙서 확인 */}
            <div
                className="Pretendard-SemiBold py-12 px-[18px] mt-10 bg-white rounded-standard_rounded rounded-b-none border-b-2 border-background_beige h-room_register_btn_height1 text-2xl flex justify-between items-center" 
            >
                <div>1. 양도승낙서 확인하기</div>
                { openModal1 === true ? (
                    <FontAwesomeIcon icon="chevron-up" 
                    onClick={() => {setopenModal1(!openModal1)}}
                />
                ) : (
                    <FontAwesomeIcon icon="chevron-down" 
                    onClick={() => {setopenModal1(!openModal1)}}
                />
                )}
            </div>
            { openModal1 === true  && (
                <div className="Pretendard-Regular py-4 px-[18px] bg-white text-xl">
                    <div className="my-2">
                        1) 전대인(매물을 올린 사람)이 집주인에게 매물 올리는 것을
                         허락 받았는지 확인해야합니다 <span className="underline">양도승낙서</span>를 받으세요!
                         그래야 <span className="underline">보증금</span>을 보호받을 수 있습니다.
                    </div>
                    <div className="text-font_gray mt-6 text-xl">
                        <span className="font-bold">*양도승낙서:</span> 양도에 대한 동의 사실을 기재한 문서 
                        임대인과 임차인의 인적사항과 양도 대상에 대한 정보를 기재합니다. 
                        동의자의 서명, 날인 필수입니다!
                    </div>
                    <Image src={require("../../../assets/icon/contract/임차권_양도_승낙서.png")} alt="임차권양도승낙서"/>
                    <div className="mt-6">
                        <span className="font-bold">2) 서식 구성항목:</span> 전대부동산의 표시, 양도 승낙 내용, 임대 조건, 작성일자, 작성자, 서명
                    </div>
                    <div className="mt-6">
                        <span className="font-bold">3) 민629조 1항</span> 임차인은 임대인의 동의없이 양도, 전대 불가<br />
                        <span className="font-bold">민629조 2항</span> 전항의 규정에 위반하면 임대인 계약해지 가능
                    </div>
                </div>
            )}
            {/* 신상정보 일치여부 확인 */}
            <div
                className="Pretendard-SemiBold py-12 px-[18px] mt-2 bg-white border-b-2 border-background_beige h-room_register_btn_height1 text-2xl flex justify-between items-center" 
            >
                <div>2. 신상정보 일치여부 확인하기</div>
                { openModal2 === true ? (
                    <FontAwesomeIcon icon="chevron-up" 
                    onClick={() => {setopenModal2(!openModal2)}}
                />
                ) : (
                    <FontAwesomeIcon icon="chevron-down" 
                    onClick={() => {setopenModal2(!openModal2)}}
                />
                )}
            </div>
            { openModal2 === true  && (
                <div className="Pretendard-Regular py-4 px-[18px] bg-white text-xl">
                    <div className="my-2">
                    1) 임대차 계약서에 작성되어 있는 전차인(집주인), 임차인 (매물 올린 사람)의 주민등록번호를 포함한 신상을 신분증과 대조해보고 해당 건물이 집주인 명의가 맞는지 등기부등본을 확인하세요!
                    </div>
                </div>
            )}
            {/* 양도양수계약서 작성 */}
            <div
                className="Pretendard-SemiBold py-12 px-[18px] mt-2 bg-white border-b-2 border-background_beige h-room_register_btn_height1 text-2xl flex justify-between items-center" 
            >
                <div>3. 양도양수계약서 작성하기</div>
                { openModal3 === true ? (
                    <FontAwesomeIcon icon="chevron-up" 
                    onClick={() => {setopenModal3(!openModal3)}}
                />
                ) : (
                    <FontAwesomeIcon icon="chevron-down" 
                    onClick={() => {setopenModal3(!openModal3)}}
                />
                )}
            </div>
            { openModal3 === true  && (
                <div className="Pretendard-Regular py-4 px-[18px] bg-white text-xl">
                    <div className="my-2">
                        1) 가능하다면 모든 과정을 대면으로, 최대한 꼼꼼히 확인해 보고 진행하세요!
                    </div>
                    <Image src={require("../../../assets/icon/contract/부동산_권리_양도_계약서.gif")} alt="부동산권리양도계약서"/>
                </div>
            )}
            {/* 임차권 등기명령 신청 */}
            <div
                className={`Pretendard-SemiBold py-12 px-[18px] mt-2 bg-white rounded-standard_rounded  
                rounded-t-none border-b-2 border-background_beige h-room_register_btn_height1 text-2xl flex justify-between items-center
                ${ openModal4 === true ? "rounded-b-none" : "" }`} 
            >
                <div>4. 임차권 등기명령 신청하기</div>
                { openModal4 === true ? (
                    <FontAwesomeIcon icon="chevron-up" 
                    onClick={() => {setopenModal4(!openModal4)}}
                />
                ) : (
                    <FontAwesomeIcon icon="chevron-down" 
                    onClick={() => {setopenModal4(!openModal4)}}
                />
                )}
            </div>
            { openModal4 === true  && (
                <div className="Pretendard-Regular pt-4 pb-12 px-[18px] bg-white text-xl rounded-standard_rounded rounded-t-none">
                    <div className="my-2">
                        1) 양수인의 계약기간이 다 되어 이사나갈 때 보증금을 되돌 려주겠다는 집주인의 말만 믿고 이사를 가면, 스스로 보증금 을 포기한 것이 되어 보증금을 돌려받을 수 없습니다. 
                    </div>
                    <div className="mt-6">
                        2) 이사하기 전에 임차권 등기명령을 신청하고, 신청이 받아 들여졌는지 확인 후에 이사하세요! 
                    </div>
                    <div className="my-6">
                        3) 임차권 등기명령이 받아들여지면 다른 집으로 이사 가서 그 집에 전입신고를 하고 확정일자를 받더라도 전에 살던 집 에 대한 전입신고와 확정일자가 효력을 잃지않아 나중에라도 집주인에게서 보증금을 되돌려 받을 수 있습니다.
                    </div>
                    <Image src={require("../../../assets/icon/contract/임차권_등기명령_신청방법.png")} alt="임차권등기명령신청방법"/>
                </div>
            )}
            <div className="Pretendard-Regular text-font_gray mt-24 pb-44 text-xl text-center">
                둥지를 도와주시는 법무사분이 계십니다.<br />
                추가로 궁금하신 부분은 채팅으로 문의해주세요.
            </div>
        </div>
    );
}