/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Gifs.module.css';

const gifList = [
  'http://www.reactiongifs.com/wp-content/uploads/2013/05/deal.gif',
  'http://www.reactiongifs.com/r/at1.gif',
  'https://i.gifer.com/At.gif',
  'https://i.gifer.com/v5T.gif',
  'https://i.gifer.com/2GU.gif',
  'https://i.gifer.com/Ao.gif',
  'https://i.gifer.com/7d5.gif',
  'https://i.gifer.com/48Z.gif',
  'https://i.gifer.com/cSi.gif',
  'https://i.gifer.com/Az.gif',
];

class Gifs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { num: props.num };
  }

  componentDidUpdate(prevProps) {
    const { num } = this.props;
    if (num !== prevProps.num) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ num });
    }
  }

  render() {
    const { num } = this.state;
    return (
      <div className={styles.box}>
        <div className={styles.border}>
          <img src={gifList[num]} alt="If you see this text, the error has occured" />
        </div>
        <div>
          <p>Gif of the day!</p>
        </div>
      </div>
    );
  }
}

export default Gifs;
