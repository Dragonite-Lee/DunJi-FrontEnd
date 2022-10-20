type propsType = {
    title: String;
};

export default function CategoryHeader2({ title }: propsType) {
    return (
        <div className="pb-[8px] text-[17px] mt-8 Pretendard-SemiBold">
            {title}
            <span className="text-font_gray text-[12px] Pretendard-Regular">&nbsp;</span>
        </div>
    );
}
