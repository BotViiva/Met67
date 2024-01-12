import './Main.css';
import React, { Component } from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import images from './Kuvat.js'



class Galleria extends Component {
    render() {

        return (
            <div className="Galleria">
                <h1>Hihöö</h1>
                <ImageGallery items={images} />
            </div>
        )
    }
}
export default Galleria;