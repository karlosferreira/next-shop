export default function Navbar() {
  return (
    <>
      <div id="nav-bar" className="container p-0 container p-0 pt-2 pb-2">
        <nav className='row faq-header'>
            <ul className='col-md-5 col-sm-5 col-xs-5 a-left faq-header-delivery'>
              <li><a href='#faq-delivery'>Ofertas com frete gratis* para todo o Brasil. Confira!</a></li>
            </ul>
            <nav aria-label="breadcrumb" className='col-md-7 col-sm-7 col-xs-7 a-right row faq-header-group'>
              <ol className="breadcrumb faq-menu">
                <li className="breadcrumb-item"><a href="#">Atendimento</a></li>
                <li className="breadcrumb-item"><a href="#">Ajuda</a></li>
                <li className="breadcrumb-item"><a href="#">Meus pedidos</a></li>
                <li className="breadcrumb-item"><a href="#">Sair</a></li>
              </ol>
            </nav>          
          </nav>          
      </div>
    </>
  )
}
