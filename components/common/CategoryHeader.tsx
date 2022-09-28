type propsType = {
    title: String;
};

export default function CategoryHeader({ title }: propsType) {
    return (
        <div className="pt-[16px] pb-[8px] text-[17px] border-t border-border_color mt-[30px] Pretendard-SemiBold">
            {title}
        </div>
    );
}
