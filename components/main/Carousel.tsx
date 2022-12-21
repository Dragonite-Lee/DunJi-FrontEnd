import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { useState } from 'react';
import useMainRedux from 'hooks/useMainRedux';
import { dispatchSlideBox } from 'store/modules/main';

export default function Carousel() {
  const [state, dispatch] = useMainRedux();
  const settings = {
    dots: false, //점 안보이게
    infinite: true, //무한으로 재생되게
    speed: 500,
    slidesToShow: 1, //1장씩 보이게
    slidesToScroll: 1, //1장씩 넘어가게
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };
  const [slideImg, setSlideImg] = useState(state.SLIDEBOX);

  return (
    <div className="carousel px-7 pt-12 w-full">
      <Slider {...settings}>
        {slideImg.map((item: any, index: number) => (
          <div key={index} className="relative">
            <div className="sm:w-[340px] w-full h-[100px]">
              <Image
                height={100}
                alt="슬라이더"
                src={require(`../../assets/icon/main/slide/slide${
                  index + 1
                }.png`)}
              ></Image>
            </div>
            <div className="absolute z-10 right-3 bottom-4 bg-slide px-4 py-1 rounded-standard_rounded">
              <p className="text-white">
                <span className="Pretendard-Bold">{index + 1}</span>
                <span className="Regular"> / {slideImg.length}</span>
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
