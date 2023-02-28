type PropsType = {
  value?: string;
  status?: boolean;
  btnHandler: () => void;
};

function BottomMainBtn({ value, status, btnHandler }: PropsType) {
  return (
    <button
      className={
        status
          ? 'bg-[#FF9240] h-[50px] text-[17px] text-[#ffffff] opacity-70 Pretendard-SemiBold'
          : 'bg-[#A9A7A2] h-[50px] text-[17px] text-[#ffffff] opacity-70 Pretendard-SemiBold'
      }
      onClick={btnHandler}
    >
      {value}
    </button>
  );
}

export default BottomMainBtn;
