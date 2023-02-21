import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { reviewApi } from '_api/room';
import BottomSubmitBtnLayout from 'components/common/BottomSubmitBtnLayout';
import { ReviewRegisterState, RootState } from 'types';
import isEmpty from 'utils/isEmpty';

const delete_arr = [
  'ADDRESS_OPEN',
  'COMPONENT_HANDLER',
  'POSTCODE_OPEN',
  'Reviewfile',
  'ReviewfileUrl',
  'clean',
  'sound',
  'accessible',
  'landlord',
  'facility',
  'periodFrom',
  'periodTo',
  'total',
  'totalNum',
  'totalUrl',
  'userId'
];

const all_items_arr = [
  { content: '상세설명을' },
  { address: '주소를' },
  { addressDetail: '상세주소를' },
  { image: '사진을' },
  { cleanRate: '쳥결도를' },
  { noiseRate: '방음을' },
  { accessRate: '위치를' },
  { hostRate: '집주인 친절도를' },
  { facilityRate: '만족도를' },
  { period: '거주기간을' },
  { totalRate: '별점을' },
];

function BottomSubmitBtn() {
  const reviewRegister = useSelector((state: RootState) => state.reviewRegister);
  const {Reviewfile, clean, sound, accessible, landlord, facility, periodFrom, periodTo, userId, totalNum} = useSelector((state: RootState) => state.reviewRegister);
  
  const checkHandler = async () => {
    const formData = new FormData();

    const image_arr = [...Reviewfile];
    const review_arr = ['cleanRate', 'noiseRate', 'accessRate', 'hostRate', 'facilityRate'];
    const review_stateArr = [
      clean,
      sound,
      accessible,
      landlord,
      facility,
    ];
    const period = periodFrom + ' ~ ' + periodTo;

    //formdata에 값 입력
    for (const item in reviewRegister) if (!isEmpty(reviewRegister[item as keyof ReviewRegisterState])) formData.append(item, String(reviewRegister[item as keyof ReviewRegisterState]));
    // isEmpty에서 적절하게 처리 안되는 항목 제거 후 따로 formData에 입력
    for (let i = 0; i < delete_arr.length; i++) formData.delete(delete_arr[i]);
    //파일 업로드
    for (let i = 0; i < image_arr.length; i++) formData.append('image', image_arr[i]);
    //후기(5가지 사항) 업로드
    for (let i = 0; i < review_arr.length; i++) {
      if (review_stateArr[i] == '만족') {
        formData.append(review_arr[i], '5');
      } else if (review_stateArr[i] == '보통') {
        formData.append(review_arr[i], '3');
      } else if (review_stateArr[i] == '불만족') {
        formData.append(review_arr[i], '0');
      }
    }
    //userID업로드
    formData.append('userId', userId);
    //거주 기간 업로드
    formData.append('period', period);
    //별점
    formData.append('totalRate', String(totalNum));
    
    for (const i of formData.entries()) {
      console.log(i);
    }
    try {
      for (const item of all_items_arr) {
        const key = Object.keys(item)[0];
        const message = Object.values(item)[0];
        if (!formData.has(key)) {
          throw message;
        }
      }

      await reviewApi.postReview(formData).then((res) => {
        // console.log(res);
        // dispatch2(dispatchRoomId(res.data.Room_ID))
        // Router.push(`/room/${res.data.Room_ID}`)
      });
    } catch (e) {
      alert(e + ' 입력해 주세요');
    }
  };

  return <BottomSubmitBtnLayout state={Reviewfile && clean && sound && accessible && landlord && facility && totalNum} 
    content="후기 작성" 
    onClick={checkHandler} 
  />;
}

export default BottomSubmitBtn;
