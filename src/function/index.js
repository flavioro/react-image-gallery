import React, { useEffect, useState, useRef } from 'react'

import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'

const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';

export default function GalleryImages() {
  const imageGalleryRef = useRef()
  const [images, SetImages] = useState([])

  useEffect(() => {
    const images = [
      {
        original: `${PREFIX_URL}image_set_default.jpg`,
        thumbnail: `${PREFIX_URL}image_set_default.jpg`,
      },
      {
        original: `${PREFIX_URL}1.jpg`,
        thumbnail: `${PREFIX_URL}1.jpg`,
      },
    ];

    SetImages(images)
  }, [])

  return (
    <>
      <ImageGallery
        ref={imageGalleryRef}
        items={images}
        onClick={() => imageGalleryRef.current?.fullScreen()}
      />
    </>
  )

}
