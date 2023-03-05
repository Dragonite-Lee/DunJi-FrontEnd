import { useCallback } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { roomApi } from '_api/room';
import BottomSubmitBtnLayout from 'components/common/BottomSubmitBtnLayout';
import { RoomRegisterState, RootState } from 'types';
import isEmpty from 'utils/isEmpty';

const deleteArr = [
  'ADDRESS_OPEN',
  'COMPONENT_HANDLER',
  'DETAIL_COMPONENT_OPEN',
  'POSTCODE_OPEN',
  'advantage',
  'elevator',
  'car',
  'pet',
  'women',
  'loan',
  'mainImage',
  'mainImageUrl',
  'room1Image',
  'room1ImageUrl',
  'room2Image',
  'room2ImageUrl',
  'option',
  'optionAll',
  'tenancyAgreement',
  'manage',
  'utility',
  'postRoomFailure',
  'postRoomSuccess',
  'managementCost',
  'manageElec',
  'manageGas',
  'manageWater',
  'manageInternet',
  'manageTv',
];

const roomPostRequiredFields = [
  { longitude: '주소를' },
  { latitude: '주소를' },
  { address: '주소를' },
  { addressDetail: '상세주소를' },
  { roomType: '방 종류를' },
  { dealType: '거래유형을' },
  { priceUnit: '가격 단위를' },
  { deposit: '보증금을' },
  { price: '일/주/월세를' },
  { managementCost: '관리비를' },
  { totalFloor: '전체 층을' },
  { floor: '현재 층을' },
  { structure: '층/구조 -> 구조를' },
  { roomSize: '방 크기를' },
  { startedAt: '입주 가능 기간(시작 시점)을' },
  { finishedAt: '입주 가능 기간(종료 시점)을' },
  { title: '방 제목을' },
  { content: '상세설명을' },
  { files: '사진을' },
];

function BottomSubmitBtn() {
  const dispatch = useDispatch();
  const roomRegister = useSelector((state: RootState) => state.roomRegister);
  const {longitude, latitude, userId, elevator, car, pet, women, loan, mainImage, room1Image, room2Image, manage, managementCost, utility, option, optionAll, tenancyAgreement } = useSelector((state: RootState) => state.roomRegister);

  const checkHandler = async () => {
    const formData = new FormData();

    const utility_arr = ['electricity', 'gas', 'water', 'internet', 'tv'];
    const option_arr = ['airConditioner', 'refrigerator', 'washingMachine', 'gasStove', 'induction', 'microwave', 'desk', 'bookcase', 'bed', 'closet', 'sink', 'shoeCabinet',];
    const advantage_arr = ['elevators','parking','pets','womenOnly','loan'];
    const advantage_stateArr = [elevator, car, pet, women, loan]
    const image_arr = [
      ...mainImage,
      ...room1Image,
      ...room2Image,
    ];

    //formdata에 값 입력
    for (const item in roomRegister) if (!isEmpty(roomRegister[item as keyof RoomRegisterState])) formData.append(item, String(roomRegister[item as keyof RoomRegisterState]));
    // isEmpty에서 적절하게 처리 안되는 항목 제거 후 따로 formData에 입력
    for (let i = 0; i < deleteArr.length; i++) formData.delete(deleteArr[i]);
    formData.append('longitude', String(longitude));
    formData.append('latitude', String(latitude));
    //전세를 택하면 월세가 사라짐
    if (formData.get('priceUnit') == '전세') formData.set('price', '0');
    //utility 전송 ("전기세, 가스비, 수도세, 인터넷, TV")
    for (let i = 0; i < utility_arr.length; i++) {
      formData.append(utility_arr[i], String(utility[i]));
    };
    //관리비유무에 따른 managementCost 전송
    if (manage === 0) {
      formData.append('managementCost', '0');
    } else if (manage == 1) {
      formData.append('managementCost', String(managementCost));
    };
    //option 전송 ("에어컨, 냉장고, 세탁기, 가스레인지, 인덕션, 전자레인지, 책상, 책장, 침대, 옷장, 싱크대, 신발장")
    for (let i = 0; i < option_arr.length; i++) {
      formData.append(option_arr[i], String(option[i]));
    };
    formData.append('fullOption', String(optionAll))
    //advantage 전송 ("엘리베이터, 주차공간, 반려동물, 여성전용, 전세대출")
    for (let i = 0; i < advantage_arr.length; i++) {
      formData.append(advantage_arr[i], String(advantage_stateArr[i]));
    };
    //tenancyAgreement 전송
    if(tenancyAgreement === 0) {
      formData.append('tenancyAgreement', String(0))
    } else if(tenancyAgreement === 1) {
      formData.append('tenancyAgreement', String(1))
    }
    //formData에 이미지 합쳐서 전송
    for (let i = 0; i < image_arr.length; i++) formData.append('files', image_arr[i]);
    formData.append('image', String(image_arr.length));
    //userID 전송
    formData.append('userId', userId);
    
    for (const i of formData.entries()) {
      console.log(i);
    }
    try {
      for (const item of roomPostRequiredFields) {
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

      await roomApi.postRoom(formData).then((res) => {
        console.log(res);
        Router.push(`/room/${res.data.roomId}`);
      });
    } catch (err) {
      alert(err + ' 입력해 주세요');
    }
  };
  
  return <BottomSubmitBtnLayout state={mainImage.length && room1Image.length && room2Image.length}
    content="방 내놓기" onClick={checkHandler} 
  />;
}

export default BottomSubmitBtn;
