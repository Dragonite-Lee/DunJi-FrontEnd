import { useState, ChangeEvent } from 'react';
import Toast from 'components/common/Toast';
import useToggle from 'hooks/useToggle';

function Withdraw() {
  const [input, setInput] = useState('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [
    toastState,
    ,
    { toggleOn: handleToastOpen, toggleOff: handleToastClose },
  ] = useToggle();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAction = () => {
    console.log('action');
    setIsValid(true);
  };

  return (
    <div className="flex flex-col justify-between h-full p-[18px]">
      <div>
        <h2 className="text-[17px] mb-2 bold">계정 비밀번호</h2>
        <input
          type="text"
          placeholder="계정 비밀번호"
          className="w-full rounded-[10px] h-[50px] px-3.5 py-4"
          onChange={handleInputChange}
        />
      </div>
      <div className="mt-20">
        <h2 className="text-[17px] mb-2 bold">회원탈퇴 안내</h2>
        <p className="text-[#A9A7A2] text-[15px]">
          * 탈퇴 후 개인 정보, 매물 기록 등의 데이터가 삭제되며, 복구 할 수
          없습니다.
        </p>
        <p className="text-[#A9A7A2] text-[15px]">
          * 자세한 내용은 개인정보처리방침을 확인해주세요.
        </p>
      </div>
      <div
        onClick={handleAction}
        className={`${
          isValid ? 'bg-[#FF9240]' : 'bg-[#A9A7A2]'
        } absolute bottom-0 h-24  w-full left-0 right-0 text-[#fff] text-[17px] text-center leading-[84px]  `}
      >
        탈퇴하기
      </div>
      {toastState && (
        <Toast
          content={'계정 비밀번호가 올바르지 않습니다.'}
          handleClose={handleToastClose}
        />
      )}
    </div>
  );
}
export default Withdraw;
