import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import Image from "next/image";
import { useState } from "react";
import useRoomRegisterRedux from "hooks/useMainRedux";

type propsType = {
    RoomID: any
    image: number
};
export default function ImageSlide({RoomID,image}:propsType) {

    const [state, dispatch] = useRoomRegisterRedux();
    const settings = {
        dots: false,//점 안보이게
        infinite: true,//무한으로 재생되게
        speed: 500,
        slidesToShow: 1,//1장씩 보이게
        slidesToScroll: 1,//1장씩 넘어가게
        arrows: true,
        
    }
    const baseUrl = "https://dungzi-bucket.s3.ap-northeast-2.amazonaws.com/dungzi-bucket/room/"
    const mainImgUrl = `${baseUrl}{{${RoomID}}}/main.jpg`
    const extraImgUrl = [];
    // for (i = 1 ;i < )
    // const Img = [state.mainImage, ...state.room1Image, ...state.room2Image];
    // const [slideImg, setSlideImg] = useState(Img);
    
    

    return (
        <div className="carousel px-7 pt-12 w-full">
            <Slider {...settings}>
                {/* {slideImg.map((item:any,index:number) => (
                    <div key={index} className="relative">
                        <div className="sm:w-[340px] w-full h-[100px]">
                            <Image
                                height={100}
                                alt="슬라이더"
                                src={require(`${item}`)}
                            ></Image>
                        </div>
                        <div className="absolute z-10 right-3 bottom-4 bg-slide px-4 py-1 rounded-standard_rounded">
                            <p className="text-white">
                                <span className="Pretendard-Bold">{index+1}</span><span className="Regular"> / {slideImg.length}</span>
                            </p>
                        </div>
                    </div>
                ))} */}
            </Slider>
        </div>
    )
}