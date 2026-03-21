import imgHero from "../../assets/img-hero.webp"
import { FaLongArrowAltRight } from "react-icons/fa";

import { useInView } from "../../hooks/useInView";

const filtros = [
    "Sin TACC",
    "Vegetarianos",
    "Congelados",
    "Frutos secos",
    "Proteínas",
    "Suplementos",
    "Sin Azúcar",
    "Más vendidos",
    "Sin Gluten",
    "Ofertas"
];

function Hero(){

    const [ref, visible] = useInView({ threshold: 0.5 });

    return(
        <section 
            className={`
                mb-6 
                relative 
                ${visible ? "animate-slideUp" : "translate-y-10"}
            `}
            id="inicio"
            ref={ref}
        >
            <img src={imgHero} alt="Imagen Hero" className="h-150 object-cover object-center lg:w-full lg:object-cover"/>
            <div className="w-full h-full absolute top-0 bg-black/70"></div>
            <div className="
                absolute top-0 z-10 left-1/2 -translate-x-1/2 
                text-zinc-50 text-center font
                w-80 h-150 
                flex flex-col justify-around items-center 
            ">
                <h3>ALIMENTACIÓN CONSCIENTE PARA UNA VIDA MEJOR</h3>
                <h2 className="
                    text-3xl font-bold
                ">
                    Productos de dietética pensados
                    para cuidar tu salud todos los días
                </h2>
                <div className="
                    flex items-center
                    p-4
                    border rounded-2xl
                    hover:bg-white/20
                    hover:scale-105
                    transition-transform
                    cursor-pointer
                ">
                    <FaLongArrowAltRight />
                    <a href="#" className="
                        ml-2
                    ">
                        VER CATÁLOGO
                    </a>
                </div>
            </div>
            <div className="
                flex items-center xl:justify-center
                overflow-x-scroll
                relative z-20
                bg-zinc-50
                py-3
            ">
                {filtros.map((filtro, index)=>(
                    <a 
                        href="#"
                        key={index}
                        className="
                            mx-2.5
                            text-center
                            p-2
                            border rounded-md
                            whitespace-nowrap
                            
                            xl:relative xl:overflow-hidden
                            
                            after:content-[''] after:absolute after:left-0 after:bottom-0
                            after:w-full after:h-0
                            after:bg-linear-to-t after:from-white after:to-[#00D8FF] after:to-85%
                            after:transition-all after:duration-500 after:ease-in-out
                            
                            hover:after:h-full

                            hover:scale-115
                            transition-transform   
                        "
                    >
                        <span className="relative z-19">
                            {filtro}
                        </span>
                    </a>
                ))}
            </div>
            
        </section>
    )
}

export default Hero;