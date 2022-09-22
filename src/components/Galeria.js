import "../assets/css/galeria.css";
import Heart from "./Heart";
import { useContext} from "react";
import { ContextApi } from "../ContextApi";

export default function Home() {

  //* Aqui usando el contexto y importando el valor de la creacion del contexto y encerrandolo en ()
  const {globalFotos} = useContext(ContextApi)

  //* destructurando para solo usar la variable del estando 
  const {fotos} = globalFotos 
  
  return (
    <div className="galeria grid-columns-5 p-3">
        {fotos.map((foto) => {
          return (
            <div key={foto.id} className='foto' >
              <Heart liked={foto.liked} foto={foto} />
              <img
                src={foto.src.original}
                alt="foto"
                />
                <p>{foto.alt}</p>
            </div>
          );
        })}
    </div>
  );
}
