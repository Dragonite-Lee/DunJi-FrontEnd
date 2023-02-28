interface BottomSubmitBtnLayoutProps {
  state?: any;
  content: string;
  onClick: () => void;
}

function BottomSubmitBtnLayout({
  state,
  content,
  onClick,
}: BottomSubmitBtnLayoutProps) {
  return (
    <div>
      {state ? (
        <div
          className="sm:w-[375px] Pretendard-SemiBold sm:m-auto bg-main absolute bottom-0 w-screen flex flex-col items-center h-20 justify-around"
          onClick={onClick}
        >
          <div className="text-[17px] text-white">{content}</div>
          <div className="bg-white rounded-standard_rounded w-[15rem] h-3" />
        </div>
      ) : (
        <div
          className="min-w-[375px] sm:w-[375px] sm:m-auto bg-font_gray fixed bottom-0 w-screen flex flex-col items-center h-20 justify-around"
          onClick={onClick}
        >
          <div className="text-[17px] Pretendard-SemiBold text-white">
            {content}
          </div>
          <div className="bg-white rounded-standard_rounded w-[15rem] h-3" />
        </div>
      )}
    </div>
  );
}

export default BottomSubmitBtnLayout;
