type propsType = {
  title: string;
};

export default function CategoryHeader2({ title }: propsType) {
  return (
    <div className="pb-[8px] text-[17px] mt-[16px] Pretendard-SemiBold">
      {title}
      <span className="ml-2 text-font_gray text-[12px] Pretendard-Regular">
        &nbsp;중복선택가능
      </span>
    </div>
  );
}
