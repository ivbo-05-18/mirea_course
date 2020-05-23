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
    if(!response.ok)
    {
        this.setState(() => ({
            badresp: true,
          }));
          return 0;
    } 
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
    if (badresp) { return (<center><span>Ошибка запроса</span></center>); }
    if (typeof renderdata.countrydata === 'undefined') { return (<center><span>Загрузка результатов...</span></center>); }
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
