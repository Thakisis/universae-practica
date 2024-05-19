import PropTypes from 'prop-types'
import Secundarias from './secundarias'
import { projects } from './contants'

export const Proyecto = ({ id }) => {

    const { p, longTitle, imageFolder, images } = projects.find(({ id: proyectoId }) => proyectoId === id)
    const paragrafos = p.map((p, i) => <p key={i}>{p}</p>)
    const texto = (
        <div>
            <h3>{longTitle}</h3>
            {paragrafos}
        </div>
    )

    const juegoUrl = "https://html-classic.itch.zone/html/8561483/index.html"
    return (
        <div>

            <Secundarias images={images} folder={imageFolder} texto={texto} juegoUrl={juegoUrl} longTitle={longTitle} />

        </div>
    )
}


Proyecto.propTypes = {
    id: PropTypes.number.isRequired, // Valida que 'id' sea un número y sea requerido

}
