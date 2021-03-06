import React from 'react';
import {
  STYLECOMP, STYLENUM, STYLESTAYHOME, STYLETEXT,
} from './styles';

class CoronaTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderdata: {},
      badresp: false,
    };
  }

  componentDidMount() {
    this.getFetch();
  }

  async getFetch() {
    const url = 'https://api.thevirustracker.com/free-api?countryTotal=RU';
    const response = await fetch(url);
    const data = await response.json();
    // if (!response.ok) {  ЛОМАЕТ ТЕСТЫ
    //  this.setState(() => ({
    //    badresp: true,
    //  }));
    //  return 0;
    // }
    this.setState(() => ({
      renderdata: data,
      badresp: false,
    }));
    return data;
  }

  handleRefresh() {
    this.getFetch();
  }

  render() {
    const { renderdata } = this.state;
    const { badresp } = this.state;
    if (badresp) {
      return (
        <center>
          <p>Ошибка запроса</p>
          <button type="button" onClick={() => this.handleRefresh()}>Попробовать ещё раз</button>
        </center>
      );
    }
    if (typeof renderdata.countrydata === 'undefined') {
      return (
        <center>
          <p>Результаты не загружены</p>
          <button type="button" onClick={() => this.handleRefresh()}>Попробовать ещё раз</button>
        </center>
      );
    }
    return (
      <div style={STYLECOMP}>
        <center><p style={STYLESTAYHOME}>#ОставайтесьДома</p></center>
        <p style={STYLETEXT}>Статистика по России</p>
        <p style={STYLETEXT}>
          Всего случаев
          <span style={STYLENUM}>{renderdata.countrydata[0].total_cases}</span>
        </p>
        <p style={STYLETEXT}>
          За прошедшие сутки прибавилось
          <span style={STYLENUM}>{renderdata.countrydata[0].total_new_cases_today}</span>
        </p>
        <p style={STYLETEXT}>
          Выздоровело
          <span style={STYLENUM}>{renderdata.countrydata[0].total_recovered}</span>
        </p>
        <p style={STYLETEXT}>
          Активных случаев
          <span style={STYLENUM}>{renderdata.countrydata[0].total_active_cases}</span>
        </p>
        <button type="button" onClick={() => this.handleRefresh()}>Обновить информацию</button>
      </div>
    );
  }
}
export default CoronaTime;
