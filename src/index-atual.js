import React from "react";
import ReactDOM from "react-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import './App.css';
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
      additionalClass: true
    };

    this.images = [
      {
        thumbnail: `${PREFIX_URL}4v.jpg`,
        // original: `${PREFIX_URL}4v.jpg`,
        original: 'https://img.youtube.com/vi/4pSzhZ76GdM/mqdefault.jpg',
        embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
        description: 'Render custom slides within the gallery',
        renderItem: this._renderVideo.bind(this)
      },
      {
        original: `${PREFIX_URL}image_set_default.jpg`,
        // thumbnail: `${PREFIX_URL}image_set_thumb.jpg`,
        thumbnail: `${PREFIX_URL}image_set_default.jpg`,
        // imageSet: [
        //   {
        //     srcSet: `${PREFIX_URL}image_set_cropped.jpg`,
        //     media : '(max-width: 1280px)',
        //   },
        //   {
        //     srcSet: `${PREFIX_URL}image_set_default.jpg`,
        //     media : '(min-width: 1280px)',
        //   }
        // ]
      },
      {
        original: `${PREFIX_URL}1.jpg`,
        // thumbnail: `${PREFIX_URL}1t.jpg`,
        thumbnail: `${PREFIX_URL}1.jpg`,
        // originalClass: 'featured-slide',
        // thumbnailClass: 'featured-thumb',
        description: 'Custom class for slides & thumbnails'
      },
    // ].concat(this._getStaticImages());
    ];
    // console.log('call getSetStyle')
    this.getSetStyleByClassName('.image-gallery-image')
    this.getSetStyleByClassName('.image-gallery-thumbnail-image')
  }

  // _resetVideo() {
  //   this.setState({showVideo: {}});

  //   if (this.state.showPlayButton) {
  //     this.setState({showGalleryPlayButton: true});
  //   }

  //   if (this.state.showFullscreenButton) {
  //     this.setState({showGalleryFullscreenButton: true});
  //   }
  // }

  _toggleShowVideo(url) {
    console.log(!Boolean(this.state.showVideo[url]))
    this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
    console.log(this.state.showVideo[url])
    
    this.setState({
      // showVideo: this.state.showVideo
    });

    // if (this.state.showVideo[url]) {
    //   if (this.state.showPlayButton) {
    //     this.setState({showGalleryPlayButton: false});
    //   }

    //   if (this.state.showFullscreenButton) {
    //     this.setState({showGalleryFullscreenButton: false});
    //   }
    // }
  }

  getSetStyleByClassName(className_) {
    if (process.browser) {
      const styleSheets = window.document.styleSheets
      const styleSheetsLength = styleSheets.length
      for (let i = 0; i < styleSheetsLength; i++) {
        const classes = styleSheets[i].rules || styleSheets[i].cssRules
        if (!classes) continue
        const classesLength = classes.length
        for (let x = 0; x < classesLength; x++) {
          // console.log(classes[x].selectorText === className_)
          // console.log(className_)
          // console.log(classes[x].selectorText)
          if ((classes[x].selectorText) === className_) {
            // console.log(classes[x].selectorText)
            let ret
            // console.log(this.state.additionalClass)
            const rotateY = this.state.additionalClass
              ? 'rotateY(180deg)'
              : 'rotateY(0deg)'
            if (classes[x].cssText.includes('transform')) {
              classes[x].style.transform = rotateY
              // console.log(classes[x].style.transform)
              ret = classes[x].cssText
            }
            return ret
          }
        }
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
                  // onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
                >
                </a>
                <iframe
                  width='1200'
                  height='800'
                  src={item.embedUrl}
                  frameBorder='0'
                  allowFullScreen
                >
                </iframe>
            </div>
          :
            <a 
            onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
            >
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
        {/* <>
          <div className="container">
            <div className="row">
              <div className="col-6">
                
              </div>
              <div className="col-6"></div>
            </div>
          </div>
        </> */}
        <ImageGallery 
          items={this.images}
        />

      </section>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));