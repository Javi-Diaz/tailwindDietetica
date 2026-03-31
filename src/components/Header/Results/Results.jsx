import { useContext, useMemo } from "react"
import { ProductsContext } from "../../../contexts/ProductsContext/ProductsContext.jsx"

function Results({ busqueda }) {
    const products = useContext(ProductsContext)

    const productosFiltrados = useMemo(() => {
        return products.filter((product) =>
            product.name.toLowerCase().includes(busqueda.toLowerCase())
        )
    }, [busqueda, products])

    if (productosFiltrados.length == 0) {
        return (
            <div className="bg-white text-center p-4">
                <h3>No se encontro el producto</h3>
            </div>
        )
    } else {
        return (
            productosFiltrados.map((product) => {
                return (
                    <div key={product.id}
                        className="
                            w-full
                            bg-white 
                            flex items-center gap-3 
                            border-b border-[#0000001f]
                            last:border-b-0
                            last:rounded-b-2xl
                            py-2
                            ">
                        <img src={product.img} alt="imagen-producto" className="w-25 object-contain" />
                        <div className="flex flex-col">
                            <h3 className="font-bold">{product.name}</h3>
                            <span>{product.price}</span>
                            <span className={product.stock?`text-green-500`:`text-red-600`}>
                                {product.stock ? "En stock": "Sin stock"}
                            </span>
                        </div>

                    </div>
                )
            })
        )

    }

}

export default Results;