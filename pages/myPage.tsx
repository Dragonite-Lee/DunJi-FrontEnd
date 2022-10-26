import Image from "next/image";
import Link from "next/link";
import TabBar from "components/main/TabBar";
import Header from "components/mypage/Header";

export default function Mypage() {
    
    
    
    return (
        <div className="bg-background_beige h-screen sm:w-[375px] sm:m-auto">
            <TabBar />
            <Header />
        </div>
    );
}

