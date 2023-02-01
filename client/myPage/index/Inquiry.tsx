import { ChangeEvent, useState } from 'react';

function Inquiry() {
  const [input, setInput] = useState('');
  const isValidSaleNumber = validSaleNumber(input);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAction = () => {
    // TODO
    console.log(input);
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="grow">
        <input
          type="text"
          placeholder="닉네임 입력"
          className="w-full rounded-[10px] h-[50px] px-3.5 py-4"
          onChange={handleInputChange}
        />

        <div className="mx-1 my-7 text-[14px] text-[#FF9240]">
          매물번호를 조회하면 더 쉽게 매물 정보를 얻을 수 있습니다!
        </div>
      </div>
      <div
        onClick={handleAction}
        className={`${
          isValidSaleNumber ? 'bg-[#FF9240]' : 'bg-[#A9A7A2]'
        } absolute bottom-0 h-24  w-full left-0 right-0 text-[#fff] text-[17px] text-center leading-[84px]  `}
      >
        조회하기
      </div>
    </div>
  );
}

const validSaleNumber = (saleNumber: string) => {
  return true;
  // TODO
};

export default Inquiry;
