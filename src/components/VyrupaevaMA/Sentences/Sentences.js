import React, {Component} from 'react';
import './Sentences.css';

class Sentences extends Component{
  constructor(props) {
    super(props);
    this.state = {shortest: 'пока не определено', longest: 'пока не определено'}
    this.change = this.change.bind(this);
    this.clear = this.clear.bind(this);
}

change() {
    let txArea = document.getElementById("mainText");
    let text = txArea.value;
    let sentAll = text.split(/[.!?]/);
    let long = sentAll[0];
    let short = sentAll[0];
    for (let i = 1; i < (sentAll.length - 1); i++) {
        let sentence = sentAll[i];
        if (sentence.length < short.length) {
            short = sentence; }
        else if(sentence.length > long.length) {
        long = sentence; }
        }
    this.setState({longest: long, shortest: short});
}

clear(){
    document.getElementById("mainText").value = "";
    document.getElementById("mainText").focus();
    this.setState({shortest: 'пока не определено', longest: 'пока не определено'});
}

render() {
    return <div>
        <textarea onChange={this.change} id="mainText" name="mainText" cols="40" rows="6" placeholder="Введите свой текст..." autoFocus></textarea>
        <div>
            <button id="clear" onClick={this.clear} >Очистить</button>
        </div>
        <p id="shortest">Самое короткое предложение: {this.state.shortest}</p>
        <p id="longest">Самое длинное предложение: {this.state.longest}</p>
    </div>;
  }
}

export default Sentences;