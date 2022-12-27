import { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContractContent() {
  const [openModal1, setopenModal1] = useState(false);
  const [openModal2, setopenModal2] = useState(false);
  const [openModal3, setopenModal3] = useState(false);
  const [openModal4, setopenModal4] = useState(false);

  return (
    <div className="h-full px-[18px]">
      {/* 전대동의서 확인 */}
      <div className="Pretendard-SemiBold py-12 px-[18px] mt-10 bg-white rounded-standard_rounded rounded-b-none border-b-2 border-background_beige h-room_register_btn_height1 text-[17px] flex justify-between items-center">
        <div>1. 전대동의서 확인하기</div>
        {openModal1 === true ? (
          <FontAwesomeIcon
            icon="chevron-up"
            onClick={() => {
              setopenModal1(!openModal1);
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon="chevron-down"
            onClick={() => {
              setopenModal1(!openModal1);
            }}
          />
        )}
      </div>
      {openModal1 === true && (
        <div className="Pretendard-Regular py-4 px-[18px] bg-white text-xl">
          <div className="my-2">
            1) 전대인(매물을 올린사람)이 집주인에게 매물 올리는 것을 허락
            받았는지 확인해야합니다.
            <span className="underline">전대 동의서</span>를 받으세요!
          </div>
          <div className="text-font_gray mt-6 text-xl">
            <span className="font-bold">*전대동의서:</span> 전대 사용에 대한
            동의 사실을 기재한 문서 임대인과 임차인의 인적사항과 전대 대상에
            대한 정보를 기재합니다. 동의자의 서명, 날인 필수입니다!
          </div>
          <Image
            src={require('assets/icon/contract/전대동의서.jpg')}
            alt="전대동의서"
          />
          <div className="mt-6">
            <span className="font-bold">2) 서식 구성항목:</span> 임대인
            인적사항, 임차인 인적사항, 전대 동의 내용, 전대부동산의 표시, 전대인
            인적사항, 전차인 인적 사항, 작성일자, 작성자, 서명
          </div>
          <div className="text-font_gray mt-6 text-xl">
            <span className="font-bold">*임대인과 임차인:</span> 집주인과 매물
            올린 사람의 관계
            <br />
            <span className="font-bold">*전대인과 전차인:</span> 매물 올린
            사람과 매물 구하는 사람
          </div>
          <div className="mt-6">
            <span className="font-bold">3) 민629조 1항</span> 임차인은 임대인의
            동의없이 양도, 전대 불가
            <br />
            <span className="font-bold">민629조 2항</span> 전항의 규정에
            위반하면 임대인 계약해지 가능
          </div>
        </div>
      )}
      {/* 임대차 계약서 확인 */}
      <div className="Pretendard-SemiBold py-12 px-[18px] mt-2 bg-white border-b-2 border-background_beige h-room_register_btn_height1 text-2xl flex justify-between items-center">
        <div>2. 임대차 계약서 확인하기</div>
        {openModal2 === true ? (
          <FontAwesomeIcon
            icon="chevron-up"
            onClick={() => {
              setopenModal2(!openModal2);
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon="chevron-down"
            onClick={() => {
              setopenModal2(!openModal2);
            }}
          />
        )}
      </div>
      {openModal2 === true && (
        <div className="Pretendard-Regular py-4 px-[18px] bg-white text-xl">
          <div className="my-2">
            1) 전대인(매물 올린 사람)이 집주인과 작성했던 임대차 계약 서를
            확인하세요!
          </div>
          <div className="mt-6">
            2) 전대인(매물 올린 사람)이 해당 매물 글에 입주가능기간을 임대차
            계약 만료 기간(매물 올린 사람의 계약 만료 기간)을 넘게 제시하지는
            않았는지 확인하세요!
          </div>
          <div className="mt-6">
            3) 특약에 집주인이 전대가능여부를 적어놓진 않았는지 확인 하세요!
          </div>
        </div>
      )}
      {/* 신상정보 일치여부 확인 */}
      <div className="Pretendard-SemiBold py-12 px-[18px] mt-2 bg-white border-b-2 border-background_beige h-room_register_btn_height1 text-2xl flex justify-between items-center">
        <div>3. 신상정보 일치여부 확인하기</div>
        {openModal3 === true ? (
          <FontAwesomeIcon
            icon="chevron-up"
            onClick={() => {
              setopenModal3(!openModal3);
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon="chevron-down"
            onClick={() => {
              setopenModal3(!openModal3);
            }}
          />
        )}
      </div>
      {openModal3 === true && (
        <div className="Pretendard-Regular py-4 px-[18px] bg-white text-xl">
          <div className="my-2">
            1) 임대차 계약서에 작성되어 있는 집주인과 전대인(매물 올 린 사람)의
            주민등록번호를 포함한 신상을 신분증과 대조해 보고 해당 건물이 집주인
            명의가 맞는지 등기부등본을 확인 하세요!
          </div>
        </div>
      )}
      {/* 전대차계약서 작성 */}
      <div
        className={`Pretendard-SemiBold py-12 px-[18px] mt-2 bg-white rounded-standard_rounded  
                rounded-t-none border-b-2 border-background_beige h-room_register_btn_height1 text-2xl flex justify-between items-center
                ${openModal4 === true ? 'rounded-b-none' : ''}`}
      >
        <div>4. 전대차계약서 작성하기</div>
        {openModal4 === true ? (
          <FontAwesomeIcon
            icon="chevron-up"
            onClick={() => {
              setopenModal4(!openModal4);
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon="chevron-down"
            onClick={() => {
              setopenModal4(!openModal4);
            }}
          />
        )}
      </div>
      {openModal4 === true && (
        <div className="Pretendard-Regular py-4 px-[18px] bg-white text-xl rounded-standard_rounded rounded-t-none">
          <div className="my-2">
            1) 가능하다면 모든 과정을 대면으로, 최대한 꼼꼼히 확인해 보고
            진행하세요!
          </div>
          <Image
            src={require('assets/icon/contract/전대차_계약서.gif')}
            alt="전대차계약서"
          />
        </div>
      )}
      <div className="Pretendard-Regular px-[18px] bg-background_beige text-font_gray pt-24 pb-44 text-xl text-center">
        둥지를 도와주시는 법무사분이 계십니다.
        <br />
        추가로 궁금하신 부분은 채팅으로 문의해주세요.
      </div>
    </div>
  );
}

export default ContractContent;
