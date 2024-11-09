import "./estilosComps/PaginaInicioPrincipal.css";
import { useNavigate } from 'react-router-dom'; 

export function PaginaInicioPrincipal(){
  const formularioRegistrarse2 = useNavigate();
  const RegistrarseClick2 = () => {
    formularioRegistrarse2('/registro');
  };
    return(
        <main>
        <section className="inicio-section">
          <div className="container-inicio">
              <div className="container-inicio__text">
                <h1>Fundación Huesped</h1>
                <h2> "Prevención - Ciencia - Derechos" </h2>
                <div className="container-button2">
                  <button className="button-general button4" onClick={RegistrarseClick2}><span>Quiero Registrarme</span></button>
                </div>
              </div> 
              <div className="container-inicio__img">
                <img className="container-inicio__img" src="../src/img/portada.png" alt="Imagen de inicio" />
              </div>
          </div>
        </section>
      </main>
    );
}