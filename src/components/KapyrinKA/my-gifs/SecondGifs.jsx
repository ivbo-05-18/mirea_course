import React from 'react';
import Cats from './Gifs.jsx'
import styles from './Gifs.module.css'

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Handle extends React.Component{
    constructor(props){
        super(props);
        this.state = {num: null};
        this.state = {cats: <Cats num ={getRandomIntInclusive(0,9)}/>};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

handleChange(event) {
    this.setState({num: event.target.value})
}

makeAnError(props){
    return(
        <div className={styles.box}>
        <div>
            <p>{props}</p>
        </div>
        <div>
            <p>Ошибка!</p>
        </div>
    </div>
    );
}

handleSubmit(event) {
    const { num } = this.state;
    if (num == null || num === '') {
        this.setState({ cats: this.makeAnError('Вы не ввели число!')});
    }
    else
        if (!num.match(/^[0-9]+$/)) {
            this.setState({ cats: this.makeAnError('Ошибка ввода!')});
        }
        else
            if (num > 9) {
                this.setState({ cats: this.makeAnError('Число больше девяти!')});
            }
            else
                this.setState({ cats: <Cats num={num} /> });
    event.preventDefault();
}

render(){
    const { cats } = this.state;
    const { num } = this.state;
    return(
        <div>
            {cats}  
            <form onSubmit={this.handleSubmit}>
                <p>Введите число от [0;9], чтобы сменить GIF</p>
                <br />
                <input id="inputArea" type="text" value={num} onChange={this.handleChange}/>
                <br />
                <input id="submitData" type="submit" value="Ввод"/>
            </form>
        </div>
    );
}
}

export default Handle
