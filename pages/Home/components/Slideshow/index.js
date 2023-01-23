// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';

import slide1 from '@/public/slide1.png'
import slide2 from '@/public/slide2.png'

export default function Slideshow() {
    return (
        <>
            <div className='slideshow'>
                <Swiper
                    modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide><Image className='slide-img' src={slide1} /></SwiperSlide>
                    <SwiperSlide><Image className='slide-img' src={slide2} /></SwiperSlide>
                </Swiper>                
            </div>
        </>
    )
}