import React from 'react';
import styles from './Gifs.module.css'

let gifList = [
    'http://www.reactiongifs.com/wp-content/uploads/2013/05/deal.gif',
    'http://www.reactiongifs.com/r/at1.gif',
    'https://i.gifer.com/At.gif',
    'https://i.gifer.com/v5T.gif',
    'https://i.gifer.com/2GU.gif',
    'https://i.gifer.com/Ao.gif',
    'https://i.gifer.com/7d5.gif',
    'https://i.gifer.com/48Z.gif',
    'https://i.gifer.com/cSi.gif',
    'https://i.gifer.com/Az.gif'
]

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    //<div><iframe src={gifList[getRandomIntInclusive(0,gifList.length-1)]} ></iframe></div>
}

const Gifs = (props) => {
    return (
        <div className={styles.box}>
            <div className={styles.border}>
                <img src={gifList[getRandomIntInclusive(0, gifList.length - 1)]} alt="If you see this text, the error has occured" />
            </div>
            <div>
                <p>Gif of the day!</p>
            </div>
        </div>
    )
}

export default Gifs