function Card({img,productos,stock}) {
  return (
    <div className="
      border rounded-md 
      p-2 
      text-center 
      bg-white 
      md:max-h-80 md:max-w-56

      hover:scale-105
      transition-transform  
    ">
      <img src={img} alt="" className="w-full h-40 object-contain"/>
      <h4 className="font-bold">{productos}</h4>
      <p>$30.000</p>

      <div className="flex justify-around my-4">
        <span className={stock?`text-green-500`:`text-red-600`}>
          {stock ? "En stock": "Sin stock"}
        </span>
      </div>
    </div>
  );
}

export default Card;