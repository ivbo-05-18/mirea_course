import React from 'react';
import square_styles from './TicTacToe.module.css';

function Square(props){
		return (
			<button className={square_styles.square} onClick={() => props.onClick()}>
			{props.value}
			</button>
		)
}
export default Square;
