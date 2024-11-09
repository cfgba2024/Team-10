import React, { useState } from 'react';
import "./estilosComps/FormularioRegistro.css";
import { useNavigate } from "react-router-dom";

export function FormularioRegistro() {
    const paginaprinc = useNavigate();

    function dropHandler(ev) {
        ev.preventDefault();
        console.log("File(s) dropped");

        if (ev.dataTransfer.items) {
            [...ev.dataTransfer.items].forEach((item, i) => {
                if (item.kind === "file") {
                    const file = item.getAsFile();
                    console.log(`… file[${i}].name = ${file.name}`);
                    setDroppedFile(file);
                }
            });
        } else {
            [...ev.dataTransfer.files].forEach((file, i) => {
                console.log(`… file[${i}].name = ${file.name}`);
                setDroppedFile(file);
            });
        }
    }

    function dragOverHandler(ev) {
        ev.preventDefault();
        console.log("File(s) in drop zone");
    }

    const handlepaginaPrinc = () => {
        paginaprinc('/pagina-principal');
      };

    return (
        <div className="content-form-registro">
            <form className="form-registro">
                <p className="title-registro">Usuario</p>
                <p className="message-registro">Regístrese ahora y obtenga acceso completo a nuestra aplicación.</p>
                
                <div className="flex-registro">
                    <label>
                        <input className="input-registro" type="text" placeholder="" required=""></input>
                        <span>Nombre/s</span>
                    </label>

                    <label>
                        <input className="input-registro" type="text" placeholder="" required=""></input>
                        <span>Apellidos</span>
                    </label>
                </div>  
                                
                <label>
                    <input className="input-registro" type="email" placeholder="" required=""></input>
                    <span>Email</span>
                </label> 
                        
                <label>
                    <input className="input-registro" type="password" placeholder="" required=""></input>
                    <span>Contraseña</span>
                </label>

                <label>
                    <input className="input-registro" type="password" placeholder="" required=""></input>
                    <span>Confirmar contraseña</span>
                </label>

                <button onClick={handlepaginaPrinc} className="submit-registro">Submit</button>
                <p className="signin-registro">¿Ya tienes una cuenta? <a href="#">Iniciar sesión</a></p>
            </form>
        </div>
    );
}
