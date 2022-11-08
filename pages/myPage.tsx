import Image from "next/image";
import Link from "next/link";
import TabBar from "components/main/TabBar";
import Header from "components/mypage/Header";
import Profile from "components/mypage/Profile";
import SquareZone from "components/mypage/SquareZone";
import Content from "components/mypage/Content";

export default function Mypage() {
    
    
    
    return (
        <div className="bg-background_beige min-h-full sm:w-[375px] sm:m-auto pb-[120px]">
            <TabBar />
            <Header />
            <Profile />
            <SquareZone />
            <Content />
        </div>
    );
}

