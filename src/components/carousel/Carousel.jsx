import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import  { Autoplay } from 'swiper/modules';

export default function Carousel() {
    return (
        <div className="flex justify-center mt-3">
            <Swiper spaceBetween={5} slidesPerView={1} loop={true} modules={[Autoplay]}
            className="w-full md:w-8/12 lg:w-8/12" pagination={true} 
            autoplay={{ delay: 5000, disableOnInteraction: false}}>
                <SwiperSlide> 
                    <img src="/img/burger1.png"/> 
                </SwiperSlide>

                <SwiperSlide>
                    <img src="/img/burger2.png"/> 
                </SwiperSlide>
            </Swiper>
        </div>
    );
}