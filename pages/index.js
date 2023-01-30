import Header from './Header'
import Slideshow from './Home/components/Slideshow'
import ServiceList from './Home/components/Services'
import CategoryList from './Home/components/Categories'
import PromoList from './Home/components/Promos'
import BrandsList from './Home/components/Brands'
import OffersList from './Home/components/Offers'
import Banners from './Home/components/Banners'

import 'bootstrap/dist/css/bootstrap.min.css';

import singleBanner from "@/public/banners/perfumes.jpg"
import banner3 from "@/public/banners/banner3.jpg"
import banner2 from "@/public/banners/banner2.jpg"

export default function Home() {
  return (
    <>
      <Header />
        <nav className='slide-promo'>
          <p><strong>Liquida Next: </strong>Ofertas com até 50% de desconto. <b>Confira</b></p>
        </nav>
        <Slideshow />
        <ServiceList />
        <CategoryList />
        <PromoList />
        <div className={'banners mb-5 col-md-12 col-sm-12 col-xs-12'}>
          <div className={'container'}>
            <div className='row'>
              <Banners 
                title={'Confira o lançamento!'} 
                source={singleBanner} 
              />
            </div>
          </div>
        </div>        
        <BrandsList />
        <OffersList />
        <div className={'banners mt-4 mb-5 col-md-12 col-sm-12 col-xs-12'}>
          <div className={'container'}>
            <div className='row'>
              <div className='col-md-6 col-sm-6 col-xs-6'>
                <Banners 
                  source={banner2}
                  infoTitle={'Ofertas imperdíveis: camisetas até R$39,99*'}
                  btnTitle={'Confira'}
                />
              </div>
              <div className='col-md-6 col-sm-6 col-xs-6'>
                <Banners
                  source={banner3}
                  infoTitle={'Ofertas imperdíveis de regatas masculinas'}
                  btnTitle={'Confira'}
                />
              </div>
            </div>
            <div className={''}>
              <p className={'offer-note'}>*Promoções válidas apenas em produtos selecionados, enquanto durar a campanha e/ou o estoque.
              Veja o regulamento específico ao clicar em cada campanha. Frete não incluso no desconto. 
              Imagens meramente ilustrativas.</p>
            </div>
          </div>
        </div>
    </>
  )
}