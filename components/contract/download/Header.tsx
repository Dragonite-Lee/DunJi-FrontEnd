import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

export default function Header() {

    
    return (
        <>
            <header
                className="flex w-screen justify-between px-standard_pd 
                    py-4  h-24 items-center text-xl  border-b mb-10"
            >
                <div className="flex text-2xl items-center">
                    <div>
                        <Link href="/room/contract">
                            <a>
                                <FontAwesomeIcon icon="chevron-left" />
                            </a>
                        </Link>
                    </div>
                    <div className="text-3xl ml-4 Pretendard-SemiBold">파일다운로드</div>
                </div>
                <Image  src={require("../../../assets/icon/더보기.svg")} />
            </header>
        </>
    );
}