import React from 'react';
import styles from './money.module.css';

const money = require('./moneywork');

class MoneyController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dol: 'Доллары',
      eur: 'Евро',
    };
  }

  render() {
    const { dol } = this.state;
    const { eur } = this.state;
    return (
      <div className={styles.conv}>
        <div className={styles.conv}>
          <div>
            <input id="rub" type="text" placeholder="Рубли" />
            <br />
            <input id="dol" type="text" placeholder="Доллары" disabled value={dol} />
            <input id="eur" type="text" placeholder="Евро" disabled value={eur} />
          </div>
          <button type="submit" className={styles.convert} onClick={() => this.setState({ dol: money(document.getElementById('rub').value, 'dol'), eur: money(document.getElementById('rub').value, 'eur') })}>Конвертировать</button>
        </div>
      </div>
    );
  }
}

export default MoneyController;
