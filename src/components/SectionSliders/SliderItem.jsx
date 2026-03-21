import Card from "./Card"

import { useInView } from "../../hooks/useInView.jsx"

function SliderItem({ product, i }) {
  const [ref, visible] = useInView({ threshold: 0.5 });

  const animation =
    i % 2 === 0 ? "animate-slideLeft" : "animate-slideRight";

  return (
    <div
      ref={ref}
      className={`
        w-1/2 shrink-0
        md:w-auto md:shrink
        px-2
        ${visible ? animation : "opacity-0"}
      `}
    >
      <Card
        img={product.img}
        productos={product.name}
        stock={product.stock}
      />
    </div>
  );
}

export default SliderItem;