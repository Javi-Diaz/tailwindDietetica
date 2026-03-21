import desayuno from "../../assets/cuadriculaFiltros/desayuno.webp"
import frutaSecada from "../../assets/cuadriculaFiltros/fruta-secada.webp"
import frutosSecos from "../../assets/cuadriculaFiltros/frutos-secos.webp"
import mixesFrutosSecos from "../../assets/cuadriculaFiltros/mixes-frutos-secos.webp"
import reposteria from "../../assets/cuadriculaFiltros/reposteria.webp"
import tesInfusiones from "../../assets/cuadriculaFiltros/tes-infusiones.webp"

import FiltroItem from "./FiltroItem.jsx"

function CuadriculaFiltros(){
    const filtros = [
    { nombre: "Desayuno", imagen: desayuno },
    { nombre: "Fruta secada", imagen: frutaSecada },
    { nombre: "Frutos secos", imagen: frutosSecos },
    { nombre: "Mixes frutos secos", imagen: mixesFrutosSecos },
    { nombre: "Reposteria", imagen: reposteria },
    { nombre: "Tes e infusiones", imagen: tesInfusiones },
  ];
    
    return(
        <section className="p-2">
            <h2 className="
                my-6
                text-center text-2xl font-bold
            ">Categorias</h2>
            <div className="
            grid grid-cols-2 gap-2
            ">
                {filtros.map((filtro, index)=>{
                    
                    return(
                        <FiltroItem key={index} filtro={filtro} index={index} />
                    )
                })}
            </div>
                        
        </section>
    )
}

export default CuadriculaFiltros;