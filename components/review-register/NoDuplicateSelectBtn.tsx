type propsType = {
    value: string;
    check: boolean;
    index: number;
    checkHandler: (index: number) => void;
};

export default function NoDuplicateSelectBtn({
    value,
    check,
    index,
    checkHandler,
}: propsType) {
    
    return (
        <button
            className={`focus-bg-black rounded-standard_rounded h-room_register_btn_height1 text-[15px] ${
                check
                    ? "bg-font_gray border text-white"
                    : "border border-font_gray"
            } ${
                index == 1
                    ? "rounded-none "
                    : index == 0 ? "rounded-r" : "rounded-l"
            } 
            `}
            onClick={() => {
                checkHandler(index);
            }}
        >
            {value}
        </button>
    );
}