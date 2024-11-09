import "./estilosComps/Footer.css"


export function Footer(){
    return(
<footer>
    <div className="footer-container">
        <div className="footer-section descubre">
            <h3>Descrubre</h3>
            <ul>
                <li><a href="#">Front End</a></li>
                <li><a href="#">Bases de Datos</a></li>
                <li><a href="#">Descubre mucho más</a></li>
            </ul>
        </div>
        <div className="footer-section asistencia">
            <h3>Asistencia</h3>
            <ul>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
        <div className="footer-section social-media">
            <h3>Conectate a las redes</h3>
            <a href="https://www.linkedin.com/" target="_blank"><img src="../src/img/linked_icon.png" alt="LinkedIn" /></a>
            <a href="https://x.com/home" target="_blank"><img src="../src/img/twitter_icon.png" alt="Twitter" /></a>
            <a href="https://www.instagram.com/" target="_blank"><img src="../src/img/instagram_icon.png" alt="Instagram" /></a>
        </div>
    </div>
    <div className="footer-derechos">
        <p>&copy; 2024 Fundación Huesped </p>
    </div>
</footer>

    );
}