// import {MenuSuperior} from "../components/MenuSuperior";
// import { Footer } from "../components/Footer";
import { PaginaInicioPrincipal } from "./components/PaginaInicioPrincipal";
import "./estilosPags/PaginaInicio.css";

export function PaginaInicio() {
    return(
        <div className="container-inicio-gral">
            {/* <MenuSuperior /> */}
            <PaginaInicioPrincipal />
            {/* <Footer /> */}
        </div>

    );
}