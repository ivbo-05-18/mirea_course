import React from 'react';
import TicTacToe from './TicTacToe/TicTacToe';
import SymonSays from './SimonSays/SimonSays'
import Gifs from './Gifs/Gifs.jsx'

class IvanovDSElement extends React.Component {
    render(){
        return (
            <div>
                <h5>Собственный элемент - игра "Крестики-нолики"</h5> 
                <TicTacToe/>
                <hr/>
                <h5>Заимствованный элемент - игра "Simon Says"</h5>
                <SymonSays/>
                <hr/>
                <h5>Заимствованный элемент - gif изображение с котом (Капырин К.А.) </h5>
                <Gifs/>
                <hr/>
            </div>
        )
    }
}

export default IvanovDSElement;