// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';

import cat1 from '@/public/store-promo/1094827af3e78__tabombando_377x500_1767_-_merchan_masc_-_selecao_de_regatas_ate_r_79.jpg';
import cat2 from '@/public/store-promo/8b4b397583ed__tabombando_1768_-_merchan_masc_-_calca_jeans_top_marcas_ate_60_off.jpg';
import cat3 from '@/public/store-promo/2832b19b45da4__tabombando_projeto_verao_-_roupas_e_calcados_de_treino_ate_40_off.jpg';
import cat4 from '@/public/store-promo/325af248908d8__tabombando_377x500_verao_oculos_de_sol_a_partir_de_20_off.jpg';

export default function PromoList() {
    return (
        <>
            <div className={'store-promos mt-5 mb-5'}>
                <div className={'col-md-12 col-sm-12 col-xs-12'}>
                    <div className={'container'}>
                        <h2 className={'pb-4'}>Ofertas por tempo limitado</h2>
                        <div className={'row'}>
                            <Swiper
                                modules={[Autoplay, Navigation, Scrollbar, A11y]}
                                spaceBetween={20}
                                slidesPerView={3}
                                slidesPerGroup={1}
                                navigation={false}
                                autoplay={{
                                    delay: 3500,
                                    disableOnInteraction: false,
                                }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide><Image className='brands-offer-img' src={cat1} /><div className='brands-offer-content'><h4>Para curtir o calor!</h4><h5>Regatas até R$79</h5></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat2} /><div className='brands-offer-content'><h4>Indispensável em qualquer estação:</h4><h5>Jeans top marcas até 60% OFF</h5></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat3} /><div className='brands-offer-content'><h4>Foco no projeto verão!</h4><h5>Roupas e calçados esportivos até 40% OFF</h5></div></SwiperSlide>
                                <SwiperSlide><Image className='brands-offer-img' src={cat4} /><div className='brands-offer-content'><h4>Estilo do verão</h4><h5>Óculos de sol a paritr de 20% OFF</h5></div></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}