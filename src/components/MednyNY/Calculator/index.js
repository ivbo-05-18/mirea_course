import React from 'react';
import {render} from 'react-dom';

import Display from './components/Display';
import Key from './components/Key';
import styles from './style.module.css';

const CalculatorOperations = {
    '/': (storedValue, newValue) => newValue === 0 ? 'division by zero' : parseFloat(storedValue / newValue),
    '*': (storedValue, newValue) => newValue * storedValue,
    '+': (storedValue, newValue) => newValue + storedValue,
    '-': (storedValue, newValue) => storedValue - newValue,
    '%': (storedValue, newValue) => (newValue / 100),
    '=': (storedValue, newValue) => newValue
}

class Calculator extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        value: null,
        operation: null,
        operationInProgress: false,
        displayValue: '0',
        clearText: 'AC'
    }
  }
  
  clearDisplay() {
      const { clearText, displayValue, operation, operationInProgress } = this.state
      
      if(operationInProgress) {
        this.setState({
              displayValue: operation == '=' ? '0' : displayValue,
              operation: null,
              value: null,
              operationInProgress: false,
              clearText: 'AC'
        })
      } else {
      
          if(clearText == 'C') {
              this.setState({
                  displayValue: '0',
                  clearText: 'AC'
              })
          } else {
              this.setState({
                value: null,
                operation: null,
                operationInProgress: false,
                displayValue: '0',
                clearText: 'AC'
              })
          }
      }
  }

  negateValue() {
    const { displayValue } = this.state

    this.setState({ displayValue: (parseFloat(displayValue) * -1).toString() })
  }
    
  inputDigit(digit) {
      const { displayValue, operationInProgress } = this.state
      
      if(operationInProgress) {
        
        this.setState({
            displayValue: digit.toString(),
            operationInProgress: false,
        })
        
      } else {
          
        this.setState({
            displayValue: displayValue === '0' ? digit.toString() : (displayValue + digit.toString())
        })
      }
      
      this.setState({ clearText: 'C' })
  }
    
  inputDecimalPoint() {
      const { displayValue, operationInProgress } = this.state
      
      if(operationInProgress) {
          this.setState({
              displayValue: '0.',
              operationInProgress: false
          })
          
      } else {
        
        this.setState({ displayValue: /\./.test(displayValue) ? displayValue : displayValue + '.' })
      }
      
      this.setState({ clearText: 'C' })
  }
     
  doOperation(nextOperation) {
      const { value, displayValue, operation } = this.state
      const inputValue = parseFloat( displayValue );
      
      if(nextOperation == "%") {
          
          this.setState({ 
              value: null,
              displayValue: CalculatorOperations[nextOperation](value, inputValue) 
          })
        
      } else {
      
          if( value == null ) {
            this.setState({ value: inputValue })
          } else {
            const newValue = CalculatorOperations[operation](value, inputValue)

            this.setState({
                value: newValue,
                displayValue: newValue.toString()
            })
          }
      }
      
      this.setState({
          operationInProgress: true,
          operation: nextOperation
      })
  }
    
  keyPressedDown = (e) => {
    let { key } = e
    
    if (key === 'Enter') {
      key = '='
    }
    
    if ((/\d/).test(key)) {
      e.preventDefault()
      this.inputDigit(parseInt(key, 10))
    } else if (key in CalculatorOperations) {
      e.preventDefault()
      this.doOperation(key)
    } else if (key === '.') {
      e.preventDefault()
      this.inputDecimalPoint()
    //} else if (key === 'Backspace') {
    //  e.preventDefault()
    //  this.clearLastDigit()
    //} else if (key === 'Clear') {
    //  e.preventDefault()
      
    //  if (this.state.displayValue !== '0') {
    //    this.clearDisplay()
    //  } else {
    //    this.clearAll()
    //  }
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyPressedDown)
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyPressedDown)
  }

    
  render () {
    
    const { displayValue, clearText, operation, operationInProgress } = this.state
    return (
        <div className={styles.calculator}>
            <Display value={displayValue}/>
            <div className={styles.keypad}>
                <Key className={styles.keyFunction} onClick={() => this.clearDisplay()}>{clearText}</Key>
                <Key className={styles.keyFunction} onClick={() => this.negateValue()}>+/-</Key>
                <Key className={styles.keyFunction} onClick={() => this.doOperation('%')}>%</Key>
                <Key className={`${styles.keyOperation} ${operation == '/' ? styles.keyOpActive : '' }`} onClick={() => this.doOperation('/')}>&divide;</Key>
                
                <Key className={styles.keyChild} onClick={() => this.inputDigit(7)}>7</Key>
                <Key className={styles.keyChild} onClick={() => this.inputDigit(8)}>8</Key>
                <Key className={styles.keyChild} onClick={() => this.inputDigit(9)}>9</Key>
                <Key className={`${styles.keyOperation} ${operation == '*' ? styles.keyOpActive : '' }`} onClick={() => this.doOperation('*')}>&times;</Key>
                
                <Key className={styles.keyChild} onClick={() => this.inputDigit(4)}>4</Key>
                <Key className={styles.keyChild} onClick={() => this.inputDigit(5)}>5</Key>
                <Key className={styles.keyChild} onClick={() => this.inputDigit(6)}>6</Key>
                <Key className={`${styles.keyOperation} ${operation == '-' ? styles.keyOpActive : '' }`} onClick={() => this.doOperation('-')}>-</Key>
                
                <Key className={styles.keyChild} onClick={() => this.inputDigit(1)}>1</Key>
                <Key className={styles.keyChild} onClick={() => this.inputDigit(2)}>2</Key>
                <Key className={styles.keyChild} onClick={() => this.inputDigit(3)}>3</Key>
                <Key className={`${styles.keyOperation} ${operation == '+' ? styles.keyOpActive : '' }`} onClick={() => this.doOperation('+')}>+</Key>
                
                <Key className={styles.keyzero} onClick={() => this.inputDigit(0)}>0</Key>
                <Key className="key-point" onClick={() => this.inputDecimalPoint()}>.</Key>
                <Key className={`${styles.keyEqual} ${styles.keyOperation}`} onClick={() => this.doOperation("=")}>=</Key>
            </div>
        </div>
    )
  }
}

export default Calculator;
