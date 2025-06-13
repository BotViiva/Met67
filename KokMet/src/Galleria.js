import './Main.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import images from './Kuvat'



function Galleria () {

        return (
            <div className="Galleria">
                <h1 className="Keskitetty">Osaston Mökki</h1>
                <ImageGallery items={images}
                    showPlayButton={false}
                    showFullscreenButton={false}
                />
            </div>
        )
    }

export default Galleria;