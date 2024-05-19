import { Link } from 'react-router-dom';
import './secundarias.css'
import PropTypes from 'prop-types';

export default function Secundaria({ images, texto, juegoUrl }) {
    
    return (
        <section>
            <header className="menu-container">
                <Link to="/" className="logo">
                    <img src="../img/principal/HeaderWebUniversae.png" alt="Logo de Universae" />
                </Link>
            </header>

            <div className='extincion'>

                <main className='juego-container'>
                    <div className='juego'>
                        <iframe title="juego" className="juego" scrolling="no" allowFullScreen="" frameBorder="0" src={juegoUrl}></iframe>
                    </div>

                    <div className="info-images">
                        <div className="info">
                            {texto}
                        </div>
                    </div>

                    <div className="row">
                        <div className="imagesJuego">
                            {images.map((image, index) => (
                                <div key={index} className="image-container">
                                    <img src={image} alt={`Thumbnail ${index}`} className="hover-shadow" />
                                </div>
                            ))}
                        </div>
                    </div>


                </main>
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
                        <a href="https://www.linkedin.com/school/universae" target="_blank">
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
    );
}

Secundaria.propTypes = {
    images: PropTypes.array.isRequired, // Valida que 'images' sea un array y sea requerido
    texto: PropTypes.element.isRequired, // Valida que 'texto' sea un elemento de React y sea requerido
    juegoUrl: PropTypes.string.isRequired, // Valida que 'juegoUrl' sea un string y sea requerido
    };