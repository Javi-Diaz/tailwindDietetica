import { FaWhatsapp,FaPhone,FaEnvelope,FaMapMarkedAlt,FaInstagram,FaFacebookF,FaRegClock } from "react-icons/fa";
import american from "../../assets/footer/pagos/american.webp"
import mastercard from "../../assets/footer/pagos/mastercard.webp"
import mp from "../../assets/footer/pagos/mp.webp"
import pagoFacil from "../../assets/footer/pagos/pagoFacil.webp"
import visa from "../../assets/footer/pagos/visa.webp"
import andreani from "../../assets/footer/envios/andreani.webp"
import correoArgentino from "../../assets/footer/envios/correo-argentino.webp"
import fedex from "../../assets/footer/envios/fedex.webp"
import { useInView } from "../../hooks/useInView.jsx"

import FooterBlock from "./FooterBlock.jsx";

function Footer() {

    return(
        <footer className="
            p-3 
            md:flex md:flex-wrap
            lg:max-w-360
            lg:m-auto
        "
            id="footer"
        >
            <FooterBlock animation="animate-slideLeft" classes="lg:max-w-87.5 lg:mr-16">
                <h3 className="font-bold text-xl">Dietetica y almacen natural</h3>
                <p className="my-3">Productos veganos, vegetarianos, sin gluten, sin azucar, organicos, suplementos, etc.</p>
            </FooterBlock>
           
            
            <div className="flex justify-between md:gap-16" >

                <FooterBlock animation="animate-slideLeft">
                    <h3 className="font-bold text-xl mb-1">Categorias</h3>
                    <div className="flex flex-col gap-1">
                        <a href="#">Suplementos</a>
                        <a href="#">Sin azucar</a>
                        <a href="#">Sin TACC</a>
                        <a href="#">Veganos</a>
                        <a href="#">Vegetarianos</a>
                    </div>
                </FooterBlock>

                <FooterBlock animation="animate-slideRight">
                    <h3 className="font-bold text-xl mb-1">Contactanos</h3>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center"><FaWhatsapp/> <p className="ml-1">541122334455</p></div>
                        <div className="flex items-center"><FaPhone/> <p className="ml-1">541166778899</p></div>
                        <div className="flex items-center"><FaEnvelope/> <p className="ml-1">ejmplo@gmail.com</p></div>
                        <div className="flex items-center"><FaMapMarkedAlt/> <p className="ml-1 text-wrap">Ejemplo 1122 - CABA</p></div>
                        <div className="flex items-center"><FaRegClock/> <p className="ml-1 text-wrap">Lu. a Vi. de 9hs - 17hs</p></div>
                    </div>
                </FooterBlock>

            </div>
            
            <FooterBlock animation="animate-slideRight" classes="md:ml-16">
                <h3 className="font-bold text-xl mb-2">Seguinos</h3>
                <div className="flex gap-4">
                    <a href="#" className="
                        p-3
                        bg-black 
                        rounded-full
                        text-white text-lg
                        hover:outline hover:bg-white hover:border-black hover:text-black hover:scale-112
                        transition-all duration-400
                    "><FaInstagram/></a>
                    <a href="#" className="
                        p-3
                        bg-black 
                        rounded-full
                        text-white text-lg
                        hover:outline hover:bg-white hover:border-black hover:text-black hover:scale-112
                        transition-all duration-400
                    "><FaWhatsapp/></a>
                    <a href="#" className="
                        p-3
                        bg-black 
                        rounded-full
                        text-white text-lg
                        hover:outline hover:bg-white hover:border-black hover:text-black hover:scale-112
                        transition-all duration-400
                    "><FaFacebookF/></a>
                </div>
            </FooterBlock>

            <div className="
                    w-95 h-px md:basis-[90%]
                    bg-black
                    my-5 mx-auto
            "></div>

            <FooterBlock animation="animate-slideLeft" classes="md:basis-full">
                <h3 className="font-bold text-xl mb-3 ">Medios de pago</h3>
                <div className="
                    flex gap-2 
                ">
                    <img src={american} alt="Imagen de pago con American" className="
                        w-12 object-contain
                        shadow-[0_2px_4px_3px_rgba(0,0,0,0.2)]

                    "/>
                    <img src={mastercard} alt="Imagen de pago con Mastercard" className="
                        w-12 object-contain
                        shadow-[0_2px_4px_3px_rgba(0,0,0,0.2)]
                    "/>
                    <img src={mp} alt="Imagen de pago con Mercado Pago" className="
                        w-12 object-contain
                        shadow-[0_2px_4px_3px_rgba(0,0,0,0.2)]
                    "/>
                    <img src={pagoFacil} alt="Imagen de pago con Pago Facil" className="
                        w-12 object-contain
                        shadow-[0_2px_4px_3px_rgba(0,0,0,0.2)]
                    "/>
                    <img src={visa} alt="Imagen de pago con Visa" className="
                        w-12 object-contain
                        shadow-[0_2px_4px_3px_rgba(0,0,0,0.2)]
                    "/>
                </div>
            </FooterBlock>

            <FooterBlock animation="animate-slideLeft" classes="mt-5 md:basis-full">
                <h3 className="font-bold text-xl mb-3 ">Medios de envio</h3>
                <div className="
                    flex gap-2 
                ">
                    <img src={andreani} alt="Imagen de pago con Visa" className="
                        w-12 object-contain
                        shadow-[0_2px_4px_3px_rgba(0,0,0,0.2)]
                    "/>
                    <img src={correoArgentino} alt="Imagen de pago con Visa" className="
                        w-12 object-contain
                        shadow-[0_2px_4px_3px_rgba(0,0,0,0.2)]
                    "/>
                    <img src={fedex} alt="Imagen de pago con Visa" className="
                        w-12 object-contain
                        shadow-[0_2px_4px_3px_rgba(0,0,0,0.2)]
                    "/>
                </div>
            </FooterBlock>

            <FooterBlock animation="animate-slideLeft" classes="md:basis-full">
                <div className="
                    w-95 h-px md:w-[90%]
                    bg-black 
                    my-5 mx-auto
                "></div>
                <p>© 2026 Todos los derechos reservados | Tailwind Dietetica</p>
            </FooterBlock>
    
        </footer>
    )
}

export default Footer;