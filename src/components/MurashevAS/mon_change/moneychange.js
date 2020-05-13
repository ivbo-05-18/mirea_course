import React from 'react';
import './money.css';
const money = require('./moneywork');

class Money_Controller extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        dol: 'Доллары',
        eur: 'Евро'
    };
  }
  render() {
    return (
      <div className="conv">
        <div className="conv-board">
          <div>
              <input id='rub' type="text" placeholder="Рубли" /><br/>
              <input id="dol" type="text" placeholder="Доллары" disabled value={this.state.dol}/><input id="eur" type="text" placeholder="Евро" disabled value={this.state.eur}/>               
            </div>
            <button className="convert" onClick={()=> this.setState({dol:money(document.getElementById('rub').value,'dol'), eur:money(document.getElementById('rub').value,'eur')})}>Конвертировать</button>  
          </div>
      </div>
    );
  }
}

export default Money_Controller;
