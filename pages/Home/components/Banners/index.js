import styles from '@/styles/Home.module.css'

export default function BannersList() {
    return (
        <>
            <div className={[styles.grid, styles.bannersList]}>
                <h2>Novidades</h2>
                <div className={styles.bannerOffer}>
                    <img src='https://dafitistatic.dafiti.com.br/dynamic_yield/cms/static/dafiti/images/131bc0b98795b__novidade_575x620_1769_-_merchan_masc_-_camisetas_ate_r_39_99.png' />
                    <h3>Ofertas imperdíveis: camisetas até R$39,99*</h3>
                    <a href='#'>
                        <button>Confira</button>
                    </a>
                </div>
                <div className={styles.bannerPromo}>
                    <img src='https://dafitistatic.dafiti.com.br/dynamic_yield/cms/static/dafiti/images/2a5aab88783ea__novidade_575x6201770_-_merchan_masc_-_bermudas_de_praia_na_promo.png' />
                    <h3>Ofertas imperdíveis de regatas masculinas</h3>
                    <a href='#'>
                        <button>Confira</button>
                    </a>
                </div>
                <p>*Promoções válidas apenas em produtos selecionados, enquanto durar a campanha e/ou o estoque.
                    Veja o regulamento específico ao clicar em cada campanha. Frete não incluso no desconto. Imagens meramente ilustrativas.</p>
            </div>
        </>
    )
}