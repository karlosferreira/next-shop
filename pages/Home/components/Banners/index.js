export default function Banners() {
    return (
        <div className='banners col-md-12 col-sm-12 col-xs-12'>
            <div className={'container'}>
                <h2>Novidades</h2>
                <div className='row'>
                    <div className='col-md-6 col-sm-6 col-xs-6'>
                        <div className={'banner-box'}>
                            <img src='https://dafitistatic.dafiti.com.br/dynamic_yield/cms/static/dafiti/images/131bc0b98795b__novidade_575x620_1769_-_merchan_masc_-_camisetas_ate_r_39_99.png' />
                            <h2>Ofertas imperdíveis: camisetas até R$39,99*</h2>
                            <a href='#'>
                                <button>Confira</button>
                            </a>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-6 col-xs-6'>
                        <div className={'banner-box'}>
                            <img src='https://dafitistatic.dafiti.com.br/dynamic_yield/cms/static/dafiti/images/2a5aab88783ea__novidade_575x6201770_-_merchan_masc_-_bermudas_de_praia_na_promo.png' />
                            <h2>Ofertas imperdíveis de regatas masculinas</h2>
                            <a href='#'>
                                <button>Confira</button>
                            </a>
                        </div>
                    </div>                   
                </div>
                <p className={'offer-note'}>*Promoções válidas apenas em produtos selecionados, enquanto durar a campanha e/ou o estoque.
                Veja o regulamento específico ao clicar em cada campanha. Frete não incluso no desconto. 
                Imagens meramente ilustrativas.</p>
            </div>
        </div>
    )
}