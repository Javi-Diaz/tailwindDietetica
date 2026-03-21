import { FaMedal,FaCreditCard,FaBuilding } from "react-icons/fa";

import { useInView } from "../../hooks/useInView.jsx"
import "../../animations/animations.css";

function NuestraHistoria() {
    const [ref, visible] = useInView({ threshold: 0.5 });

    return(
        <section 
            ref={ref}
            className={`
                lg:lg:max-w-360
                lg:m-auto
                ${visible ? "animate-fadeIn" : "opacity-0"}
            `}
        >
            <div className="
                    w-95 h-px lg:w-[90%]
                    bg-black
                    my-3 mx-auto 
                "></div>
            <h2 className="
                text-center text-3xl font-bold
            ">Nuestra historia</h2>
            <div>
                <div className="
                    p-2
                ">
                    <div className="flex items-center gap-2">
                        <FaMedal className="text-3xl"/>
                        <div>
                            <h3 className="text-2xl font-bold">Garantia</h3>
                            <span className="italic">Respaldo garantizado</span>
                        </div>
                    </div>
                    <p>Seleccionamos productos confiables y te acompañamos después de la compra para que tengas una experiencia segura.</p>
                </div>

                <div className="
                    p-2
                ">
                    <div className="flex items-center gap-2">
                        <FaCreditCard className="text-3xl"/>
                        <div>
                            <h3 className="text-2xl font-bold">Pagos protegidos</h3>
                            <span className="italic">Seguro y confiable</span>
                        </div>
                    </div>
                    <p>Tu información está cifrada y protegida para que puedas comprar con confianza desde cualquier dispositivo.</p>
                </div>

                <div className="
                    p-2
                ">
                    <div className="flex items-center gap-2">
                        <FaBuilding className="text-3xl"/>
                        <div>
                            <h3 className="text-2xl font-bold">Trayectoria</h3>
                            <span className="italic">Historia y compromiso</span>
                        </div>
                    </div>
                    <p>Acompañamos a miles de clientes a lo largo de los años, construyendo confianza con trabajo y dedicación constante.</p>
                </div>
            </div>
        </section>
    )
}

export default NuestraHistoria;