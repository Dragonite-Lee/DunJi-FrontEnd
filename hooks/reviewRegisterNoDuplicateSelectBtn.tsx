interface propsType {
  value: string;
  check: boolean;
  index: number;
  checkHandler: (index: number) => void;
};

function NoDuplicateSelectBtn({value, check, index, checkHandler,}: propsType) {
  return (
    <button
      className={`focus-bg-black rounded-r-lg h-room_register_btn_height1 text-[15px] 
        ${check ? 'bg-font_gray border text-white' : 'border border-font_gray'} 
        ${index === 1 ? 'rounded-none ' : index == 0 ? 'rounded-r-standard_rounded' : 'rounded-l-standard_rounded'}
      `}
      onClick={() => {
        checkHandler(index);
        console.log(index);
      }}
    >
      {value}
    </button>
  );
}

export default NoDuplicateSelectBtn;