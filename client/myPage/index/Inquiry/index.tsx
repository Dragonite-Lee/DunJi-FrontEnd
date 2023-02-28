import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import errorIcon from 'assets/icon/error_basic.png';
import ResultContainer from 'client/myPage/index/Inquiry/ResultContainer';
import Alert from 'components/common/Alert';
import useToggle from 'hooks/useToggle';
import { AllRoomType } from 'types';

const DUMMY: AllRoomType[] = [
  {
    roomId: '8L72IJCK',
    latitude: 35.45049592,
    longitude: 127.571393,
    sigungu: '안산시 상록구',
    dong: '사동',
    priceUnit: '월세',
    price: 50,
    deposit: 10,
    roomType: '원룸',
    dealType: '단기임대',
    structure: '오픈형',
    floor: 2,
    roomSize: 25,
    heartNum: 2,
    image: 'assets/images/room2.png',
  },
];

function Inquiry() {
  const [input, setInput] = useState('');
  const isValidSaleNumber = validSaleNumber(input);
  const [isAlertOn, handleAlert] = useToggle();
  const [result, setResult] = useState<AllRoomType[]>([]);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAction = () => {
    // TODO
    console.log(input);
    // handleAlert();
    setResult(DUMMY);
  };

  return (
    <div className="flex flex-col justify-between h-full p-[18px]">
      <div className="grow">
        <input
          type="text"
          placeholder="매물번호 입력"
          className="w-full rounded-[10px] h-[50px] px-3.5 py-4"
          onChange={handleInputChange}
        />

        <ResultContainer result={result} />
      </div>
      <div
        onClick={handleAction}
        className={`${
          isValidSaleNumber ? 'bg-[#FF9240]' : 'bg-[#A9A7A2]'
        } absolute bottom-0 h-24  w-full left-0 right-0 text-[#fff] text-[17px] text-center leading-[84px]  `}
      >
        조회하기
      </div>
      {isAlertOn && (
        <Alert
          content={
            <>
              <Image src={errorIcon} alt="숨기기 버튼" width={60} height={60} />
              <p>해당 번호의 매물이 존재하지 않습니다</p>
            </>
          }
          onClose={handleAlert}
        />
      )}
    </div>
  );
}

const validSaleNumber = (saleNumber: string) => {
  return true;
  // TODO
};

export default Inquiry;
