import { FaXmark } from "react-icons/fa6";
import { FaWhatsapp,FaInstagram,FaFacebookF } from "react-icons/fa";

function Menu({ mostrarMenu, setMostrarMenu }) {
    return (
        <div className={
            `absolute -left-1000 top-full ${mostrarMenu ? "left-0" : ""} lg:relative lg:left-0
            w-0 h-[calc(100dvh-76px)] ${mostrarMenu ?"w-4/5" : ""} lg:w-full lg:h-auto
            bg-white 
            p-2
            flex flex-col
            transition-all duration-700 ease-out
        `}
        >
            <div className="
                w-dvw h-dvh
                absolute -z-50 left-0
                bg-black/70
                lg:hidden
                "
                onClick={() => {
                    setMostrarMenu(!mostrarMenu)
                }}
            ></div>
            <div className="
                flex items-center
                lg:hidden
            ">
                <p className="
                    m-auto
                    text-2xl font-bold
                ">Menu</p>
                <FaXmark onClick={() => {
                    setMostrarMenu(!mostrarMenu)
                }}
                    className="
                        text-2xl font-bold
                        cursor-pointer
                    "
                />
            </div>
            <div className="
                    w-80 h-px
                    bg-black
                    my-3 mx-auto
                    lg:hidden
            "></div>
            <ul className="
                flex flex-col lg:flex-row lg:justify-center lg:gap-24
            ">
                <a href="./" className="
                    relative overflow-hidden
                    text-lg py-4 lg:px-2 w-fit rounded-md
                    
                    after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-full after:h-0
                    after:bg-linear-to-t after:from-white after:to-[#00D8FF] after:to-85%
                    after:transition-all after:duration-500 after:ease-in-out
                    
                    hover:after:h-full
                    "
                    onClick={() => {
                        setMostrarMenu(!mostrarMenu)
                    }}
                >
                    <span class="relative z-10">
                        Inicio
                    </span>
                </a>
                <a href="#" className="
                    relative overflow-hidden
                    text-lg py-4 lg:px-2 w-fit rounded-md
                    
                    after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-full after:h-0
                    after:bg-linear-to-t after:from-white after:to-[#00D8FF] after:to-85%
                    after:transition-all after:duration-500 after:ease-in-out
                    
                    hover:after:h-full
                    "
                    onClick={() => {
                        setMostrarMenu(!mostrarMenu)
                    }}
                >
                    <span class="relative z-10">
                        Productos
                    </span>
                </a>
                <a href="#novedades" className="
                    relative overflow-hidden
                    text-lg py-4 lg:px-2 w-fit rounded-md
                    
                    after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-full after:h-0
                    after:bg-linear-to-t after:from-white after:to-[#00D8FF] after:to-85%
                    after:transition-all after:duration-500 after:ease-in-out
                    
                    hover:after:h-full
                    "
                    onClick={() => {
                        setMostrarMenu(!mostrarMenu)
                    }}
                >
                    <span class="relative z-10">
                        Novedades
                    </span>
                </a>
                <a href="#destacados" className="
                    relative overflow-hidden
                    text-lg py-4 lg:px-2 w-fit rounded-md
                    
                    after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-full after:h-0
                    after:bg-linear-to-t after:from-white after:to-[#00D8FF] after:to-85%
                    after:transition-all after:duration-500 after:ease-in-out
                    
                    hover:after:h-full
                    "
                    onClick={() => {
                        setMostrarMenu(!mostrarMenu)
                    }}
                >
                    <span class="relative z-10">
                        Destacados
                    </span>
                </a>
                <a href="#ofertas" className="
                    relative overflow-hidden
                    text-lg py-4 lg:px-2 w-fit rounded-md
                    
                    after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-full after:h-0
                    after:bg-linear-to-t after:from-white after:to-[#00D8FF] after:to-85%
                    after:transition-all after:duration-500 after:ease-in-out
                    
                    hover:after:h-full
                    "
                    onClick={() => {
                        setMostrarMenu(!mostrarMenu)
                    }}
                >
                    <span class="relative z-10">
                        Ofertas
                    </span>
                </a>
                <a href="#footer" className="
                    relative overflow-hidden
                    text-lg py-4 lg:px-2 w-fit rounded-md
                    
                    after:content-[''] after:absolute after:left-0 after:bottom-0
                    after:w-full after:h-0
                    after:bg-linear-to-t after:from-white after:to-[#00D8FF] after:to-85%
                    after:transition-all after:duration-500 after:ease-in-out
                    
                    hover:after:h-full
                    "
                    onClick={() => {
                        setMostrarMenu(!mostrarMenu)
                    }}
                >
                    <span class="relative z-10">
                        Contacto
                    </span>
                </a>
            </ul>
            <div className="
                    w-80 h-px
                    bg-black
                    my-3 mx-auto mt-auto
                    lg:hidden
            "></div>
            <div>
                <div className="flex gap-4 justify-center lg:hidden">
                    <a href="#" className="
                        p-3
                        bg-black 
                        rounded-full
                        text-white text-lg
                        hover:outline hover:bg-white hover:border-black hover:text-black hover:scale-112
                        transition-all duration-400
                    "><FaInstagram /></a>
                    <a href="#" className="
                        p-3
                        bg-black 
                        rounded-full
                        text-white text-lg
                        hover:outline hover:bg-white hover:border-black hover:text-black hover:scale-112
                        transition-all duration-400
                    "><FaWhatsapp /></a>
                    <a href="#" className="
                        p-3
                        bg-black 
                        rounded-full
                        text-white text-lg
                        hover:outline hover:bg-white hover:border-black hover:text-black hover:scale-112
                        transition-all duration-400
                    "><FaFacebookF /></a>
                </div>

            </div>
        </div>
    )
}

export default Menu;