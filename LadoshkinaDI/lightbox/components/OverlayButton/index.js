import React from 'react'
import { useLightbox } from 'simple-react-lightbox'

/*
We can use the provided hook in case you want
to open the close from a button or anything :)
*/

const OverlayButton = props => {
  const { closeLightbox } = useLightbox()

  return (
    <button
      className={`SRL_CTA-CloseLightbox ${props.light && 'light'}`}
      onClick={() => closeLightbox()}
    >
      Close the lightbox
    </button>
  )
}

export default OverlayButton
