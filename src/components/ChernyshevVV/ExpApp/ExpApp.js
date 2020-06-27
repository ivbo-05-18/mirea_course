import React from 'react';

const CONTENT = {
  display: 'grid',
  gridTemplateAreas: '"num pow eql answer" "info info info info" "numInfo numInfo powInfo powInfo" "inNum inNum inPow inPow"',
  gridTemplateRows: '50px 50px 40px 20px 20px',
  gridTemplateColumns: 'minmax(auto,192) auto auto auto',
  width: '500px',
  margin: 'auto',
  padding: '10px',
  border: 'gray solid 2px',
  color: 'black',
};

const NUM = {
  gridArea: 'num',
  textAlign: 'end',
  fontSize: '40px',
  maxWidth: '192px',
  marginTop: '9px',
};

const POW = {
  gridArea: 'pow',
  fontSize: '20px',
  textAlign: 'initial',
  marginTop: '0px',
};

const EQL = {
  gridArea: 'eql',
  width: '30px',
  height: '40px',
  marginTop: '5px',
  background: 'none',
  fontSize: '19px',
  fontWeight: 'bold',
};

const ANSWER = {
  gridArea: 'answer',
  fontSize: '40px',
  marginTop: '9px',
  width: '100px',
};

const INFOGREEN = {
  gridArea: 'info',
  textAlign: 'center',
  fontSize: '20px',
  backgroundColor: 'green',
  marginTop: '20px',
  color: 'white',
  borderRadius: '5px',
  height: '23px',
};

const INFOYEL = {
  gridArea: 'info',
  textAlign: 'center',
  fontSize: '20px',
  backgroundColor: '#ff7100d1',
  height: '23px',
};

const INFORED = {
  gridArea: 'info',
  textAlign: 'center',
  fontSize: '20px',
  backgroundColor: 'red',
  height: '23px',
};

const INNUM = {
  gridArea: 'inNum',
  width: '140px',
  height: '20px',

};

const NUMINFO = {
  gridArea: 'numInfo',
  fontSize: '20px',
  fontWeight: 'bold',
  textAlign: 'initial',
};

const INPOW = {
  gridArea: 'inPow',
  width: '140px',
  height: '20px',
  marginLeft: 'auto',
};

const POWINFO = {
  gridArea: 'powInfo',
  textAlign: 'end',
  fontSize: '20px',
  fontWeight: 'bold',
};

class ExpApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      pow: 0,
      answ: null,
      info: 'Заполните поля',
      infoColor: 'info yel',
      flag1: false,
      flag2: false,
    };
    this.changePow = this.changePow.bind(this);
  }

    clickEvent = () => {
      const { flag1 } = this.state;
      const { flag2 } = this.state;
      const { num } = this.state;
      const { pow } = this.state;
      if (flag1 && flag2) {
        const res = num ** pow;
        this.setState({
          answ: res,
        });
      }
    }

    changeNum = (event) => {
      const { flag2 } = this.state;
      const num1 = event.target.value;

      if (!Number.isNaN(Number(num1)) && Number.isFinite(Number(num1)) && (num1 <= 99999999) && !(num1 === '')) {
        this.setState({
          num: num1,
          flag1: true,
        });
        if (flag2) {
          this.setState({
            info: 'OK!',
            infoColor: 'info green',
          });
        } else {
          this.setState({
            info: 'Введите степень',
            infoColor: 'info yel',
          });
        }
      } else if (num1 > 99999999) {
        this.setState({
          info: 'Число должно быть меньше 99999999',
          infoColor: 'info red',
          flag1: false,
        });
      } else {
        this.setState({
          info: 'Число введено не корректно',
          infoColor: 'info red',
          flag1: false,
        });
      }
    }

    changePow = (event) => {
      const { flag1 } = this.state;
      const num1 = event.target.value;

      if (!Number.isNaN(Number(num1)) && Number.isFinite(Number(num1)) && (num1 <= 99999999) && !(num1 === '')) {
        this.setState({
          pow: num1,
          flag2: true,
        });
        if (flag1) {
          this.setState({
            infoColor: 'info green',
            info: 'OK!',
          });
        } else {
          this.setState({
            infoColor: 'info yel',
            info: 'Введите число',
          });
        }
      } else if (num1 > 99999999) {
        this.setState({
          info: 'Степень должна быть меньше 99999999',
          infoColor: 'info red',
          flag2: false,
        });
      } else {
        this.setState({
          info: 'Степень введена не корректно',
          infoColor: 'info red',
          flag2: false,
        });
      }
    }

    render() {
      const { num } = this.state;
      const { pow } = this.state;
      const { info } = this.state;
      const { infoColor } = this.state;
      const { answ } = this.state;
      let COLOR;

      if (infoColor === 'info green') {
        COLOR = INFOGREEN;
      } else if (infoColor === 'info yel') {
        COLOR = INFOYEL;
      } else if (infoColor === 'info red') {
        COLOR = INFORED;
      }

      return (
        <div style={CONTENT}>
          <p style={NUM}>{num}</p>
          <p style={POW}>{pow}</p>
          <button type="button" style={EQL} onClick={this.clickEvent}>=</button>
          <p style={ANSWER}>{answ}</p>
          <p style={COLOR}>{info}</p>
          <p style={NUMINFO}>Число:</p>
          <input style={INNUM} onChange={this.changeNum} />
          <p style={POWINFO}>Степень:</p>
          <input style={INPOW} onChange={this.changePow} />
        </div>
      );
    }
}
export default ExpApp;
