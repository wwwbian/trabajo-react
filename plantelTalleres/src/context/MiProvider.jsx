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
            nombre: "Laureano Martinez",
            posicion: "Arquero ",
            imagen: "../src/assets/jugadores-web_Martinez_12-1.png",
            edad: 20,
            
        },
        {
            id: 3,
            nombre: "Lautaro Morales",
            posicion: "Arquero ",
            imagen: "../src/assets/jugadores-web_Morales_23-1.png",
            edad: 20,
            
        },
        {
            id: 4,
            nombre: "Santino Barbi",
            posicion: "Arquero ",
            imagen: "../src/assets/jugadores-web_barbi_33-1.png",
            edad: 18,
            
        },
        {
            id: 5,
            nombre: "Gastón Benavídez",
            posicion: "Defensor ",
            imagen: "../src/assets/jugadores-web_Benavidez_29-768x1332-removebg-preview.png",
            edad: 27,
           
        },
        {
            id: 6,
            nombre: "Matías Catalán",
            posicion: "Defensor ",
            imagen: "../src/assets/jugadores-web_Catalan_4-768x1332-removebg-preview.png",
            edad: 31,
           
        },
        {
            id: 7,
            nombre: "Lucas Suárez",
            posicion: "Defensor ",
            imagen: "../src/assets/jugadores-web_Suarez_03-removebg-preview.png",
            edad: 28,
           
        },
        {
            id: 8,
            nombre: "Juan Rodriguez",
            posicion: "Defensor ",
            imagen: "../src/assets/jugadores-web_Suarez_03-removebg-preview.png",
            edad: 29,
           
        },
        {
            id: 9,
            nombre: "Juan Portillo",
            posicion: "Mediocampista",
            imagen: "../src/assets/jugadores-web_Portillo_28-removebg-preview.png",
            edad: 23,
           
        },
        {
            id: 10,
            nombre: "Ulises Ortegoza",
            posicion: "Mediocampista",
            imagen: "../src/assets/jugadores-web_Ortegoza_30-removebg-preview.png",
            edad: 26,
           
        },
        {
            id: 11,
            nombre: "Rodrigo Villagra",
            posicion: "Mediocampista",
            imagen: "../src/assets/jugadores-web_Villagra_18-removebg-preview.png",
            edad: 22,
           
        },

        {
            id: 12,
            nombre: "Rodrigo Garro",
            posicion: "Mediocampista",
            imagen: "../src/assets/jugadores-web_Garro_16-removebg-preview.png",
            edad: 25,
          
        },
        {
            id: 13,
            nombre: "Matias Gomez",
            posicion: "Mediocampista",
            imagen: "../src/assets/jugadores-web_Gomez_46-1.png",
            edad: 19,
          
        },
        {
            id: 14,
            nombre: "Luis Sequeira",
            posicion: "Mediocampista",
            imagen: "../src/assets/jugadores-web_Sequiera_13-1.png",
            edad: 19,
           
        },
        {
            id: 15,
            nombre: " Nicolás Vallejo",
            posicion: "Delantero",
            imagen: "../src/assets/jugadores-web_Vallejos_20-removebg-preview.png",
            edad: 19,
           
        },
        
        {
            id: 16,
            nombre: "Ramón Sosa ",
            posicion: "Delantero",
            imagen: "../src/assets/WEB_RAMON-SOSA-1-removebg-preview.png",
            edad: 23,
            
        },
        {
            id: 17,
            nombre: "Nahuel Bustos",
            posicion: "Delantero",
            imagen: "../src/assets/jugadores-web_Bustos_10-removebg-preview.png",
            edad: 25,
          
        },
        {
            id: 18,
            nombre: "Valentin Depietri",
            posicion: "Delantero",
            imagen: "../src/assets/jugadores-web_Dipietri_15-1.png",
            edad: 22,
          
        },
    ])
    
    const [busqueda, setBusqueda] = useState("");

    return (<>
        <Contexto.Provider value={{ jugadores, setJugadores, busqueda, setBusqueda }}>
            {children}
        </Contexto.Provider>
        </>)
}