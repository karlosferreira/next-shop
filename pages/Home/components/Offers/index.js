// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';

import cat1 from '@/public/brands-offer/cat-promo1.jpg';
import cat2 from '@/public/brands-offer/cat-promo2.jpg';
import cat3 from '@/public/brands-offer/cat-promo3.jpg';
import cat4 from '@/public/brands-offer/cat-promo4.jpg';
import cat5 from '@/public/brands-offer/cat-promo5.jpg';
import cat6 from '@/public/brands-offer/cat-promo6.jpg';
import cat7 from '@/public/brands-offer/cat-promo7.jpg';
import cat8 from '@/public/brands-offer/cat-promo8.jpg';
import cat9 from '@/public/brands-offer/cat-promo9.jpg';
import cat10 from '@/public/brands-offer/cat-promo10.jpg';
import cat11 from '@/public/brands-offer/cat-promo11.jpg';

export default function OffersList() {
    return (
        <>
            <div className={'brands-offer mt-5 mb-5'}>
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
                                <SwiperSlide><Image className='brands-offer-img' src={cat1} /><div className='brands-offer-content'><h4>Fila</h4><h5>Regata Fila Letter Azul-Marinho</h5></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat2} /><div className='brands-offer-content'><h4>Hurley</h4><h5>Bermuda Água Hurley Reta Sublime Preta</h5></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat3} /><div className='brands-offer-content'><h4>Vans</h4><h5>Tênis Slip On Vans Mn Asher Branco</h5></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat4} /><div className='brands-offer-content'><h4>Hurley</h4><h5>Bermuda Hurley Reta Speed Grafite</h5></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat5} /><div className='brands-offer-content'><h4>New Era</h4><h5>Calça New Era Jogger Originators Preta</h5></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat6} /><div className='brands-offer-content'><h4>Hurley</h4><h5>Camiseta Hurley Hawaii Preta</h5></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat7} /><div className='brands-offer-content'><h4>Oakley</h4><h5>Óculos de Sol Oakley Encoder Matte Carbon P Preto</h5></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat8} /><div className='brands-offer-content'><h4>Nike</h4><h5>Tênis Nike Phantom Cinza</h5></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat9} /><div className='brands-offer-content'><h4>Vans</h4><h5>Camiseta Vans Otw Classic Front Branca</h5></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat10} /><div className='brands-offer-content'><h4>Adidas Originals</h4><h5>Tênis Adidas Originals Nizza Preto</h5></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat11} /><div className='brands-offer-content'><h4>Vans</h4><h5>Tênis Slip On Vans Mn Asher Vermelho</h5></div></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}