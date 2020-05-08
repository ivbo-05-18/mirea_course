import React from 'react';
import Money_Element from './mon_change';
import Draw_Element from './paint';

const STYLE = {
    margin_top: '20px',
}

class Murashev_Element extends React.Component {
    render(){
        return (
            <div>
                <h3 style={STYLE}>Собственный элемент - Конвертер из рублей в доллары</h3>
                <div>
                <Money_Element/>
                </div>
                <h3 style={STYLE}>Заимствованный элемент - Элемент для рисования</h3>
                <div>
                <Draw_Element/>
                </div>
            </div>
        )
    }
}

export default Murashev_Element;