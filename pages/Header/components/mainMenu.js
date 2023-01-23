import { TfiSearch } from 'react-icons/tfi'
import { CiDark, CiUser, CiHeart, CiShoppingCart } from 'react-icons/ci'
import Image from 'next/image'

export default function MainMenu() {

    return (
        <div className="primary-header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className='container p-0'>
                    <div className="col-md-2 col-sm-2 col-xs-2">
                        <a className="navbar-brand" href="#">
                            <Image alt='img' src="/next-logo.png" width="186" height="84" />
                            <span className='brand-subtitle'>SHOP</span>
                        </a>
                    </div>
                    <div className='col-md-7 col-sm-7 col-xs-7'>
                        <form className="container">
                            <div className="input-group search">
                                <input type="text" className="form-control" placeholder="O que você procura?" aria-label="search" aria-describedby="basic-addon1" />
                                <span className="input-group-text" id="basic-addon1"><TfiSearch size={14}/></span>
                            </div>
                        </form>                    
                    </div>
                    <div className='col-md-2 col-sm-2 col-xs-2'>
                        <form className="container">
                            <nav className="row">
                                <div className="input-group cusstomer-menu">
                                    <a href='#' className='link'><CiHeart size={35}/></a>
                                    <a href='#' className='link'><CiShoppingCart size={35}/></a>
                                    <a href='#' className='link'><CiUser size={35} /></a>
                                    <a href='#' className='link'><CiDark size={35} /></a>
                                    {/* <a href='#' className='link'><CiLight size={35} /></a> */}
                                </div>
                            </nav>
                        </form> 
                    </div>
                </div>
            </nav>
        </div>
    )
}