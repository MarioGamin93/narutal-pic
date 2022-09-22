import { useContext, useState } from "react"
import { ContextApi } from "../ContextApi"

export default function Heart({ liked, foto }) {
  
  //* llamndo los valores del contexto y importando el valoror ContextApi 
  const {globalFotos, globalFotosFavoritos} = useContext(ContextApi)
  
  //* creando un estado para luego cambiar de manera reactiva el color del corazon
  const [filled, setFilled] = useState(liked)
  // console.log(filled)

  //* destructurando los valores del contexto para utilizarlos de manera más directa
  const {fotos} = globalFotos 
  const {fotosFavoritos, setFotosFavoritos} = globalFotosFavoritos

  //* funcion para agregar fotos a favoritos cuando se le de click al corazon y tambien para cambiar el color del corazon
  const agregarFavoritos = (foto) =>{

    let {id} = foto
    const indice = fotos.findIndex(elemento => elemento.id === id)
    let corazon = fotos[indice].liked = true
    setFilled(corazon)
    console.log(corazon)
    const agregar_foto = [...fotosFavoritos, foto]
    setFotosFavoritos(agregar_foto)
    console.log(indice)
  }

  //* funcion para quitar fotos de favoritos cuando le vuelvas a dar click al corazon y tambien para cambiar el color del corazon

  const quitarFavoritos = (foto) =>{

    const {liked, id} = foto
    let indiceExistente = fotosFavoritos.findIndex(favorito => favorito.id === id)
    fotosFavoritos.splice(indiceExistente, 1)
    const indiceCorazon = fotos.findIndex(elemento => elemento.id === id)
    console.log(indiceCorazon)
    let corazon = fotos[indiceCorazon].liked = false
    console.log(fotos[indiceCorazon].liked)
    console.log(liked)
    setFilled(corazon)
  }

  return (
    <>
      <svg width="40px" viewBox="0 0 24 24" onClick={() => filled ?  quitarFavoritos(foto): agregarFavoritos(foto)}  >
        <path
          fill={filled ? "red" : "white"}
          d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
        />
      </svg>
    </>
  );
}
