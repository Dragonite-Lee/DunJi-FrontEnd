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

            <div className="pb-12 w-full">
                {/* *학교필터 */}
                <div className="flex items-center border-b-2 border-border_color text-3xl justify-between py-8 px-[18px]">
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
                <header className="flex items-center text-4xl justify-between pt-8 pb-3 mx-[18px]">
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
                <div className="relative h-20 mx-[18px]">
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

            <div className="pt-[35px] px-[18px] bg-component_white">
                {/* *하나부터 열까지 둥지와 함께 서비스 */}
                <div>
                    <div className="text-[16px] Pretendard-SemiBold">하나부터 열까지 둥지와 함께!</div>
                    <div className="mt-[16px] grid grid-cols-2 gap-[8px]">
                        <div className="px-[20px] py-[27px] flex items-center justify-between Pretendard-SemiBold text-[17px] rounded-standard_rounded bg-white">
                            <Image 
                                alt="트럭"
                                src={require("../assets/icon/main/service/서비스_이삿짐.svg")}
                            />
                            <div>둥지 서비스</div>
                        </div>
                        <div className="pl-[28px] pr-[32px] py-[27px] flex items-center justify-between Pretendard-SemiBold text-[17px] rounded-standard_rounded bg-white">
                            <Image 
                                alt="트럭"
                                src={require("../assets/icon/main/service/메인_공지사항.svg")}
                            />
                            <div>공지사항</div>
                        </div>
                        <Link href="/room/contract">
                            <div className="pl-[16px] pr-[16px] py-[27px] flex items-center justify-between Pretendard-SemiBold text-[17px] rounded-standard_rounded bg-white">
                                <Image 
                                
                                    alt="트럭"
                                    src={require("../assets/icon/main/service/계약서가이드.svg")}
                                />
                                <div>계약서 가이드</div>
                            </div>
                        </Link>
                        <div className="px-[32px] py-[27px] flex items-center justify-between Pretendard-SemiBold text-[17px] rounded-standard_rounded bg-white">
                            <Image 
                                alt="트럭"
                                src={require("../assets/icon/main/service/마이_커뮤니티 활동.svg")}
                            />
                            <div>커뮤니티</div>
                        </div>
                    </div>
                </div>
                
                    
                    

            </div>
            {/* *로고와 사업자명 등등 푸터 */}
            <footer className="bg-component_white flex items-center justify-between py-36 px-[18px] w-full">
                <div className="w-[9rem]">
                <Image 
                    width={77}
                    height={33}
                    alt="둥지로고"
                    src={require("../assets/icon/main/logo_gray.png")} 
                />
                </div>
                <div className="w-[25rem] text-font_gray text-[9px] leading-4 Pretendard-Regular">
                    상호 : 네스트소프트 | 대표 : 정재현 |
                    사업자등록번호 : 317-06-02039<br />
                    서비스 이용문의 : 010-9210-2745 |
                    이메일 jjangjjh2222@diver.com
                    주소 : 한양대학교 ERICA 제5공학관 SW창업1실<br />
                    통신 판매업 신고번호 : 제2022-대전중구-0621호<br />
                </div>
            </footer>
        </div>
    );
}
