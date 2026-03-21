import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useState, useRef, useEffect, useContext } from "react";

import SliderItem from "./SliderItem.jsx";

import { ProductsContext } from "../../contexts/ProductsContext/ProductsContext.jsx"

function SectionSliders({ titulo, id }) {
  const products = useContext(ProductsContext)

  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleResize = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
      if (!isMobile) {
        setIndex(0);
      }
  }, [isMobile]);

  const totalPages = Math.ceil(products.length / 2);

  const startX = useRef(0);
  const endX = useRef(0);

  const handleTouchStart = (e) => {
    if (!isMobile) return;
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isMobile) return;
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isMobile) return;

    const distance = startX.current - endX.current;
    const threshold = 50;

    if (distance > threshold) {
      setIndex(prev => Math.min(prev + 1, totalPages - 1));
    }

    if (distance < -threshold) {
      setIndex(prev => Math.max(prev - 1, 0));
    }
  };

  return (
    <section className="
      lg:max-w-360
      lg:m-auto
      scroll-mt-38 lg:scroll-mt-0
    "
      id={id}
    >

      <div className="
        w-95 h-px md:w-[90%]
        bg-black 
        my-3 mx-auto
      "></div>

      <h3 className="text-center font-bold text-4xl">
        {titulo}
      </h3>

      <div className="
        relative 
        py-3.5 
        md:max-w-5xl lg:max-w-360
        m-auto
      ">

        {/* Flechas solo mobile */}
        <FaArrowCircleLeft
          className="absolute left-2 top-1/2 -translate-y-1/2 text-2xl z-10 cursor-pointer md:hidden"
          onClick={() => setIndex(prev => Math.max(prev - 1, 0))}
        />

        <FaArrowCircleRight
          className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl z-10 cursor-pointer md:hidden"
          onClick={() => setIndex(prev => Math.min(prev + 1, totalPages - 1))}
        />

        <div
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >

          <div
            className="
              flex md:grid
              md:grid-cols-4
              md:gap-4
              md:p-2
              transition-transform duration-300 
              md:transform-none
            "
            style={{
              transform: isMobile ? `translateX(-${index * 100}%)` : "none",
            }}
          >

            {products.map((product, i) => {

              return(
                <SliderItem key={i} product={product} i={i} />
              )})
            }
          </div>

        </div>

      </div>

    </section>
  );
}

export default SectionSliders;