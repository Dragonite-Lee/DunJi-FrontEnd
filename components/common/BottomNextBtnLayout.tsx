
interface BottomNextBtnLayoutProps  {
  content: string;
  onClick: () => void;
};

function BottomNextBtnLayout({content,onClick}: BottomNextBtnLayoutProps) {
  return (
    <div className="sm:w-[375px] Pretendard-SemiBold sm:m-auto bg-main absolute bottom-0 w-screen flex flex-col items-center h-[8rem] justify-around"
        onClick={onClick}
    >
        <div className="text-[17px] text-white">{content}</div>
        <div className="bg-white rounded-standard_rounded w-[15rem] h-3" />
    </div>
  );
}

export default BottomNextBtnLayout;