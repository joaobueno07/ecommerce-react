import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';

export default function Carousel() {
    return (
        <div className="flex justify-center mt-3">
            <Swiper spaceBetween={5} slidesPerView={1} loop={true} 
            className="w-full md:w-8/12 lg:w-8/12" pagination={true}>
                <SwiperSlide> 
                    <img src="/img/1.png"/> 
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/img/2.png"/> 
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/img/3.png"/> 
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/img/4.png"/> 
                </SwiperSlide>
            </Swiper>
        </div>
    );
}