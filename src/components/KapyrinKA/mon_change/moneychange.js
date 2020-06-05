import React from 'react';
import key from './super_duper_key';
import money from './moneywork';

async function checktype(data, type) {
  if (type === 'euro') {
    return data.rates.RUB;
  } if (type === 'dollar') {
    return (data.rates.RUB / data.rates.USD);
  }
  return '';
}

async function connect(type) {
  const ssilka = `http://data.fixer.io/api/latest?access_key=${key}&symbols=RUB,USD&format=1`;
  const data = await (await fetch(ssilka)).json();
  return checktype(data, type);
  /*
  ссылка генерируется на сайте,
  где надо зарегистрироваться и
  выбрать форму подписки.
  Пришлось делать таким образом тк сервис
  предоставляет данные отношения евро к другим валютам
  те нельзя посмотреть отношение
  рубля к доллару (сайт предоставляет бесплатный
  функционал в таком виде).
  В связи с этим мы смотрим отношение
  евро к рублю и делим на
  отношение евро к доллару.
  */
}

const MoneyController = () => (
  <div className="conv">
    <div className="conv-board">
      <div>
        <input id="rub" type="text" placeholder="Рубли" />
        <br />
        <input id="dol" type="text" placeholder="Доллары" disabled value="Доллар" />
        <input id="eur" type="text" placeholder="Евро" disabled value="Евро" />
      </div>
      <button
        type="button"
        className="convert"
        onClick={() => {
          connect('dollar').then((result) => { document.getElementById('dol').value = money(document.getElementById('rub').value, 'dol', result); });
          connect('euro').then((result) => { document.getElementById('eur').value = money(document.getElementById('rub').value, 'eur', result); });
        }}
      >
        Конвертировать
      </button>
    </div>
  </div>
);

export default MoneyController;
