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
      showVideo: {},
    };

    this.images = [
      {
        thumbnail: `${PREFIX_URL}4v.jpg`,
        original: `${PREFIX_URL}4v.jpg`,
        embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
        description: 'Render custom slides within the gallery',
        renderItem: this._renderVideo.bind(this)
      },
      {
        original: `${PREFIX_URL}image_set_default.jpg`,
        thumbnail: `${PREFIX_URL}image_set_thumb.jpg`,
        imageSet: [
          {
            srcSet: `${PREFIX_URL}image_set_cropped.jpg`,
            media : '(max-width: 1280px)',
          },
          {
            srcSet: `${PREFIX_URL}image_set_default.jpg`,
            media : '(min-width: 1280px)',
          }
        ]
      },
      {
        original: `${PREFIX_URL}1.jpg`,
        thumbnail: `${PREFIX_URL}1t.jpg`,
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        description: 'Custom class for slides & thumbnails'
      },
    // ].concat(this._getStaticImages());
    ];
  }

  _resetVideo() {
    this.setState({showVideo: {}});

    if (this.state.showPlayButton) {
      this.setState({showGalleryPlayButton: true});
    }

    if (this.state.showFullscreenButton) {
      this.setState({showGalleryFullscreenButton: true});
    }
  }

  _toggleShowVideo(url) {
    this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
    this.setState({
      showVideo: this.state.showVideo
    });

    if (this.state.showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({showGalleryPlayButton: false});
      }

      if (this.state.showFullscreenButton) {
        this.setState({showGalleryFullscreenButton: false});
      }
    }
  }

  _renderVideo(item) {
    return (
      <div>
        {
          this.state.showVideo[item.embedUrl] ?
            <div className='video-wrapper'>
                <a
                  className='close-video'
                  onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
                >
                </a>
                <iframe
                  width='560'
                  height='315'
                  src={item.embedUrl}
                  frameBorder='0'
                  allowFullScreen
                >
                </iframe>
            </div>
          :
            <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
              <div className='play-button'></div>
              <img className='image-gallery-image' src={item.original} />
              {
                item.description &&
                  <span
                    className='image-gallery-description'
                    style={{right: '0', left: 'initial'}}
                  >
                    {item.description}
                  </span>
              }
            </a>
        }
      </div>
    );
  }

  render() {
    return (

      <section className='app'>
        <ImageGallery showThumbnails={false}
          items={this.images}
        />

      </section>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));