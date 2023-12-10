
import { useState } from "react";
const Card=({id, imag, titulo, onDelete} )=> {
  const [contador, setCounter] = useState(0);

  console.log(id);
  const incrementCounter = () => {
      setCounter(contador + 1);
  };
  console.log("soy un titulo")
 console.log(titulo);
 

  return (
      <div>
          <img  src={imag} alt="" />
          <h1>{titulo}</h1>
          <p>LIKES {contador}</p>
          <button  onClick={()=>incrementCounter()}>Like</button>
          <button  onClick={()=>onDelete(id)}>Borrar</button>
      </div>
      
  );
};

export default Card;
