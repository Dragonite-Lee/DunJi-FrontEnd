import ContentField from 'client/room/detail/ContentField';
import OpenLayout from 'client/room/detail/OpenLayout';
import useToggle from 'hooks/useToggle';

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
  const [open, handlerOpen] = useToggle();

  const manageContent = `${manageCost} 만원\n 관리비에 포함 ${manageInclude}`;
  const manageContentEnter = manageContent.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));
  // const optionArr = [
  //   { value: manageElec, type: '전기' },
  //   { value: manageGas, type: '가스' },
  //   { value: manageWater, type: '수도' },
  //   { value: manageInternet, type: '인터넷' },
  //   { value: manageTV, type: '티비' },
  // ]; 데이터 들어오면 사용될 수 있음

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
    <OpenLayout open={open} handlerOpen={handlerOpen} title="가격 정보">
      {priceTypeArr.map((priceType, index) => (
        <ContentField
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
