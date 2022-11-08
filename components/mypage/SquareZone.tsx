import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

export default function SquareZone() {
    return (
        <div className="px-[18px] py-[20px]">
            <div className="grid grid-cols-2 gap-[9px]">
                <div className="h-[83px] flex items-center justify-center text-[17px] Pretendard-SemiBold bg-white py-[30px] rounded-standard_rounded">
                    <Image 
                        src={require("assets/icon/myPage/찜한매물.svg")}
                        width={33}
                        height={33}
                    />
                    <div className="ml-[4px]">
                        {/* *각 페이지로 이동해야함 */}
                        찜한 매물
                    </div>
                </div>
                <div className="h-[83px] flex items-center justify-center text-[17px] Pretendard-SemiBold bg-white py-[30px] rounded-standard_rounded">
                    <Image 
                        src={require("assets/icon/myPage/최근매물.svg")}
                        width={35}
                        height={35}
                    />
                    <div className="ml-[4px]">
                        {/* *각 페이지로 이동해야함 */}
                        최근 본 매물
                    </div>
                </div>
                <div className="h-[83px] flex items-center justify-center text-[17px] Pretendard-SemiBold bg-white py-[30px] rounded-standard_rounded">
                    <Image 
                        src={require("assets/icon/myPage/매물.svg")}
                        width={35}
                        height={35}
                    />
                    <div className="ml-[4px]">
                        {/* *각 페이지로 이동해야함 */}
                        매물 활동
                    </div>
                </div>
                <div className="h-[83px] flex items-center justify-center text-[17px] Pretendard-SemiBold bg-white py-[30px] rounded-standard_rounded">
                    <Image 
                        src={require("assets/icon/myPage/커뮤니티.svg")}
                        width={35}
                        height={35}
                    />
                    <div className="ml-[7px]">
                        {/* *각 페이지로 이동해야함 */}
                        커뮤니티 활동
                    </div>
                </div>
            </div>
        </div>
    );
}
