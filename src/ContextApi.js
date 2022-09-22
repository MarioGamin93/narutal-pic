import { useEffect } from "react";
import { createContext, useState } from "react";

export const ContextApi = createContext({});

export const Provider = ({ children }) => {

  //* Estados a utilizar
    const [fotos, setFotos] = useState([])
    const [fotosFavoritos, setFotosFavoritos] = useState([])
 
    //* Contantes para englobar los estados
    const globalFotos = {fotos, setFotos}
    const globalFotosFavoritos = {fotosFavoritos, setFotosFavoritos}
    console.log(fotosFavoritos)
    console.log(fotos)

    //* llamada al enpoint de las fotos
    const fotosRender = async() =>{
            const endpoint = "/fotos.json";
            const response = await fetch(endpoint)
            const {photos} = await response.json()
            setFotos(photos)
            // console.log(photos)
      }

      //* usando el efecto para mostrar las fotos por pantalla cuando inicie el componente
      useEffect(() =>{
        fotosRender()
      },[])
  
    //* llamando los valores de las contantes para luego utilizar de manera global con el useContext
    return <ContextApi.Provider value={{globalFotos, globalFotosFavoritos}}>{children}</ContextApi.Provider>;
};