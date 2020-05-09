import React, { Component } from 'react'
import './Kramer.css'
import Matrix from '../Matrix/Matrix'

class Kramer extends Component {
    state = {
        matrix: {
            matr: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
            res: [0, 0, 0],
            type: 3
        },
        result: [],
        errorMessage: "",
        determinant: 0,
        isResult: false
    }

    onChangeInputHandler = (event) => {
        const { matrix } = this.state
        matrix.matr[event.target.name[0] - 1][event.target.name[1] - 1] = event.target.value
        this.setState({
            matrix,
            isResult: false
        })
    }

    onPlusHandler = () => {
        let { matrix } = this.state
        const newMatrix = matrix.matr.slice()
        for (let i = 0; i < matrix.type; i++) {
            newMatrix[i].push(0)
        }
        matrix.type++
        const arr = []
        for (let i = 0; i < matrix.type; i++) {
            arr.push(0)
        }
        newMatrix.push(arr)
        matrix.matr = newMatrix
        matrix.res.push(0)
        this.setState({
            matrix,
            isResult: false
        })
    }

    onMinusHandler = () => {
        let { matrix } = this.state
        const newMatrix = matrix.matr.slice()
        for (let i = 0; i < matrix.type; i++) {
            newMatrix[i].pop()
        }
        matrix.type--
        newMatrix.pop()
        matrix.matr = newMatrix
        matrix.res.pop()
        this.setState({
            matrix,
            isResult: false
        })
    }

    onChageResHandler = (event) => {
        const { matrix } = this.state
        matrix.res[event.target.name] = event.target.value
        this.setState({
            matrix,
            isResult: false
        })
    }

    compDeterm = (matrix) => {
        let det = 0
        if (matrix.length === 2)
            return (matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0])
        for (let j = 0; j < matrix.length; j++) {
            let minor = matrix.slice(1)
            for (let k = 1; k < matrix.length; k++)
                minor[k - 1] = matrix[k].slice(0, j).concat(matrix[k].slice(j + 1))
            det += Math.pow(-1, j) * matrix[0][j] * this.compDeterm(minor)
        }
        return det
    }

    formMatrix = (matrix, type) => {
        let arr = []
        for (let j = 0; j < matrix.length; j++) {
            arr[j] = matrix[j].slice(0, matrix[j].length - 1)
            if (type) arr[j][type - 1] = matrix[j][matrix[j].length - 1]
        }
        return arr
    }

    validate() {
        const { matrix } = this.state
        for (let i = 0; i < matrix.type; i++) {
            for (let j = 0; j < matrix.type; j++) {
                if (isNaN(matrix.matr[i][j])) {
                    return false
                }
            }
        }
        for (let i = 0; i < matrix.type; i++) {
            if (isNaN(matrix.res[i])) {
                return false
            }
        }
        return true
    }

    onResultHandler() {
        if (!this.validate()) {
            this.setState({
                errorMessage: "Некорректно заполненное поле",
                isResult: true,
                determinant: "-",
                result: []
            })
            return
        }
        const { matrix } = this.state
        let newMatrix = new Array(matrix.type)
        for (let i = 0; i < matrix.type; i++) {
            newMatrix[i] = matrix.matr[i].slice()
        }
        for (let i = 0; i < matrix.type; i++) {
            newMatrix[i].push(Number.parseFloat(matrix.res[i]))
        }
        let roots = new Array(matrix.type)
        if (matrix.type === 1) {
            if (matrix.matr[0][0] !== 0) {
                roots[0] = matrix.res[0] / matrix.matr[0][0]
                this.setState({
                    isResult: true,
                    result: roots,
                })
                return
            } else {
                this.setState({
                    errorMessage: "Данная система уравнений не имеет решений!",
                    isResult: true,
                    determinant: "-",
                    result: []
                })
                return
            }
        }
        let d0 = this.compDeterm(this.formMatrix(newMatrix, 0))
        if (!d0) {
            this.setState({
                errorMessage: "Данная система уравнений не имеет решений!",
                isResult: true,
                determinant: "-",
                result: []
            })
            return
        }
        for (let j = 0; j < matrix.type; j++) {
            roots[j] = this.compDeterm(this.formMatrix(newMatrix, j + 1)) / d0
        }
            
        this.setState({
            result: roots,
            isResult: true,
            errorMessage: "",
            determinant: d0
        })
    }

    render() {
        return (
            <div className="Kramer">
                <Matrix
                    matrix={this.state.matrix}
                    onChangeInput={event => this.onChangeInputHandler(event)}
                    onChageResHandler={event => this.onChageResHandler(event)}
                />
                <button className="countMinus" onClick={this.onMinusHandler}>-</button>
                <button className="countPlus" onClick={this.onPlusHandler}>+</button>
                <button className="resultt" onClick={() => this.onResultHandler()}>Решить</button>
                {
                    this.state.matrix.type !== 1 &&  this.state.isResult ? <p className="det"><span>Det = {this.state.determinant}</span></p> : null
                }
                {
                    this.state.isResult
                        ? <p className="res">
                            Ответ: {!!!this.state.errorMessage ? this.state.result.map((res, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <br />
                                    <span key={index}>
                                        {index !== this.state.result.length - 1 ? `a${index + 1} = ${res}, ` : `a${index + 1} = ${res}`}
                                    </span>
                                </React.Fragment>
                            )
                        }) : this.state.errorMessage} </p>
                        : null
                }
            </div>
        )
    }
}

export default Kramer