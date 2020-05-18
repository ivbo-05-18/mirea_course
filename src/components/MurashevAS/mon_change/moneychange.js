import React from 'react';
import './money.css';
const money = require('./moneywork');

function connect(type){
  let data = new XMLHttpRequest();
  data.open("GET","http://data.fixer.io/api/latest?access_key=e4618a8de863cce8c097362d8635bc47&symbols=RUB,USD&format=1",false);
  //ссылка генерируется на сайте, где надо зарегистрироваться и выбрать форму подписки.
  data.send();
  if(type == 'euro'){
    return ((data.responseText.split('\n')[6].substring(10)).replace(',',''));
  }else if(type == 'dollar'){
    return (((data.responseText.split('\n')[6].substring(10)).replace(',',''))/(data.responseText.split('\n')[7].substring(10)));
  }
  /*
  Пришлось делать таким образом тк сервис предоставляет данные отношения евро к другим валютам
  те нельзя посмотреть отношение рубля к доллару (сайт предоставляет бесплатный функционал в таком виде).
  В связи с этим мы смотрим отношение евро к рублю и делим на отношение евро к доллару.
  */
}

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
            <button className="convert" onClick={()=> {
              this.setState({dol:money(document.getElementById('rub').value,'dol',connect('dollar')), eur:money(document.getElementById('rub').value,'eur',connect('euro'))});
              }}>Конвертировать</button>  
          </div>
      </div>
    );
  }
}

export default Money_Controller;
