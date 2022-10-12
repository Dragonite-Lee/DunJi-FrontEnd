import Image from "next/image";
import { useState } from "react";

type propsType = {
    title: string;
    explain: string;
};
export default function Review({ explain }: propsType) {
    const [open, setOpen] = useState(false);
    const openHandler = () => setOpen(!open);
    return (
        <div className="w-full rounded-standard_rounded bg-component_white my-4">
            <div
                onClick={openHandler}
                className={`${open && `border-b border-border_color`}`}
            >
                <div className=" h-28 flex items-center px-[18px]">
                    <div className="ml-4">
                        <div className="text-[1.5rem] font-[600]">둥지냉면</div>
                        <div className="flex gap-1 text-font_gray ">
                            <span className="border-[0.1rem] w-24 text-center py-[0.1rem] rounded-[0.6rem]  border-border_color">
                                대학생
                            </span>
                        </div>
                    </div>
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
            </div>
            {open && (
                <div className="px-[18px]">
                    <div className="text-[1.5rem] pb-4">{explain}</div>
                </div>
            )}
        </div>
    );
}
