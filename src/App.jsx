
// Aquí vamos a modificar los componentes independientemente, es decir, este será el padre que poseerá los elementos individuales

import './App.css';
import { Link } from 'react-router-dom';
import { UniversaeInicio } from './UniversaeInicio';
import 'bootstrap-icons/font/bootstrap-icons.css';

export function App(){

    return(
        <section className='pagInicial'>
            <header className="menu-container">
                <Link to="/" className="logo">
                    <img src="../img/principal/HeaderWebUniversae.png" alt="Logo de Universae" />
                </Link>
            </header>

            <div className='imagesBox'>
                <Link to="/embarque_helo">
                    <UniversaeInicio imageName="HomeButton0"/>
                </Link>
                <Link to="/hemorragia">
                    <UniversaeInicio imageName="HomeButton1"/>
                </Link>
                <Link to='/extincion'>
                    <UniversaeInicio imageName="HomeButton2"/>
                </Link>
                <Link to="/epis">
                    <UniversaeInicio imageName="HomeButton3"/>
                </Link>
                <Link to="/señalizacion_helos">
                    <UniversaeInicio imageName="HomeButton4"/>
                </Link>
                <Link to='/ascensor'>
                    <UniversaeInicio imageName="HomeButton5"/>
                </Link>
            </div>

            <footer className='footer'>
                <div className="containerFoot">
                    <div className="RRSS">
                        <a href="https://www.facebook.com/UNIVERSAE/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/_universae/?hl=es" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com/c/UNIVERSAE_FP" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-youtube"></i>
                        </a>
                        <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-twitch"></i>
                        </a>
                        <a href="https://www.linkedin.com/school/universae" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="https://www.tiktok.com/@_universae" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-tiktok"></i>
                        </a>
                        <a href="https://twitter.com/_Universae" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="https://universae.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-google"></i>
                        </a>
                    </div>
                </div>
            </footer>

            
        </section>
    )
}