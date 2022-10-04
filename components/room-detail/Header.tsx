import Image from "next/image";
import Link from "next/link";
import Router from "next/router"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type propsType = {
    title: string;
};
export default function Header({ title }: propsType) {
    return (
        <header
            className="flex w-full justify-between px-[18px] 
        py-4  Pretendard-SemiBold h-24 items-center text-[17px]  border-b"
        >
            <div className="flex items-center">
                    <a
                        onClick={() => {
                            Router.back();
                        }}
                    >
                        <FontAwesomeIcon icon="chevron-left" />
                    </a>
                <div className="ml-4">{title}</div>
            </div>
            <div className="flex gap-4">
                <Image
                    src={require("assets/icon/하트_찜_X.svg")}
                    width={22}
                    height={22}
                    alt="heart"
                />
                <Image
                    src={require("assets/icon/공유.svg")}
                    width={22}
                    height={22}
                    alt="share"
                />
                <Image
                    src={require("assets/icon/더보기.svg")}
                    width={22}
                    height={22}
                    alt="three-dot"
                />
            </div>
        </header>
    );
}
