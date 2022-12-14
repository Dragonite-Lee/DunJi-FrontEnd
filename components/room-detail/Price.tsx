import { useState } from 'react';
import InfoField from './InfoField';
import OpenLayout from './OpenLayout';

type propsType = {
  price: number;
  deposit: number;
  manageElec: number;
  manageGas: number;
  manageWater: number;
  manageInternet: number;
  manageTV: number;
  manageCost: number;
  manageInclude: string;
};

export default function Price({
  price,
  deposit,
  manageCost,
  manageElec,
  manageGas,
  manageWater,
  manageInternet,
  manageTV,
  manageInclude,
}: propsType) {
  const [open, setOpen] = useState(false);

  const optionArr = [
    { value: manageElec, type: '전기' },
    { value: manageGas, type: '가스' },
    { value: manageWater, type: '수도' },
    { value: manageInternet, type: '인터넷' },
    { value: manageTV, type: '티비' },
  ];
  const manageContent = manageCost + '만원' + '\n관리비에 포함' + manageInclude;
  const manageContentEnter = manageContent.split('\n').map((line, index) => {
    return (
      <span key={index}>
        {line}
        <br />
      </span>
    );
  });
  const arr = [
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
      {arr.map((item, index) => (
        <InfoField
          key={index}
          title={item.title}
          content={item.data}
          last={index !== arr.length - 1}
        />
      ))}
    </OpenLayout>
  );
}
