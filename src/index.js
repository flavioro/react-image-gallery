import React from "react";
import ReactDOM from "react-dom";
// import PhotosGallery from './class/index'
import PhotosGallery from './function/index'

class App extends React.Component {

  render() {
    return (
      <>
        <PhotosGallery />
      </>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));