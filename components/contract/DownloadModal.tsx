import Image from "next/image";

export default function DownloadModal() {
    
    

    return (
        <div className="absolute">
            <div className="Pretendard-Regular p-8 bg-white text-xl">
                <a href="#" download>
                    <button>
                        <Image src={require("../../assets/icon/화살표.svg")} />
                    </button>
                </a>
                <p>2</p>
            </div>
        </div>
    )
}