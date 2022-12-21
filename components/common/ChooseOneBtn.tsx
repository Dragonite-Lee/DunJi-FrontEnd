type propsType = {
  value: string;
  check: 0 | 1 | 2;
  checkHandler: (index: number) => void;
};

export default function ChooseOneBtn({
  value,
  check,
  checkHandler,
}: propsType) {
  const arr = [
    { type: '가능', value: 1 },
    { type: '불가능', value: 0 },
  ];
  const womenarr = [
    { type: '전용', value: 1 },
    { type: '공용', value: 0 },
  ];

  return (
    <div className=" rounded-standard_rounded overflow-hidden text-black  grid grid-cols-2 border border-font_gray items-center h-full">
      {value == '여성'
        ? womenarr.map((item, index) => (
            <button
              key={index}
              className={`${
                index === 0 && 'border-r'
              }  border-font_gray h-full ${
                check === item.value && 'text-white bg-font_gray'
              }`}
              onClick={() => checkHandler(item.value)}
            >
              {item.type}
            </button>
          ))
        : arr.map((item, index) => (
            <button
              key={index}
              className={`${
                index === 0 && 'border-r'
              }  border-font_gray h-full ${
                check === item.value && 'text-white bg-font_gray'
              }`}
              onClick={() => checkHandler(item.value)}
            >
              {item.type}
            </button>
          ))}
    </div>
  );
}
