import { useInView } from "../../hooks/useInView";

function FiltroItem({ filtro, index }) {
  const [ref, visible] = useInView({ threshold: 0.5 });

  const animation =
    index % 2 === 0 ? "animate-slideLeft" : "animate-slideRight";

  return (
    <a
      href="#"
      ref={ref}
      className={`
        hover:scale-105 md:hover:scale-102 2xl:hover:scale-101
        transition-transform
        ${visible ? animation : "opacity-0"}
      `}
    >
      <div className="relative h-40">
        <img
          src={filtro.imagen}
          alt="Imagen de fondo del filtro"
          className="object-cover h-full w-full rounded-xl"
        />

        <div className="absolute top-0 bg-black/50 w-full h-full rounded-xl"></div>

        <h3 className="
          absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2
          text-white font-bold text-xl whitespace-nowrap
        ">
          {filtro.nombre}
        </h3>
      </div>
    </a>
  );
}

export default FiltroItem;