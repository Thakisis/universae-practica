
import PropTypes from 'prop-types'
import './UniversaeInicio.css'


export function UniversaeInicio({ image, title }) {


    return (
        <div className='imageContainer'>
            <img
                src={`${image}`}
                alt={title}
                className="gamePic"

            />
        </div>
    )
}


UniversaeInicio.propTypes = {
    image: PropTypes.string.isRequired, // Valida que 'image' sea un string y sea requerido
    title: PropTypes.string.isRequired, // Valida que 'alt' sea un string y sea requerido
}
