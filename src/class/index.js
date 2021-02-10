import React from "react";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';

export default class GalleryImages extends React.Component {

  constructor() {
    super();
    this.images = [
      {
        original: `${PREFIX_URL}image_set_default.jpg`,
        thumbnail: `${PREFIX_URL}image_set_default.jpg`,
      },
      {
        original: `${PREFIX_URL}1.jpg`,
        thumbnail: `${PREFIX_URL}1.jpg`,
      },
    ];
  }
  render() {
    return (
      <section className='app'>
        <ImageGallery 
          ref={i => this._imageGallery = i}
          items={this.images}
          onClick={()=>  this._imageGallery.fullScreen()}
        />
      </section>
    );
  }
}
