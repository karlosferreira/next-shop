import Header from './Header'
import Slideshow from './Home/components/Slideshow'
import ServiceList from './Home/components/Services'
import CategoryList from './Home/components/Categories'
import PromoList from './Home/components/Promos'
import BrandsList from './Home/components/Brands'
import OffersList from './Home/components/Offers'
import Banners from './Home/components/Banners'

import 'bootstrap/dist/css/bootstrap.min.css';

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
        <BrandsList />
        <OffersList />
        <Banners />
    </>
  )
}