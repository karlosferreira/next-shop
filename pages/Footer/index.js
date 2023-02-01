import Image from "next/image";

import whatsapp from '@/public/whatsapp.png';
import telegram from '@/public/telegram.png';
import instagram from '@/public/instagram.png';

export default function Footer() {
    return (
        <>
            <footer className="col-md-12 col-sm-12 col-xs-12">
                <div className="container-fluid">
                    <div className="row newsletter">
                        <div className="col-md-8 col-sm-8 col-xs-8">
                            <h3>Receba ofertas e descontos exclusivos!</h3>
                            <div className="card-form">
                                <h4>Cadastre-se e receba 10% de desconto na 1ª compra</h4>
                                <form className="container">
                                    <div className="input-group name mb-2">
                                        <input type="text" className="form-control" placeholder="Nome completo" aria-label="search" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group email mb-2">
                                        <input type="email" className="form-control" placeholder="Endereço de Email válido" aria-label="search" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <span>Li e concordo com os <a href="#">Termos de Consentimento.*</a></span>
                                    </div>
                                </form>                                
                            </div>
                        </div>
                        <div className="community col-md-4 col-sm-4 col-xs-4">
                            <div className="container">
                                <div className="row">
                                    <div className="box">
                                        <div className="box-footer mb-4">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <Image src={whatsapp} width={60} height={60}/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <Image src={telegram} width={60} height={60}/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <Image src={instagram} width={60} height={60}/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="footer-content">
                                            <h5>Participe do nossos canais e aproveite ofertas exclusivas</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}