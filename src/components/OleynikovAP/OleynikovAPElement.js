import React from 'react';
import Groupmate from './components/Groupmate/App'
import ToggleElem from './hoc/ToggleElem/ToggleElem'
import Kramer from './components/Kramer/Kramer'
import Sweeper from './components/Sweeper/App'

const STYLE = {
    borderRadius: '2px',
    background: '#DFDFDF',
    margin: '10px',
	padding: '5px 25px',
	minWidth: '800px'
}

const TEXT_STYLE = {
    fontSize: '16px',
    color: 'black',
    margin: '10px 0px'
}

const App = props => {
	return (
		<div style={STYLE}>
			<ToggleElem componentName={"мой компонент"}>
				<h2 style={TEXT_STYLE}>Собственный элемент - Решение СЛАУ методом Крамера</h2>
				<Kramer />
			</ToggleElem>
			<ToggleElem componentName={"компонент с GitHub"}>
				<h2 style={TEXT_STYLE}>Заимствованный элемент - игра "Сапер"</h2>
				<Sweeper />
			</ToggleElem>
			<ToggleElem componentName={"компонент одногруппника"}>
				<h2 style={TEXT_STYLE}>Элемент от другого участника (Передерий В.А.)</h2>
				<Groupmate />
			</ToggleElem>
		</div>
	)
}

export default App;
