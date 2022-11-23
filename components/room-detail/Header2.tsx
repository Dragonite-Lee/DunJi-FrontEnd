import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Router from "next/router";

export default function Header2() {
    return (
        <header
            className="flex w-screen justify-between px-[18px] mb-[25px]
                py-4  h-24 items-center  border-b sm:w-[375px] sm:m-auto"
        >
            <div className="flex text-[17px] items-center Pretendard-SemiBold">
                <Link href="/" passHref>
                    <a onClick={() => {
                            Router.back();
                        }}>
                        <FontAwesomeIcon icon="chevron-left" />
                    </a>
                </Link>
                <div className="ml-[6px]">방 상세페이지</div>
            </div>
            <Link href="/" passHref>
                    <a>
                        <div className="text-[12px] Pretendard-Regular text-hover_orange">취소</div>
                    </a>
            </Link>
        </header>
    );
}
