import { useState } from 'react';
import Toast from 'components/common/toast';

function NickNameEdit() {
  const [toastState, setToastState] = useState(false);

  const handleEdit = () => {
    setToastState(true);
  };

  const handleToastClose = () => {
    setToastState(false);
  };
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="grow">
        <input
          type="text"
          placeholder="닉네임 입력"
          className="w-full rounded-[10px] h-[50px] px-3.5 py-4"
        />

        <div className="mx-4 my-7 text-[15px]">
          <h3>닉네임 생성규칙</h3>
          <p className="text-[#A9A7A2]">
            * [./_] 이외의 특수문자는 사용할 수 없어요
          </p>
          <p className="text-[#A9A7A2]">* [./_] 는 중간에만 사용 가능해요</p>
          <p className="text-[#A9A7A2]">* 최소 2자, 최대 12자</p>
        </div>
      </div>
      <div
        onClick={handleEdit}
        className="absolute bottom-0 h-24 bg-[#A9A7A2] w-full left-0 right-0 text-[#fff] text-[17px] text-center leading-[84px] "
      >
        수정하기
      </div>

      {toastState && (
        <Toast
          content={`닉네임이 올바르지 않습니다.\n 다시 입력해주세요.`}
          handleClose={handleToastClose}
        />
      )}
    </div>
  );
}
export default NickNameEdit;
