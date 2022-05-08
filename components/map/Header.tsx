import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CommonBtn from "./CommonBtn";

export default function Header() {
    const [searchVal, setSearchVal] = useState("");
    const [filterSelect1, setFilterSelect1] = useState(false);
    const [filterSelect2, setFilterSelect2] = useState(false);
    const [filterSelect3, setFilterSelect3] = useState(false);
    const [filterSelect4, setFilterSelect4] = useState(false);

    const btnArr = [
        {
            check: filterSelect1,
            checkHandler: setFilterSelect1,
            value: "원룸, 오피스텔",
        },
        { check: filterSelect2, checkHandler: setFilterSelect2, value: "월세" },
        {
            check: filterSelect3,
            checkHandler: setFilterSelect3,
            value: "방 크기",
        },
        {
            check: filterSelect4,
            checkHandler: setFilterSelect4,
            value: "관리비",
        },
    ];

    return (
        <header className=" w-full px-standard_pd pt-6 z-10 bg-background_beige">
            <div className="text-2xl h-[3.5rem] flex items-center justify-between">
                <Link href="/" passHref>
                    <Image
                        width={22}
                        height={22}
                        alt="arrow"
                        src={require("icon/화살표.svg")}
                    />
                </Link>
                <div className="relative h-[3.5rem] w-[90%]">
                    <input
                        type="text"
                        className="bg-white  rounded-[10rem] h-full text-xl pl-8 placeholder-font_gray outline-0 w-full"
                        placeholder="지역 검색"
                        value={searchVal}
                        onChange={(e) => {
                            setSearchVal(e.target.value);
                        }}
                    ></input>
                    {searchVal && (
                        <div
                            onClick={() => setSearchVal("")}
                            className="absolute  right-3 bottom-[0] flex items-center h-full"
                        >
                            <Image
                                width={22}
                                height={22}
                                alt="x"
                                src={require("icon/검색_X.svg")}
                            ></Image>
                        </div>
                    )}
                </div>
            </div>
            <div className="h-[2.5rem] flex gap-2 my-8">
                <Link href="/map/filter">
                    <a>
                        <Image
                            width={22}
                            height={22}
                            alt="x"
                            src={require("icon/검색_X.svg")}
                        ></Image>
                    </a>
                </Link>
                {btnArr.map((item, index) => (
                    <CommonBtn
                        key={index}
                        check={item.check}
                        value={item.value}
                        checkHandler={item.checkHandler}
                    />
                ))}
            </div>
        </header>
    );
}
