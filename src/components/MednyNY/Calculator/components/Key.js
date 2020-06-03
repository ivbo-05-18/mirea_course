import React from 'react';
import styles from '../style.module.css';

export default class Key extends React.Component {
  
  render () {
      const { className, ...props } = this.props
      
      return (
          <button className={`${styles.key} ${className}`} {...props}/>
      )
  }
}
