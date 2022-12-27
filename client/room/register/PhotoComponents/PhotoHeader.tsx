interface PhotoHeaderProps {
  title: string;
  subTitle: string;
}

function PhotoHeader({ title, subTitle }: PhotoHeaderProps) {
  return (
    <>
      <div className="text-[17px] Pretendard-SemiBold">{title}&nbsp;</div>
      <div className="text-[12px] Pretendard-Regular my-2 text-font_gray">
        {subTitle}
      </div>
    </>
  );
}

export default PhotoHeader;
