import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

type propsType = {
    children: any;
    open: boolean;
    title: string;
    setOpen: Dispatch<SetStateAction<boolean>>;
};
export default function OpenLayout({
    children,
    open,
    setOpen,
    title,
}: propsType) {
    const openHandler = () => setOpen(!open);
    return (
        <div className="w-full rounded-standard_rounded bg-component_white my-4">
            <div
                onClick={openHandler}
                className={`${
                    open && `border-b border-border_color`
                } h-20 text-[17px] Pretendard-SemiBold  flex items-center px-[18px]`}
            >
                {title}
                <div
                    className={`ml-auto w-10 h-12 relative ${
                        open && "rotate-180"
                    }`}
                >
                    <Image
                        src={require("assets/icon/화살표_펼치기.svg")}
                        alt="arrow"
                        objectFit="contain"
                        layout="fill"
                        className="rotate-180"
                    />
                </div>
            </div>
            <div className="px-[18px] ">{open && children}</div>
        </div>
    );
}
