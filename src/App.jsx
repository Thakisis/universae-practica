
// Aquí vamos a modificar los componentes independientemente, es decir, este será el padre que poseerá los elementos individuales

import './App.css'
import { Link } from 'react-router-dom'
import { UniversaeInicio } from './UniversaeInicio'
import { projects } from './contants'
import 'bootstrap-icons/font/bootstrap-icons.css'

export function App() {
    const juegos = projects.map(({ id, title, url, imageLink }) => (
        <Link to={url} key={id}>
            <UniversaeInicio image={`/LinkImage/${imageLink}`} title={title} />
        </Link>
    ))
    return (
        <section className='pagInicial'>
            <div className='imagesBox'>
                {juegos}
            </div>



        </section>
    )
}
