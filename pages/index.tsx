import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Home() {
    return (
        <div className="h-screen">
            <div className="h-2/5 bg-yellow">
                <header className="flex items-center text-4xl justify-between py-9 mx-10">
                    <div className="flex items-end justify-between">
                        <div className="w-4/5">
                            <Image
                                src={require("../assets/icon/main/main_char.png")}
                                alt=""
                            ></Image>
                        </div>
                        <div className="text-4xl w-3/5 mb-5 Pretendard-SemiBold">
                            어떤 방을<br/>
                            찾고 계신가요?
                        </div>
                    </div>
                </header>
                <section className="mx-20">
                    <div className="ml-4 text-2xl mb-6">학교 어디야?</div>
                    <div className="bg-white flex items-center h-20 w-full border-2 border-title_color rounded-3xl">
                        <div className="w-12 h-12 ml-2 ">
                            <Image
                                src={require("../assets/icon/main/search_icon.png")}
                                alt="search"
                            ></Image>
                        </div>
                        <input className="ml-4 w-full h-full border-none outline-none bg-transparent"></input>
                    </div>
                </section>
            </div>
            <nav className="p-12">
                <span className="text-2xl">이런 서비스도 있어요</span>
                <div className="grid grid-cols-3 gap-5 my-12">
                    <div className="w-32">
                        <div className="flex justify-center items-center bg-light_yellow w-32 h-32 rounded-3xl border border-title_color">
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
                    <div className="w-32">
                        <div className="flex justify-center items-center bg-light_yellow  w-32 h-32 rounded-3xl border border-title_color">
                            <div className="w-20 h-20 flex items-center">
                                <Image
                                    alt="mop"
                                    src={require("../assets/icon/main/mop_icon.png")}
                                ></Image>
                            </div>
                        </div>
                        <span className="flex justify-center my-2 text-xl">
                            청소
                        </span>
                    </div>
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
        </div>
    );
}
