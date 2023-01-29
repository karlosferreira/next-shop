import ServiceItem from "./components/serviceItem";

import { BiTransfer } from "react-icons/bi"
import { IoStorefrontOutline } from "react-icons/io5"
import { BsTruck, BsCreditCard } from "react-icons/bs"
import { CiDiscount1 } from "react-icons/ci"
import { AiOutlineTag } from "react-icons/ai"
import { BsBoxSeam } from "react-icons/bs"

export default function ServicesList() {
    return (
        <div className={'services mt-0 mb-0'}>
            <div className='col-md-12 col-sm-12 col-xs-12'>
                <div className="container">
                    <div className="row">
                        <ul className={'services-block mb-0'}>
                            <li>
                                <ServiceItem
                                    className={'item'}
                                    icon={<BsTruck size={30} />}
                                    description={"Frete Gratis"}
                                />
                            </li>
                            <li>
                                <ServiceItem
                                    className={'item'}
                                    icon={<BiTransfer size={30} />}
                                    description={"Troca Gratis"}
                                />
                            </li>
                            <li>
                                <ServiceItem
                                    className={'item'}
                                    icon={<IoStorefrontOutline size={30} />}
                                    description={"Coleta para trocas"}
                                />
                            </li>
                            <li>
                                <ServiceItem
                                    className={'item'}
                                    icon={<BsCreditCard size={30} />}
                                    description={"Até 6x sem juros"}
                                />
                            </li>
                            <li>
                                <ServiceItem
                                    className={'item'}
                                    icon={<CiDiscount1 size={30} />}
                                    description={"Melhores preços"}
                                />
                            </li>
                            <li>
                                <ServiceItem
                                    className={'item'}
                                    icon={<AiOutlineTag size={30} />}
                                    description={"Melhores marcas"}
                                />
                            </li>
                            <li>
                                <ServiceItem
                                    className={'item'}
                                    icon={<BsBoxSeam size={30} />}
                                    description={"Entrega rápida"}
                                />
                            </li>
                        </ul>                        
                    </div>
                </div>
            </div>
        </div>
    )
}