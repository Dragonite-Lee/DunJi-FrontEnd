import { useCallback, useState } from 'react';
import Router from 'next/router';
import { roomApi } from '_api';
import useRoomRedux from 'hooks/useRoomRedux';
import useRoomRegisterRedux from 'hooks/useRoomRegisterRedux';
import { dispatchRoomId } from 'store/modules/room';
import { postRoom } from 'store/modules/roomRegister';

export default function BottomNextBtn() {
  const [state, dispatch] = useRoomRegisterRedux();
  const [state2, dispatch2] = useRoomRedux();
  const isEmpty = useCallback(function (value: any) {
    if (
      value == '' ||
      value == null ||
      value == undefined ||
      (value != null && typeof value == 'object' && !Object.keys(value).length)
    ) {
      return true;
    } else {
      return false;
    }
  }, []);

  // console.log(state)
  const checkHandler = async () => {
    const formData = new FormData();

    const user_id = state.registrant;

    console.log(state);
    for (const item in state) {
      if (!isEmpty(state[item])) formData.append(item, state[item]); //formdata에 값 입력
    }

    // isEmpty에서 적절하게 처리 안되는 항목 제거 후 따로 formData에 입력
    const delete_arr = [
      'ADDRESS_OPEN',
      'COMPONENT_HANDLER',
      'DETAIL_COMPONENT_OPEN',
      'POSTCODE_OPEN',
      'sido',
      'ri',
      'jibun',
      'manageSelect',
      'option',
      'car',
      'pet',
      'loan',
      'onlyWomen',
      'manageCost',
      'manage',
      'mainImage',
      'mainImageUrl',
      'room1Image',
      'room1ImageUrl',
      'room2Image',
      'room2ImageUrl',
      'optionAll',
      'postRoomFailure',
    ];
    for (let i = 0; i < delete_arr.length; i++) formData.delete(delete_arr[i]);

    //전세를 택하면 월세가 사라짐
    if (formData.get('priceUnit') == '전세') {
      formData.set('price', '0');
    }

    // redux에서 관리비 전기세,가스,수도,인터넷,TV를 배열관리하여 formData에선 각 항목을 입력
    const manage_arr = [
      'manageElec',
      'manageGas',
      'manageWater',
      'manageInternet',
      'manageTv',
    ];
    for (let i = 0; i < manage_arr.length; i++)
      formData.append(manage_arr[i], state['manageSelect'][i]);

    // redux에서 옵션(상세정보) 배열관리하여 formData에선 각 항목을 입력
    const option_arr = [
      'aircon',
      'refri',
      'washer',
      'gas',
      'induc',
      'micro',
      'desk',
      'shelf',
      'bed',
      'closet',
      'sink',
      'shoe',
    ];
    for (let i = 0; i < option_arr.length; i++)
      formData.append(option_arr[i], state['option'][i]);

    // 상단 isEmpty에서 필터링 되는 항목들 따로 입력

    if (state.manage === 0) {
      formData.append('manage', '0');
    } else if (state.manage == 1) {
      formData.append('manage', state.manageCost);
    }

    if (state.optionAll === 0) {
      for (let i = 0; i < option_arr.length; i++) {
        formData.append(option_arr[i], '0');
      }
    }
    const chooseOneArr = ['car', 'pet', 'women', 'loan']; // 두 항목 중 하나를 고르는 경우 (주차공간, 반려동물, 전세대출)

    for (let i = 0; i < chooseOneArr.length; i++)
      if (state[chooseOneArr[i]] !== 2)
        formData.append(chooseOneArr[i], state[chooseOneArr[i]]);

    const checkBox_arr = ['elevator', 'availConsul'];

    for (let i = 0; i < checkBox_arr.length; i++)
      formData.append(checkBox_arr[i], state[checkBox_arr[i]]);

    const image_arr = [
      ...state.mainImage,
      ...state.room1Image,
      ...state.room2Image,
    ];
    // console.log(image_arr)
    for (let i = 0; i < image_arr.length; i++) {
      formData.append('file', image_arr[i]);
    }

    const all_items_arr = [
      { longitude: '주소를' },
      { latitude: '주소를' },
      // { sido: "주소를" },
      { sigungu: '주소를' },
      { dong: '주소를' },
      // { ri: "주소를" },
      // { jibun: "주소를" },
      { address: '주소를' },
      { detailAddress: '상세주소를' },
      { roomType: '방 종류를' },
      { dealType: '거래유형을' },
      { priceUnit: '가격 단위를' },
      { deposit: '보증금을' },
      { price: '일/주/월세를' },
      { manage: '관리비를' },
      // { manageCost: "관리비 유무를" },
      { manageElec: '관리비 옵션를' },
      { manageGas: '관리비 옵션을' },
      { manageWater: '관리비 옵션을' },
      { manageInternet: '관리비 옵션을' },
      { manageTv: '관리비 옵션을' },
      { wholeFloor: '전체 층을' },
      { floor: '현재 층을' },
      { struct: '층/구조 -> 구조를' },
      { elevator: '엘리베이터 유무를' },
      { roomSize: '방 크기를' },
      { availFrom: '입주 가능 기간(시작 시점)을' },
      { availTo: '입주 가능 기간(종료 시점)을' },
      { availConsul: '입주 기간 협의 여부를' },
      // { optionAll: "옵션 유무를"},
      { aircon: '옵션을' },
      { refri: '옵션을' },
      { washer: '옵션을' },
      { gas: '옵션을' },
      { induc: '옵션을' },
      { micro: '옵션을' },
      { desk: '옵션을' },
      { shelf: '옵션을' },
      { bed: '옵션을' },
      { closet: '옵션을' },
      { sink: '옵션을' },
      { shoe: '옵션을' },
      { car: '옵션을' },
      { pet: '옵션을' },
      { loan: '옵션을' },
      { women: '옵션을' },
      { title: '방 제목을' },
      { explain: '상세설명을' },
      { file: '사진을' },
    ];

    try {
      for (const item of all_items_arr) {
        const key = Object.keys(item)[0];
        const message = Object.values(item)[0];
        if (!formData.has(key)) {
          throw message;
        }
        if (key === 'entireFloor' && formData.get('entireFloor') === '전체층') {
          throw '전체 층을';
        } else if (key === 'floor' && formData.get('floor') === '현재층') {
          throw '현재 층을';
        } else if (key === 'struct' && formData.get('struct') === '구조') {
          throw '구조를';
        }
      }
      for (const i of formData.entries()) {
        console.log(i);
      }
      dispatch(postRoom(formData));

      await roomApi.postRoom(formData).then((res) => {
        console.log(res);
        dispatch2(dispatchRoomId(res.data.Room_ID));
        Router.push(`/room/${res.data.Room_ID}`);
      });
    } catch (err) {
      alert(err + ' 입력해 주세요');
    }
  };

  return (
    <div
      className="sm:w-[375px] Pretendard-SemiBold sm:m-auto bg-main absolute bottom-0 w-screen flex flex-col items-center h-[8rem] justify-around"
      onClick={checkHandler}
    >
      <div className="text-[17px] text-white">방 내놓기</div>
      <div className="bg-white rounded-standard_rounded w-[15rem] h-3" />
    </div>
  );
}
