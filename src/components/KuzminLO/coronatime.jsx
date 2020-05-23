import React from 'react';
import {STYLECOMP, STYLENUM, STYLESTAYHOME, STYLETEXT} from './styles'
class CoronaTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rendertime: 0,
            renderdata: {},
        };
    }

    componentDidMount() {
        this.getFetch();
    }

    async getFetch() {
        const url = 'https://api.thevirustracker.com/free-api?countryTotal=RU';
        const response = await fetch(url);
        const data = await response.json();
        this.setState((prevState) => ({
            rendertime: new Date(),
            renderdata: data,
        }));
        return data;
    }

    handleRefresh() {
        this.getFetch();
    }
    render() {
        if (typeof this.state.renderdata.countrydata == 'undefined') return (<center><span>Загрузка результатов...</span></center>);
        else {
            const data = this.state.renderdata.countrydata[0];
            return (
                <div style={STYLECOMP}>
                    <center><h style={STYLESTAYHOME}>#ОставайтесьДома</h></center>
                    <p style={STYLETEXT}>Статистика по России</p>
                    <p style={STYLETEXT}>Всего случаев <span style={STYLENUM}>{data.total_cases}</span></p>
                    <p style={STYLETEXT}>За прошедшие сутки прибавилось <span style={STYLENUM}>{data.total_new_cases_today}</span></p>
                    <p style={STYLETEXT}>Выздоровело <span style={STYLENUM}>{data.total_recovered}</span></p>
                    <p style={STYLETEXT}>Активных случаев <span style={STYLENUM}>{data.total_active_cases}</span></p>
                    <button type="button" onClick={() => this.handleRefresh()}>Обновить информацию</button>
                </div>
            );
        }
    }
}
export default CoronaTime;