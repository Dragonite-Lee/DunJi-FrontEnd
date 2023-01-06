import { useCallback } from 'react';
import { reviewApi } from '_api/room';
import useReviewRegisterRedux from 'hooks/useReviewRegisterRedux';
import BottomNextBtnLayout from 'components/common/BottomNextBtnLayout';

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
];
const all_items_arr = [
  { address: '주소를' },
  { detailAddress: '상세주소를' },
  { file: '사진을' },
  { content: '상세설명을' },
  { total: '별점을' },
  { clean: '쳥결도를' },
  { sound: '방음을' },
  { accessible: '위치를' },
  { landlord: '집주인 친절도를' },
  { facility: '만족도를' },
  { period: '거주기간을' },
];

function BottomNextBtn() {
  const [state, dispatch] = useReviewRegisterRedux();
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
  
  const checkHandler = async () => {
    const formData = new FormData();
    // const user_id = state.registrant;
    //formdata에 값 입력
    for (const item in state) {
      if (!isEmpty(state[item])) formData.append(item, state[item]); 
    }

    // isEmpty에서 적절하게 처리 안되는 항목 제거 후 따로 formData에 입력
    for (let i = 0; i < delete_arr.length; i++) formData.delete(delete_arr[i]);

    //파일 업로드
    const image_arr = [...state.Reviewfile];
    for (let i = 0; i < image_arr.length; i++) {
      formData.append('file', image_arr[i]);
    }

    //후기(5가지 사항) 업로드
    const review_arr=["clean", "sound", "accessible", "landlord", "facility"];
    const review_stateArr=[state.clean, state.sound, state.accessible, state.landlord, state.facility];
    for (let i = 0; i < review_arr.length; i++) {
      if (review_stateArr[i] == '만족') {
        formData.append(review_arr[i], '0');
      } else if (review_stateArr[i] == '보통') {
        formData.append(review_arr[i], '1');
      } else if (review_stateArr[i] == '불만족') {
        formData.append(review_arr[i], '2');
      }
    }

    //거주 기간 업로드
    const period = state.periodFrom + ' ~ ' + state.periodTo;
    formData.append('period', period);

    //별점
    formData.append('total', state.totalNum);

    
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

  return (
    <BottomNextBtnLayout content="후기 작성" onClick={checkHandler} />
  );
}

export default BottomNextBtn;