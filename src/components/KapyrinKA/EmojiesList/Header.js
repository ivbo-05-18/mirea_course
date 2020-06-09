import React, { PureComponent } from 'react';
import styles from './Header.module.css';

export default class Header extends PureComponent {
  render() {
    return (
      <header className={styles.component_header}>
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          width="32"
          height="32"
          alt=""
        />
        Emoji Search
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
          width="32"
          height="32"
          alt=""
        />
      </header>
    );
  }
}
