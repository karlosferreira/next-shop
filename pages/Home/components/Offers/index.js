// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';

import cat1 from '@/public/brands-offer/cat-promo1.jpg';
import cat2 from '@/public/brands-offer/cat-promo1.jpg';
import cat3 from '@/public/brands-offer/cat-promo1.jpg';
import cat4 from '@/public/brands-offer/cat-promo1.jpg';
import cat5 from '@/public/brands-offer/cat-promo1.jpg';
import cat6 from '@/public/brands-offer/cat-promo1.jpg';
import cat7 from '@/public/brands-offer/cat-promo1.jpg';
import cat8 from '@/public/brands-offer/cat-promo1.jpg';
import cat9 from '@/public/brands-offer/cat-promo1.jpg';
import cat10 from '@/public/brands-offer/cat-promo1.jpg';
import cat11 from '@/public/brands-offer/cat-promo1.jpg';

export default function OffersList() {
    return (
        <>
            <div className={'brands-offer'}>
                <div className={'col-md-12 col-sm-12 col-xs-12'}>
                    <div className={'container'}>
                        <div className={'row'}>
                            <Swiper
                                modules={[Autoplay, Navigation, Scrollbar, A11y]}
                                spaceBetween={20}
                                slidesPerView={5}
                                slidesPerGroup={5}
                                navigation={false}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide><Image className='brands-offer-img' src={cat1} /><div className='brands-offer-content'><h4>Moletons</h4></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat2} /><div className='brands-offer-content'><h4>Calças</h4></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat3} /><div className='brands-offer-content'><h4>Underwear</h4></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat4} /><div className='brands-offer-content'><h4>Camisetas</h4></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat5} /><div className='brands-offer-content'><h4>Bermudas</h4></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat6} /><div className='brands-offer-content'><h4>Polos</h4></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat7} /><div className='brands-offer-content'><h4>Bonés</h4></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat8} /><div className='brands-offer-content'><h4>Tenis</h4></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat9} /><div className='brands-offer-content'><h4>Esportivos</h4></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat10} /><div className='brands-offer-content'><h4>Chinelos</h4></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat11} /><div className='brands-offer-content'><h4>Mochilas</h4></div></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}