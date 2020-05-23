import React from 'react';
import CoronaTime from './coronatime'
import GaussianElimElement from '../PerederiyVA/Gauss/GaussianElimElement';
import App from './calculator/App'

const STYLEBACKALL = {
    'border-radius': '5px',
    'background': '#595a66',
    'margin': '10px',
    'padding': '5px 25px',
}
const STYLELAYBEL = {
    'display': 'inline-block',
    'padding': '.25em .4em',
    'font-size': '16px',
    'font-weight': '700',
    'line-height': '1',
    'text-align': 'center',
    'white-space': 'nowrap',
    'vertical-align': 'baseline',
    'border-radius': '.25rem',
    'color': '#FFF',
    'background-color': '#45464f',
}
const STYLEA = {
    'color': '#fff',
}

const KuzminLOElement = () => (
    <div style={STYLEBACKALL}>
        <div>
            <span style={STYLELAYBEL}>Собственный элемент:</span>
            <CoronaTime />
        </div>
        <div>
            <span style={STYLELAYBEL}>Элемент Передерия В.А.:</span>
            <GaussianElimElement />
        </div>
        <div>
            <span style={STYLELAYBEL}>Калькулятор <a href="https://github.com/niinpatel/calculator-react" style={STYLEA}>из чьего-то гитхаба</a>:</span>
            <App />
        </div>
    </div>
);

export default KuzminLOElement;
