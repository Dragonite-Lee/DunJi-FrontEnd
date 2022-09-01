import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { ChangeEvent, useState } from "react";


export default function Home() {

    

    return (
        <div className="h-screen">
            <div className="py-10">
                {/* *학교필터 */}
                <div className="flex items-center border-b-2 border-border_color text-3xl justify-between py-8 px-10">
                    <div className="flex items-center justify-between">
                        <FontAwesomeIcon icon="chevron-down" />
                        <div className="px-4 Pretendard-SemiBold">한양대 ERICA</div>
                    </div>
                    <Image src={require("../assets/icon/더보기.svg")} />
                </div>
                {/* *로고와 메인글 */}
                <header className="flex items-center text-4xl justify-between pt-8 pb-3 mx-10">
                    <div>
                        <div className="flex items-end justify-between">
                            <div className="w-4/5">
                                <Image
                                    src={require("../assets/icon/main/main_char.png")}
                                />
                            </div>
                            <div className="text-4xl w-3/5 mb-5 Pretendard-SemiBold">
                                어떤 방을<br/>
                                찾고 계신가요?
                            </div>
                        </div>
                    </div>
                </header>
                {/* *지역검색  */}
                <section className="mx-20">
                    <input type="text" className="w-full py-10"/>
                </section>
                {/* *메인이벤트 슬라이더박스 */}
            </div>

            <nav className="p-12 bg-component_white">
                <span className="text-2xl">이런 서비스도 있어요</span>
                <div className="grid grid-cols-3 gap-5 my-12">
                    <div className="w-32">
                        <div className="flex justify-center items-center bg-light_yellow  w-32 h-32 rounded-3xl border border-title_color">
                            <div className="w-32 h-32 flex items-center">
                                <Image
                                    alt="box"
                                    src={require("../assets/icon/main/box_icon.png")}
                                ></Image>
                            </div>
                        </div>
                        <span className="flex justify-center my-2 text-xl">
                            짐 보관
                        </span>
                    </div>
                </div>
            </nav>
            {/* *로고와 사업자명 등등 푸터 */}
            <footer className="bg-component_white flex items-center justify-between py-36 px-10">
                <div className="w-1/4">
                <Image src={require("../assets/icon/main/logo_gray.png")} />
                </div>
                <div className="w-3/4 text-font_gray text-footer px-4">
                    상호 : 네스트소프트 | 대표 : 정재현<br />
                    사업자등록번호 : 317-06-02039<br />
                    서비스 이용문의 : 010-9210-2745<br />
                    이메일 jjangjjh2222@naver.com<br />
                    주소 : 한양대학교 ERICA 제5공학관 SW창업1실<br />
                    통신 판매업 신고번호 : 제2022-대전중구-0621호<br />
                </div>
            </footer>
        </div>
    );
}
