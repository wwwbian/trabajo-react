import { createContext, useState } from "react";

export const Contexto = createContext()
export default function MiProvider({ children }) {
    const [jugadores, setJugadores] = useState([
        {
            id: 1,
            nombre: "Guido  Herrera",
            posicion: "Arquero ",
            imagen: "../src/assets/jugadores-web_Herrera_22-removebg-preview.png",
            edad: 34,
            
        },
        {
            id: 2,
            nombre: "Gastón Benavídez",
            posicion: "Defensor ",
            imagen: "../src/assets/jugadores-web_Benavidez_29-768x1332-removebg-preview.png",
            edad: 27,
           
        },
        {
            id: 3,
            nombre: "Matías Catalán",
            posicion: "Defensor ",
            imagen: "../src/assets/jugadores-web_Catalan_4-768x1332-removebg-preview.png",
            edad: 31,
           
        },
        {
            id: 4,
            nombre: "Lucas Suárez",
            posicion: "Defensor ",
            imagen: "../src/assets/jugadores-web_Suarez_03-removebg-preview.png",
            edad: 28,
           
        },
        {
            id: 5,
            nombre: "Juan Portillo",
            posicion: "Mediocampista",
            imagen: "../src/assets/jugadores-web_Portillo_28-removebg-preview.png",
            edad: 23,
           
        },
        {
            id: 6,
            nombre: "Ulises Ortegoza",
            posicion: "Mediocampista",
            imagen: "../src/assets/jugadores-web_Ortegoza_30-removebg-preview.png",
            edad: 26,
           
        },
        {
            id: 7,
            nombre: "Rodrigo Villagra",
            posicion: "Mediocampista",
            imagen: "../src/assets/jugadores-web_Villagra_18-removebg-preview.png",
            edad: 22,
           
        },
        {
            id: 8,
            nombre: "Javier Nicolás Vallejo",
            posicion: "Delantero",
            imagen: "../src/assets/jugadores-web_Vallejos_20-removebg-preview.png",
            edad: 19,
           
        },
        {
            id: 9,
            nombre: "Rodrigo Garro",
            posicion: "Mediocampista",
            imagen: "../src/assets/jugadores-web_Garro_16-removebg-preview.png",
            edad: 25,
          
        },
        {
            id: 10,
            nombre: "Ramón Sosa Acosta",
            posicion: "Delantero",
            imagen: "../src/assets/WEB_RAMON-SOSA-1-removebg-preview.png",
            edad: 23,
            
        },
        {
            id: 11,
            nombre: "Lautaro Nahuel Bustos",
            posicion: "Delantero",
            imagen: "../src/assets/jugadores-web_Bustos_10-removebg-preview.png",
            edad: 25,
          
        },
    ])
    const [busqueda, setBusqueda] = useState("");

    return (<>
        <Contexto.Provider value={{ jugadores, setJugadores, busqueda, setBusqueda }}>
            {children}
        </Contexto.Provider>
        </>)
}