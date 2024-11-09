import "./estilosPags/PaginaRegistro.css";
import { useState } from "react";
import { FormularioRegistro } from "./components/FormularioRegistro";

export function PaginaRegistro(){
    const [esUsuario, cambiarEstado] = useState(true);

    const verFormularioUsuario = () => {
        cambiarEstado(true);
        console.log(esUsuario);
        
    };

    return (
        <div className="contenedor-registro row text-center">
          <div className="col-6 formulario-registro">
                <FormularioRegistro />
</div>
        </div>
      );
}
