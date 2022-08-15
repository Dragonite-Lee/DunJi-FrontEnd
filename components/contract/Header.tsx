import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {

    const [contractCode, setcontractCode] = useState(0);

    return (
        <>
            {contractCode === 0 ? (
                <header
                    className="flex w-screen justify-between px-standard_pd 
                        py-4  h-24 items-center text-xl  border-b"
                >
                    <div className="flex text-2xl items-center">
                        <div>
                            <Link href="/">
                                <a>
                                    <FontAwesomeIcon icon="chevron-left" />
                                </a>
                            </Link>
                        </div>
                        <div className="ml-4 Pretendard-SemiBold">계약서 가이드</div>
                    </div>
                    <Image  src={require("../../assets/icon/더보기.svg")} />
                </header>
            ) : (
                <header
                    className="flex w-screen justify-between px-standard_pd 
                        py-4  h-24 items-center text-xl  border-b"
                >
                    <div className="flex text-2xl items-center">
                        <div>
                            <FontAwesomeIcon icon="chevron-left" />
                        </div>
                        <div className="ml-4">방 내놓기</div>
                    </div>
                    <div className="text-main">도움말</div>
                </header>
            )}
                
            
                
            
        </>
    );
}
