import React from 'react';
import styles from '../style.module.css';

export default class Display extends React.Component {
  render () {
      const { value, ...props } = this.props
             
      return (
          <div className={styles.display} {...props}>{value}</div>
      )
  }
}
