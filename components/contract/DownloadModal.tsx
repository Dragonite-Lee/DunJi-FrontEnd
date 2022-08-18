import Image from "next/image";
import axios from "axios";

export default function DownloadModal() {
    

    return (
        <div className="absolute top-24 right-0">
            <div className="Pretendard-Regular bg-white text-xl p-4 rounded-standard_rounded " id="down">
                <ul>
                    <li><a href="https://dungzi-bucket.s3.ap-northeast-2.amazonaws.com/dungzi-bucket/contract/부동산_권리양도_계약서.jpg" download>부동산 권리양도 계약서 다운</a></li>
                    <li><a href="https://dungzi-bucket.s3.ap-northeast-2.amazonaws.com/dungzi-bucket/contract/임차권_양도_승낙서.jpg" download>임차권 양도 승낙서 다운</a></li>
                    <li><a href="https://dungzi-bucket.s3.ap-northeast-2.amazonaws.com/dungzi-bucket/contract/전대동의서.jpg" download>전대동의서 다운</a></li>
                    <li><a href="https://dungzi-bucket.s3.ap-northeast-2.amazonaws.com/dungzi-bucket/contract/전대차_계약서.jpg" download>전대차 계약서 다운</a></li>
                </ul>
            </div>
        </div>
    )
}