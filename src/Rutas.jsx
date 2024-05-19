import { App } from "./App"
import { Route, Routes } from 'react-router-dom'
import { Proyecto } from './Proyecto'
import { routerConfig } from "./contants"
import { Link } from 'react-router-dom'
import './Main.css'
function Rutas() {
    const paginas = { App, Proyecto }

    const routes = routerConfig.map(({ path, element, props }) => {

        const Elemento = paginas[element]


        return <Route key={path} path={path} element={<Elemento {...props} />} />
    })

    return (
        <div>
            <header className="menu-container">
                <Link to="/" className="logo">
                    <img src="../img/principal/HeaderWebUniversae.png" alt="Logo de Universae" />
                </Link>
            </header>
            <Routes>
                {routes}
            </Routes>
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

        </div>
    )
}

export default Rutas
