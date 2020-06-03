import React from 'react'

import { SRLWrapper } from 'simple-react-lightbox'

const options = {
  buttons: {
    backgroundColor: 'rgba(140, 94, 88, 0.8)',
    iconColor: 'rgba(241, 191, 152, 0.7)'
  },
  settings: {
    overlayColor: 'rgba(255, 237, 225, 0.95)',
    showThumbnails: false,
    transitionSpeed: 1000,
    transitionTimingFunction: 'linear'
  },
  caption: {
    showCaption: false
  }
}

function GalleryWithLinks() {
  return (
  
           <SRLWrapper options={options}>
        <div id="gallery-with-links" className="container content">
          <div className="row">
            <div className="col-md-4 col-6 col-image-with-link">
              <a
                href="https://www.simple-react-lightbox.dev/docs/gallery/unsplash17.jpg"
                data-attribute="SRL"
                className="pseudo-element"
              >
                <img
                  src="https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash17.jpg"
                  alt="A small boat"
                />
              </a>
            </div>
       
          </div>
        </div>
      </SRLWrapper>
 
  )
}

export default GalleryWithLinks
