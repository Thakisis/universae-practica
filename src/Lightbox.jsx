import PropTypes from 'prop-types'
import AnotherLightbox from "yet-another-react-lightbox"
import Captions from "yet-another-react-lightbox/plugins/captions"

import "yet-another-react-lightbox/plugins/captions.css"
import 'yet-another-react-lightbox/styles.css'

function Lightbox({ isOpen, images, folder, title, selected, setClosed }) {

    const slides = convertToSlides(images, folder, title)


    return (
        <div className="mylightbox"   >
            <AnotherLightbox
                open={selected !== null}
                index={selected}
                close={() => setClosed(false)}
                    slides={slides}
                plugins={[Captions]}

            />



        </div >
    )

}
Lightbox.propTypes = {
    folder: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    selected: PropTypes.number.isRequired,
    setClosed: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Lightbox

function convertToSlides(images, folder, title) {
    return images.map(({ img, alt }) => {

        return {
            src: `/Miniaturas/${folder}/${img}`,
            title: title,
            description: alt,
            width: 1280,
            height: 720,
        }
    })
}
