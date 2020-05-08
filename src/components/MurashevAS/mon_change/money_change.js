import React from 'react';
import './index.css';

class Money_Controller extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        dol: 'Доллары'
    };
  }
  convert(){
    if(!isNaN(document.getElementById('rub').value) && document.getElementById('rub').value>=0){
      this.setState({dol: document.getElementById('rub').value/80+"$"})
    }else{
      alert("Ошибка ввода! Повторите ввод числа.")
      this.setState({dol: ""})
    }
  }
  render() {
    return (
      <div className="conv">
        <div className="conv-board">
          <div>
              <input id='rub' type="text" placeholder="Рубли" />
              <input id="dol" type="text" placeholder="Доллары" disabled value={this.state.dol}/>          
            </div>
            <button className="convert" onClick={()=> this.convert()}>Конвертировать</button>  
          </div>
      </div>
    );
  }
}
export default Money_Controller;