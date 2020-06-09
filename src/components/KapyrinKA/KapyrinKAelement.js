import React from 'react';
import EmojiList from './EmojiesList/App';
import MoneyElemnt from './mon_change/money';
import Gifs from './my-gifs/SecondGifs';
import styles from './Element.module.css';

const Element = () => (
  <div className={styles.box}>
    <p>Собственный элемент: показывает Gif изображение с котом</p>
    <Gifs />
    <p>Заимствованный элемент: конвертер валют (Мурашев А.С.)</p>
    <MoneyElemnt />
    <p>Заимствованный элемент: эмодзи лист</p>
    <EmojiList />
  </div>
);

export default Element;
