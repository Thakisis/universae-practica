import Lightbox from './Lightbox'
import PropTypes from 'prop-types'
import { useState } from 'react'
export default function Secundaria({ images, folder, texto, juegoUrl, longTitle }) {

    const [picture, setPicture] = useState({ image: null })
    const closePicture = () => setPicture({ image: null })
    const imageList = images.map(({ img, alt }, index) => (
        <div key={img} className="image-container" style={{ cursor: 'pointer' }}>
            <img src={`Miniaturas/${folder}/${img}`} alt={`Thumbnail ${alt}`} className="hover-shadow" onClick={() => setPicture({ image: index })} />
        </div>
    ))
    return (
        <section>
            <Lightbox images={images} folder={folder} title={longTitle} selected={picture.image} setClosed={closePicture} />
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
                            {imageList}
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
    )
}

Secundaria.propTypes = {
    images: PropTypes.array.isRequired, // Valida que 'images' sea un array y sea requerido
    folder: PropTypes.string.isRequired, // Valida que 'folder' sea un string y sea requerido
    texto: PropTypes.element.isRequired, // Valida que 'texto' sea un elemento de React y sea requerido
    longTitle: PropTypes.string.isRequired, // Valida que 'longTitle' sea un string y sea requerido
    juegoUrl: PropTypes.string.isRequired, // Valida que 'juegoUrl' sea un string y sea requerido
}
