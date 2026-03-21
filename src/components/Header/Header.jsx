import { FaAlignJustify, FaSearch } from "react-icons/fa";
import imagen from "../../assets/react.svg"
import Menu from "./Menu/Menu";
import { useState } from "react";
import Results from "./Results/Results";

import { useInView } from "../../hooks/useInView";



function Header(){
    const [mostrarMenu, setMostrarMenu] = useState(false)

    const [busqueda,SetBusqueda] = useState("")

    const [ref, visible] = useInView({ threshold: 0.5 });

    return(
        <header /* className="
            sticky top-0 z-100 lg:relative
            bg-white 
            pb-4
            shadow-md
            animate-fadeIn
        " */

            className={`
            sticky top-0 z-100 lg:relative
            bg-white 
            pb-4
            shadow-md
            ${ visible ? "animate-fadeIn" : "opacity-0"}
            `}

            ref={ref}
        >
            <div className="flex justify-center py-1 mx-1">
                <p>
                    Envios gratis en CABA y GBA a partir de $80.000
                </p>
            </div>
            <div className="
                flex items-center lg:flex-col
                my-3
                relative
            ">
                <FaAlignJustify 
                    className="
                        ml-2
                        text-xl
                        lg:hidden
                        cursor-pointer
                    "
                    onClick={()=>{
                        setMostrarMenu(!mostrarMenu)
                    }}
                />
                
                <div className="
                    absolute lg:relative
                    left-1/2 
                    -translate-x-1/2 
                    flex items-center lg:justify-center
                    lg:w-full
                ">
                    <img src={imagen} alt="logo" />
                    <h1 
                        className="
                            ml-2 
                            font-bold text-[24px] whitespace-nowrap
                            lg:text-[32px]
                        "
                    >
                        Tailwind Dietetica
                    </h1>
                </div>
                <Menu mostrarMenu={mostrarMenu} setMostrarMenu={setMostrarMenu}/>
            </div>

            <div className="   
                relative
                w-max
                m-auto  
                -z-10
                rounded-xl
            ">
                <input type="text" placeholder="Buscar producto" onChange={(e)=> SetBusqueda(e.target.value)}
                    className="
                        p-3 pr-8 py-4 mt-4
                        border
                        rounded-xl
                        focus:outline-2 focus:outline-offset-2 focus:outline-[#00D8FF]
                        focus:scale-105
                        transition-transform transition-outline
                    "
                />
                <FaSearch 
                    className="
                        absolute
                        top-1/2
                        right-1.5
                    "
                />
                <div className="absolute top-full w-56.75 rounded-b-2xl shadow-xl overflow-hidden ">
                    {busqueda && <Results busqueda={busqueda}/>}
                </div>
                

            </div>
        </header>
    )
}

export default Header;