import React from 'react';
import styles from './uploader.module.css';

class Uploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
  }

  handleUpload(e) {
    const { files } = e.target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.setState({
          image: reader.result,
        });
      }, false);

      reader.readAsDataURL(files[0]);
    }
  }


  render() {
    const { image } = this.state;
    return (
      <div className={styles.mainDiv}>
        <label htmlFor="inp" className={styles.inputLabel}>
          <input
            id="inp"
            className={styles.input}
            type="file"
            onChange={(e) => this.handleUpload(e)}
            accept="image/*"
          />
        </label>
        <div className={styles.text}>
          <img alt="upload" src="https://img.icons8.com/cute-clipart/64/000000/stack-of-photos.png" />
          <div className={styles.uploadText}>Please upload your image</div>
        </div>
        {
          image && (
            <div className={styles.preview}>
              <img
                className={styles.previewImage}
                src={image}
                alt="preview"
              />
            </div>
          )
        }
      </div>
    );
  }
}

export default Uploader;
