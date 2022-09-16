import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { dispatchSlideBox } from "store/modules/main";
import useMainRedux from "hooks/useMainRedux";
import Header from "components/map/Header"; 
import Link from "next/link";
import Carousel from "components/main/Carousel";


export default function Home() {

    const [state,dispatch] = useMainRedux();
    
    
    // const Kakao = () => {
    //     const KakaoLogout = () => {
    //         const kakao = kakaoInit();
    
    //         console.log(kakao.Auth.getAccessToken()); // 카카오 접근 토큰 확인 (로그인 후 해당 토큰을 이용하여 추가 기능 수행 가능)
    
    //         // 카카오 로그인 링크 해제
    //         kakao.API.request({
    //             url: '/v1/user/unlink',
    //             success: (res: any) => {
    //                 // 로그인 성공할 경우 정보 확인 후 / 페이지로 push
    //                 console.log(res);
                    
    //             },
    //             fail: (error: any) => {
    //                 console.log(error);
    //             }
    //         })
    //     }
    // }

    return (
        <div className="h-screen ">

            <div className="pb-10 w-full">
                {/* *학교필터 */}
                <div className="flex items-center border-b-2 border-border_color text-3xl justify-between py-8 px-7">
                    <div className="flex items-center justify-between">
                        <FontAwesomeIcon icon="chevron-down" />
                        <div className="px-4 Pretendard-Regular">한양대 ERICA</div>
                    </div>
                    <div className="flex Pretendard-Regular items-center justify-between">
                        <Link href="/login">
                            <div>회원가입</div>
                        </Link>
                        <Image src={require("../assets/icon/더보기.svg")} />
                    </div>
                </div>
                {/* *로고와 메인글 */}
                <header className="flex items-center text-4xl justify-between pt-8 pb-3 mx-7">
                    <div>
                        <div className="flex items-end justify-between">
                            <div className="w-4/5">
                                <Image
                                    width={215}
                                    height={157}
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
                <div className="relative h-20 mx-7">
                    <div className="absolute  left-6 bottom-[0] flex items-center h-full">
                        <Image
                            alt="돋보기"
                            width={22}
                            height={22}
                            src={require("assets/icon/main/메뉴바_검색_활성화.svg")} 
                        />
                    </div>
                    <Link href="/map">
                        <input
                            type="text"
                            className="bg-white rounded-[8rem] h-full text-xl pl-20 placeholder-font_border_color outline-0 w-full"
                            placeholder="지역, 지하철, 대학교 검색"
                        ></input>
                    </Link>
                </div>
                {/* *메인이벤트 슬라이더박스 */}
                <div>
                    <Carousel />
                </div>
            </div>

            <nav className="p-10 bg-component_white">
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
            <footer className="bg-component_white flex items-center justify-between py-36 px-7 w-full">
                <div className="w-1/4">
                <Image src={require("../assets/icon/main/logo_gray.png")} />
                </div>
                <div className="w-3/4 text-font_gray text-xs px-4 leading-5">
                    상호 : 네스트소프트 | 대표 : 정재현 |
                    사업자등록번호 : 317-06-02039<br />
                    서비스 이용문의 : 010-9210-2745 |
                    이메일 jjangjjh2222@naver.com
                    주소 : 한양대학교 ERICA 제5공학관 SW창업1실<br />
                    통신 판매업 신고번호 : 제2022-대전중구-0621호<br />
                </div>
            </footer>
        </div>
    );
}
