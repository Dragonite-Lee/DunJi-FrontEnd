type propsType = {
    title: String;
};

export default function CategoryHeader({ title }: propsType) {
    return (
        <div className="pb-[8px] text-[17px] mt-[16px] Pretendard-SemiBold">
            {title}
        </div>
    );
}
