import { useState } from 'react';
import InfoField from 'client/room/InfoField';
import OpenLayout from 'client/room/OpenLayout';

interface PriceProps {
  price: number;
  deposit: number;
  manageElec: number;
  manageGas: number;
  manageWater: number;
  manageInternet: number;
  manageTV: number;
  manageCost: number;
  manageInclude: string;
}

function Price({
  price,
  deposit,
  manageCost,
  manageElec,
  manageGas,
  manageWater,
  manageInternet,
  manageTV,
  manageInclude,
}: PriceProps) {
  const [open, setOpen] = useState(false);

  const manageContent = `${manageCost} 만원\n 관리비에 포함 ${manageInclude}`;
  const manageContentEnter = manageContent.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));
  const optionArr = [
    { value: manageElec, type: '전기' },
    { value: manageGas, type: '가스' },
    { value: manageWater, type: '수도' },
    { value: manageInternet, type: '인터넷' },
    { value: manageTV, type: '티비' },
  ];

  const priceTypeArr = [
    {
      title: '월세',
      data: price + '만원',
    },
    { title: '보증금', data: deposit + '만원' },
    {
      title: '관리비',
      data: manageContentEnter,
    },
  ];

  return (
    <OpenLayout open={open} setOpen={setOpen} title="가격 정보">
      {priceTypeArr.map((priceType, index) => (
        <InfoField
          key={index}
          title={priceType.title}
          content={priceType.data}
          last={index !== priceTypeArr.length - 1}
        />
      ))}
    </OpenLayout>
  );
}

export default Price;
