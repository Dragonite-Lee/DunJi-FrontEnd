import Image from 'next/image';
import ContentField from 'client/room/detail/ContentField';
import useToggle from 'hooks/useToggle';

interface OptionProps {
  advantage: string[];
  option: string[];
}

function Option({
  advantage, option
}: OptionProps) {
  const [open, handlerOpen] = useToggle()
  // const optionList = [
  //   {
  //     title: '에어컨',
  //     data: option[0],
  //   },
  //   {
  //     title: '냉장고',
  //     data: option[1],
  //   },
  //   {
  //     title: '세탁기',
  //     data: option[2],
  //   },
  //   {
  //     title: '가스레인지',
  //     data: option[3],
  //   },
  //   {
  //     title: '인덕션',
  //     data: option[4],
  //   },
  //   {
  //     title: '전자레인지',
  //     data: option[5],
  //   },
  //   {
  //     title: '책상',
  //     data: option[6],
  //   },
  //   {
  //     title: '책장',
  //     data: option[7],
  //   },
  //   {
  //     title: '침대',
  //     data: option[8],
  //   },
  //   {
  //     title: '옷장',
  //     data: option[9],
  //   },
  //   {
  //     title: '싱크대',
  //     data: option[10],
  //   },
  //   {
  //     title: '신발장',
  //     data: option[11],
  //   },
  // ];
  const detailOptionList = [
    {
      title: '앨레베이터',
      data: advantage.indexOf('앨레베이터') == -1 ? 'X' : 'O',
    },
    {
      title: '주차공간',
      data: advantage.indexOf('주차공간') == -1 ? 'X' : 'O',
    },
    {
      title: '반려동물',
      data: advantage.indexOf('반려동물') == -1 ? 'X' : 'O',
    },
    {
      title: '여성전용',
      data: advantage.indexOf('여성전용') == -1 ? 'X' : 'O',
    },
    {
      title: '전세대출',
      data: advantage.indexOf('전세대출') == -1 ? 'X' : 'O',
    },
  ];

  return (
    <div className="w-full rounded-standard_rounded bg-component_white my-4">
      <div
        onClick={handlerOpen}
        className={`${
          open && `border-b border-border_color`
        } h-20 text-[17px] Pretendard-SemiBold  flex items-center px-[18px]`}
      >
        옵션
        <div className={`ml-auto w-10 h-12 relative ${open && 'rotate-180'}`}>
          <Image
            src={require('assets/icon/화살표_펼치기.svg')}
            alt="arrow"
            objectFit="contain"
            layout="fill"
            className="rotate-180"
          />
        </div>
      </div>
      {open && (
        <div>
          <div className="grid grid-cols-4 gap-2 px-[14px] py-[20px] text-[12px] Pretendard-Regular border-b border-border_color">
            {option && option.map((item, index) => (
              <div className="text-center" key={index}>
                <Image
                  src={require(`assets/icon/option/옵션_${item[index]}.svg`)}
                  alt={`${item[index]}`+"사진"}
                />
                <div>{item[index]}</div>
              </div>
            ))}
          </div>
          <div className="px-[18px] ">
            {detailOptionList.map((item, index) => (
              <div key={index}>
                <ContentField
                  title={item.title}
                  content={item.data}
                  last={index !== detailOptionList.length - 1}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Option;
