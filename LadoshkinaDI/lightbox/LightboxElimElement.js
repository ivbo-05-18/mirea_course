import React from "react";


import GalleryWithThumbs from "./components/GalleryWithThumbs";
import SimpleReactLightbox from "simple-react-lightbox";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <SimpleReactLightbox>
      <div className="App">
        <Router>
       
          <GalleryWithThumbs />
          
        </Router>
      </div>
    </SimpleReactLightbox>
  );
}

export default App;
