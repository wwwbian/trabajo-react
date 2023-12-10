import  { useContext } from 'react'
import { Contexto } from '../context/ContextProvider';
import Card from "./Card";
import Navbar from './Navbar';
function Cards() {
    const { cards, handleDeleteCard } = useContext(Contexto);
    
  
   
    return (
      <div>
        <h1 className="titulo">Bienvenidos a 22xT</h1>
        {cards.map((card, index) => (
        
          <Card
            key={index}
            imag={card.imageUrl}
            titulo={card.title}
            id={card.id}
            onDelete={handleDeleteCard}
          />
        ))}
      </div>
    );
  }
  

export default Cards