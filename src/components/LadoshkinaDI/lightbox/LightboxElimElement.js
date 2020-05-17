import React from "react";
import ReactDOM from "react-dom";

import GalleryWithThumbs from "./components/GalleryWithThumbs";
import SimpleReactLightbox from "simple-react-lightbox";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
