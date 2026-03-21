import { useInView } from "../../hooks/useInView.jsx"
import "../../animations/animations.css";

function EmailSection() {
    const [ref, visible] = useInView({ threshold: 0.5 });

    return(
        <section
            ref={ref}
            className={`
                p-4 
                md:text-center
                lg:max-w-360
                lg:m-auto
                ${visible ? "animate-fadeIn" : "opacity-0"}
            `}
        >
            <h3 className="
                text-center font-bold text-3xl
            ">Enterate de todas las novedades y promos</h3>
            <input type="text" placeholder="Email" 
                className="
                    w-full md:max-w-87.5
                    my-4 p-2
                    border rounded-md
                    focus:outline-2 focus:outline-offset-2 focus:outline-[#00D8FF]
                    focus:scale-105
                    transition-transform transition-outline
                "
            />
        </section>
    )
}

export default EmailSection;