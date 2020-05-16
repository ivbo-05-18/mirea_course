import React from 'react';
import EmojiList from './EmojiesList/src/index'
import MoneyElemnt  from './mon_change/money'
import Gifs from './my-gifs/SecondGifs.jsx'
import styles from './Element.module.css'

const Element = (props) => {
    return (
        <div className={styles.box}>
             <div>
                <p>Собственный элемент: показывает Gif изображение с котом</p>
                <Gifs />
             </div>
             <div >
                <p>Заимствованный элемент: конвертер валют (Мурашев А.С.)</p>
                <MoneyElemnt/>
             </div>
             <div>
                 <p>Заимствованный элемент: эмодзи лист</p>
                 <EmojiList/>
             </div>
        </div>
    )
}

export default Element