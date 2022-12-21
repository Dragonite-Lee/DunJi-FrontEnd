type propsType = {
  title: string;
  subTitle: string;
};

export default function PhotoHeader({ title, subTitle }: propsType) {
  return (
    <>
      <div className="text-[17px] Pretendard-SemiBold">{title}&nbsp;</div>
      <div className="text-[12px] Pretendard-Regular my-2 text-font_gray">
        {subTitle}
      </div>
    </>
  );
}
