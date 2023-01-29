// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';

import cat1 from '@/public/cats/9237855ea58__moletom.jpg';
import cat2 from '@/public/cats/802581da7ce0__calca.jpg';
import cat3 from '@/public/cats/931ca880e309__image20221128175209.jpg';
import cat4 from '@/public/cats/a00451ce4db5__camiseta.jpg';
import cat5 from '@/public/cats/235d71e3a15fa__1_banner-categoria_180x180_masc_bermudas.jpg';
import cat6 from '@/public/cats/2817badb95f3b__jaqueta-corta-vento.jpg';
import cat7 from '@/public/cats/41e383cab926__bone.jpg';
import cat8 from '@/public/cats/13f49305a2fd4__8_banner-categoria_180x180_masc_tenisesportivo.jpg';
import cat9 from '@/public/cats/add365da0d76__tenis.jpg';
import cat10 from '@/public/cats/218d7a31ac0bb__image20220805140011.jpg';
import cat11 from '@/public/cats/57628ef9a1bf__4_banner-categoria_180x180_masc_mochilasshoulderbags.jpg';

export default function CategoryList() {
    return (
        <>
            <div className={'categories mt-5 mb-5'}>
                <div className={'col-md-12 col-sm-12 col-xs-12'}>
                    <div className={'container'}>
                        <div className={'row'}>
                            <Swiper
                                modules={[Autoplay, Navigation, Scrollbar, A11y]}
                                spaceBetween={20}
                                slidesPerView={6}
                                slidesPerGroup={3}
                                navigation={false}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide><Image className='cat-img' src={cat1} /><div className='banner-content'><h3>Moletons</h3></div></SwiperSlide>
                                <SwiperSlide><Image className='cat-img' src={cat2} /><div className='banner-content'><h3>Calças</h3></div></SwiperSlide>
                                <SwiperSlide><Image className='cat-img' src={cat3} /><div className='banner-content'><h3>Underwear</h3></div></SwiperSlide>
                                <SwiperSlide><Image className='cat-img' src={cat4} /><div className='banner-content'><h3>Camisetas</h3></div></SwiperSlide>
                                <SwiperSlide><Image className='cat-img' src={cat5} /><div className='banner-content'><h3>Bermudas</h3></div></SwiperSlide>
                                <SwiperSlide><Image className='cat-img' src={cat6} /><div className='banner-content'><h3>Polos</h3></div></SwiperSlide>
                                <SwiperSlide><Image className='cat-img' src={cat7} /><div className='banner-content'><h3>Bonés</h3></div></SwiperSlide>
                                <SwiperSlide><Image className='cat-img' src={cat8} /><div className='banner-content'><h3>Tenis</h3></div></SwiperSlide>
                                <SwiperSlide><Image className='cat-img' src={cat9} /><div className='banner-content'><h3>Esportivos</h3></div></SwiperSlide>
                                <SwiperSlide><Image className='cat-img' src={cat10} /><div className='banner-content'><h3>Chinelos</h3></div></SwiperSlide>
                                <SwiperSlide><Image className='cat-img' src={cat11} /><div className='banner-content'><h3>Mochilas</h3></div></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}