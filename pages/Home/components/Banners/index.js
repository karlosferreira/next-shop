import Image from "next/image"

export default function Banners({title = null, source, infoTitle = null, btnTitle = null }) {

    let btn = null

    if (btnTitle) {
        btn = <a href='#'>
            <button>{btnTitle}</button>
        </a> 
    }

    return (
        <>
            <h2 className="mb-4">{title}</h2>
            <div className='row m-0 p-0'>
                <div className='col-md-12 col-sm-12 col-xs-12'>
                    <div className={'banner-box'}>
                        <Image src={source} />
                        <div className={'banner-info'}>
                            <h2>{infoTitle}</h2>
                            {btn}
                        </div>                            
                    </div>
                </div>
            </div>
        </>
    )
}