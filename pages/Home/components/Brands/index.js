// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';

import brand1 from '@/public/brands/adidas.jpg';
import brand2 from '@/public/brands/asics.jpg';
import brand3 from '@/public/brands/converse.jpg';
import brand4 from '@/public/brands/fila.jpg';
import brand5 from '@/public/brands/new-balance.jpg';
import brand6 from '@/public/brands/new-era.jpg';
import brand7 from '@/public/brands/nike.jpg';
import brand8 from '@/public/brands/puma.jpg';
import brand9 from '@/public/brands/starter.jpg';
import brand10 from '@/public/brands/tommy.jpg';
import brand11 from '@/public/brands/vans.jpg';

export default function BrandsList() {
    return (
        <>
            <div className={'brands mb-5'}>
                <div className={'col-md-12 col-sm-12 col-xs-12'}>
                    <div className={'container'}>
                        <h2 className={'mt-3 mb-3'}>Marcas</h2>
                        <div className={'row'}>
                            <Swiper
                                modules={[Autoplay, Navigation, Scrollbar, A11y]}
                                spaceBetween={20}
                                slidesPerView={8}
                                slidesPerGroup={4}
                                navigation={false}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide><Image className='brand-img' src={brand1} /></SwiperSlide>
                                <SwiperSlide><Image className='brand-img' src={brand2} /></SwiperSlide>
                                <SwiperSlide><Image className='brand-img' src={brand3} /></SwiperSlide>
                                <SwiperSlide><Image className='brand-img' src={brand4} /></SwiperSlide>
                                <SwiperSlide><Image className='brand-img' src={brand5} /></SwiperSlide>
                                <SwiperSlide><Image className='brand-img' src={brand6} /></SwiperSlide>
                                <SwiperSlide><Image className='brand-img' src={brand7} /></SwiperSlide>
                                <SwiperSlide><Image className='brand-img' src={brand8} /></SwiperSlide>
                                <SwiperSlide><Image className='brand-img' src={brand9} /></SwiperSlide>
                                <SwiperSlide><Image className='brand-img' src={brand10} /></SwiperSlide>
                                <SwiperSlide><Image className='brand-img' src={brand11} /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}