import React from "react";
import ReactDOM from "react-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
    };

    this.images = [
      {
        original: `${PREFIX_URL}image_set_default.jpg`,
        thumbnail: `${PREFIX_URL}image_set_default.jpg`,
      },
      {
        original: `${PREFIX_URL}1.jpg`,
        thumbnail: `${PREFIX_URL}1.jpg`,
        description: 'Custom class for slides & thumbnails'
      },
    ];
  }

  _onImageClick(event) {
    // useRouter().push('/projetos_de_casas')
    alert('Hi')
  }

  render() {
    return (
      <section className='app'>
        <ImageGallery 
          items={this.images}
          onClick={this._onImageClick}
        />
      </section>
    );
  }
}

// ReactDOM.render(<App/>, document.getElementById('root'));