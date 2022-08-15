import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

export default function Explanation() {

    
    return (
        <div className=" px-standard_pd flex justify-between items-center">
            <div className="Pretendard-SemiBold text-2xl">
                전대차 계약일 경우 <span className="font-sans">(단기임대 포함)</span>
            </div>
        </div>
    );
}