import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Header() {
    return (
        <header
            className="flex w-screen justify-between px-[18px] 
                py-4  h-24 items-center  border-b sm:w-[375px] sm:m-auto"
        >
            <div className="flex text-[17px] items-center Pretendard-SemiBold">
                <Link href="/map">
                    <a>
                        <FontAwesomeIcon icon="chevron-left" />
                    </a>
                </Link>
                <div className="ml-[6px]">필터</div>
            </div>
            <Link href="/map">
                    <a>
                        <div className="text-[12px] Pretendard-Regular text-hover_orange">취소</div>
                    </a>
            </Link>
        </header>
    );
}
