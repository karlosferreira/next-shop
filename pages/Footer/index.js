import Image from "next/image";

import facebook from '@/public/facebook.png';
import whatsapp from '@/public/whatsapp.png';
import instagram from '@/public/instagram.png';
import telegram from '@/public/telegram.png';
import tiktok from '@/public/tiktok.png';
import appStore from '@/public/app-store.png';
import playStore from '@/public/play-store.png';
import analytics from '@/public/cert-google.png';
import ssl from '@/public/cert-ssl.png';

import logoSSL from '@/public/payments/site-seguro.png';

export default function Footer() {
    return (
        <>
            <footer className={"col-md-12 col-sm-12 col-xs-12"}>
                <div className={"container-fluid"}>
                    <div className={"row newsletter"}>
                        <div className={"col-md-8 col-sm-8 col-xs-8 mb-4"}>
                            <h3>Receba ofertas e descontos exclusivos!</h3>
                            <div className={"card-form"}>
                                <h4>Cadastre-se e receba 10% de desconto na 1ª compra</h4>
                                <form className={"container"}>
                                    <div className={"input-group name mb-2"}>
                                        <input type="text" className={"form-control"} placeholder="Nome completo" aria-label="search" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className="input-group email mb-2">
                                        <input type="email" className={"form-control"} placeholder="Endereço de Email válido" aria-label="search" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className={"input-group row send m-0"}>
                                        <div className={"col-md-9 col-sm-9 col-xs-9 p-0 mt-2"}>
                                            <input className={"form-check-input"} type="checkbox" value="" id="flexCheckDefault"/>
                                            <span>Li e concordo com os <a href="#">Termos de Consentimento.*</a></span>
                                        </div>
                                        <div className={"col-md-3 col-sm-3 col-xs-3 p-0 pr-1"}>
                                            <button type="submit" className={"btn btn-primary"}>Cadastrar</button>
                                        </div>
                                    </div>
                                </form>                                
                            </div>
                        </div>
                        <div className={"community col-md-4 col-sm-4 col-xs-4"}>
                            <div className={"container"}>
                                <div className={"row"}>
                                    <div className={"box"}>
                                        <div className={"footer-content mb-3"}>
                                            <h4></h4>
                                        </div>                                        
                                        <div className={"box-footer"}>
                                            <ul>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className={"box mt-4"}>
                                        <div className={"footer-content mb-2"}>
                                            <h4></h4>
                                        </div>                                        
                                        <div className={"box-footer"}>
                                            <ul>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"container mb-4"}>
                    <div className={"row footer-menu"}>
                        <div className={"col-md-3 col-sm-3 col-xs-3"}>
                            <h3>Sobre Nós</h3>
                            <ul>
                                <li>
                                    <a href="#">Quem somos</a>
                                </li>
                                <li>
                                    <a href="#">Política de privacidade</a>
                                </li>
                                <li>
                                    <a href="#">Termos de uso</a>
                                </li>
                                <li>
                                    <a href="#">Programa de pontos</a>
                                </li>
                                <li>
                                    <a href="#">Anuncie conosco</a>
                                </li>
                                <li>
                                    <a href="#">Nossos fornecedores</a>
                                </li>
                                <li>
                                    <a href="#">Seja um revendedor</a>
                                </li>
                            </ul>
                        </div>
                        <div className={"col-md-3 col-sm-3 col-xs-3"}>
                            <h3>Ajuda e Suporte</h3>
                            <ul>
                                <li>
                                    <a href="#">Dúvidas frequentes</a>
                                </li>
                                <li>
                                    <a href="#">Tempo de entrega</a>
                                </li>
                                <li>
                                    <a href="#">Trocas e devoluções</a>
                                </li>
                                <li>
                                    <a href="#">Central de atendimento</a>
                                </li>
                                <li>
                                    <a href="#">Regras de voucher</a>
                                </li>
                                <li>
                                    <a href="#">Conrato de compra e venda</a>
                                </li>
                                <li>
                                    <a href="#">Mapa de categorias</a>
                                </li>
                            </ul>
                        </div>
                        <div className={"col-md-3 col-sm-3 col-xs-3"}>
                            <div className={"row"}>
                                <h3>Pague com</h3>
                                <div className={"payments"}>
                                    <ul>
                                        <li><a href="#"><Image source={logoSSL} width={30} height={"auto"}/></a></li>
                                        <li><a href="#"><Image source={logoSSL} /></a></li>
                                        <li><a href="#"><Image source={logoSSL} /></a></li>
                                        <li><a href="#"><Image source={logoSSL} /></a></li>
                                        <li><a href="#"><Image source={logoSSL} /></a></li>
                                        <li><a href="#"><Image source={logoSSL} /></a></li>
                                        <li><a href="#"><Image source={logoSSL} /></a></li>
                                        <li><a href="#"><Image source={logoSSL} /></a></li>
                                        <li><a href="#"><Image source={logoSSL} /></a></li>
                                        <li><a href="#"><Image source={logoSSL} /></a></li>
                                    </ul>
                                </div>                                    
                            </div>
                            <div className={"row"}>
                                <h3>Certificados</h3>
                                <div className={"certificados"}>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <Image src={ssl} width={100} height={'auto'} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Image src={analytics} width={110} height={'auto'} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>                                    
                            </div>
                        </div>
                        <div className={"col-md-3 col-sm-3 col-xs-3"}>
                            <div className={"row"}>
                                <h3>Baixe nosso APP</h3>
                                <div className={"apps"}>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <Image src={playStore} width={160} height={'auto'} />
                                            </a>
                                        </li>
                                        <li className="app-store">
                                            <a href="#">
                                                <Image src={appStore} width={170} height={'auto'} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <h3>Nossas Redes</h3>
                                <div className="social-footer">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <Image src={facebook} width={30} height={'auto'} />
                                            </a>
                                        </li>                                        
                                        <li>
                                            <a href="#">
                                                <Image src={whatsapp} width={30} height={'auto'} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Image src={instagram} width={30} height={'auto'} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Image src={telegram} width={30} height={'auto'} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Image src={tiktok} width={33} height={'auto'} />
                                            </a>
                                        </li>
                                    </ul>                                    
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"container-fluid copy pb-4"}>
                    <div className={"container"}>
                        <div className="row col-md-12 col-sm-12 col-xs-12">
                            <div className={"social col-md-3 col-sm-3 col-xs-3"}>
                                <div className="social-footer mt-2">
                                    <a className="navbar-brand" href="#">
                                        <Image alt='img' src="/next-logo.png" width="186" height="84" />
                                        <span className='brand-subtitle'>SHOP</span>
                                    </a> 
                                </div>
                            </div>
                            <div className={"copyright col-md-9 col-sm-9 col-xs-9"}>
                                <p>Os preços, promoções, condições de pagamento, frete e produtos são válidos exclusivamente para compras realizadas via internet.</p>
                                <p>RIO WEB SERVICES ME. CNPJ: 99.999.999/9999-99. Endereço: Rua Soldado Jacinto Costa, 81. Fundos, Campo Grande. Rio de Janeiro - RJ. CEP 23042-390.</p>
                                <p>contato@nextshop.com.br</p>
                            </div>
                        </div>                        
                    </div>
                </div>
            </footer>
        </>
    )
}