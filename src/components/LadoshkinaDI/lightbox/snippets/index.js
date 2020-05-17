export const snippets = {
  plain: `
    // App.js
    import SimpleReactLightbox from 'simple-react-lightbox'

    <SimpleReactLightbox>
      <MyApp />
    </SimpleReactLightbox>

    // Any Component
    import { SRLWrapper } from 'simple-react-lightbox'

    <SrlWrapper>
      <img src="./path/or/url/to/your/image.jpg" alt="Caption" />
      <img src="./path/or/url/to/your/image.png" alt="Another Caption" />
      <img src="./path/or/url/to/your/image.png" alt="Final Caption" />
    </SrlWrapper>
  `,
  withOptions: `
    const options = {
      buttons: {
        iconPadding: '2px',
        iconColor: 'rgba(25, 136, 124, 0.5)',
        hideButtonsAfter: false
      },
      settings: {
        overlayColor: 'rgb(25, 136, 124)',
        transitionTimingFunction: 'ease-in-out',
        slideTransitionSpeed: 1000,
        enablePanzoom: false
      }
    }

    <SrlWrapper options={options}>
      <h1>Hello World</h1>
      <img src="./path/or/url/to/your/image.jpg" alt="Caption" />
      <img src="./path/or/url/to/your/image.png" alt="Another Caption" />
      <p>I am some text, but I will be ignored by the light-box</p>
      <img src="./path/or/url/to/your/image.png" alt="Final Caption" />
    </SrlWrapper>

    `,
  withDataAttribute: `
      <SRLWrapper>
        <a href="link/to/the/full/width/image.jpg" data-attribute="SRL">
          <img src="src/for/the/thumbnail/image.jpg" alt="Umbrella" />
        </a>
        <a href="link/to/the/full/width/image_two.jpg" data-attribute="SRL">
          <img src="src/for/the/thumbnail/image_two.jpg" alt="Umbrella" />
        </a>
      </SRLWrapper>
    `,
  withHook: `
    import { useLightbox } from 'simple-react-lightbox'

    const YourComponent = props => {

      // Custom Hook
      const {openLightbox} = useLightbox()

      return (
        <>
          <button onClick={() => openLightbox()}>
            Open the lightbox
          </button>
          <button onClick={() => openLightbox(props.index)}>
            Open the lightbox at index
          </button>
        </>
      )
    }
  `,
  withCallbacks: `
    // Define the callbacks
    const callbacks = {
      onSlideChange: args => yourFunction(args)
    }

    // Passes down the callbacks
    <SrlWrapper callbacks={callbacks}>
      <img src="./path/or/url/to/your/image.jpg" alt="Caption" />
      <img src="./path/or/url/to/your/image.png" alt="Another Caption" />
    </SrlWrapper>
  `,
  withApi: `
  const [images, setImages] = useState([])

  // Your API Call and Logic
  fetch('https://api.whatever.com/photos/).then(
    .then(res => res.json())
    .then(res => setImages(res.data));
  )

  // Loop through the images inside the <SRLWrapper/> component
  <SRLWrapper>
    {!images ? (
      <span>Loading...</span>
    ) : (
      <div className="row">
        {images.map(({ id, image, description }) => (
          <div key={id}>
            <img src={image} alt={description} />
          </div>
        ))}
      </div>
    )}
  </SRLWrapper>
  `,
  withProps: `
  const images = [
    {
      src: 'https://www.simple-react-lightbox.dev/docs/gallery/unsplash18.jpg',
      thumbnail: 'https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash18.jpg',
      caption: 'Lorem ipsum dolor sit amet',
    },
    {
      src: 'https://www.simple-react-lightbox.dev/docs/gallery/unsplash19.jpg',
      thumbnail: 'https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash19.jpg',
      caption: 'Consecutur adiscip elit',
    },
    {
      src: 'https://www.simple-react-lightbox.dev/docs/gallery/unsplash20.jpg',
      thumbnail: 'https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash20.jpg',
      caption: 'Commodo commodo dolore',
    },
    {
      src: 'https://www.simple-react-lightbox.dev/docs/gallery/unsplash21.jpg',
      thumbnail: 'https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash21.jpg',
      caption: 'Deserunt deserunt commodo excepteur',
    }
  ]


  // SRLWrapper is going to use the images declared in the array
  <SRLWrapper images={images} />
  `
}
