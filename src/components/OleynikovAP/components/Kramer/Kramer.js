import React, { Component } from 'react'
import './Kramer.css'
import Matrix from '../Matrix/Matrix'
import slauResult from './slauResult'

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

    createNewMatrix = () => {
        const { matrix } = this.state
        const newMatrix = {
            matr: [...matrix.matr.map(el => {
                return [
                    ...el.slice()
                ]
            })],
            res: matrix.res.slice(),
            type: matrix.type
        }
        return newMatrix
    }

    onChangeInputHandler = (event) => {
        const matrix = this.createNewMatrix()
        matrix.matr[event.target.name[0] - 1][event.target.name[1] - 1] = event.target.value
        this.setState({
            matrix,
            isResult: false
        })
    }

    onPlusHandler = () => {
        const matrix = this.createNewMatrix()
        for (let i = 0; i < matrix.type; i++) {
            matrix.matr[i].push(0)
        }
        matrix.type++
        const arr = []
        for (let i = 0; i < matrix.type; i++) {
            arr.push(0)
        }
        matrix.matr.push(arr)
        matrix.res.push(0)
        this.setState({
            matrix,
            isResult: false
        })
    }

    onMinusHandler = () => {
        const matrix = this.createNewMatrix()
        for (let i = 0; i < matrix.type; i++) {
            matrix.matr[i].pop()
        }
        matrix.type--
        matrix.matr.pop()
        matrix.res.pop()
        this.setState({
            matrix,
            isResult: false
        })
    }

    onChageResHandler = (event) => {
        const matrix = this.createNewMatrix()
        matrix.res[event.target.name] = event.target.value
        this.setState({
            matrix,
            isResult: false
        })
    }

    validate() {
        const matrix = this.createNewMatrix()
        for (let i = 0; i < matrix.type; i++) {
            for (let j = 0; j < matrix.type; j++) {
                matrix.matr[i][j] = Number.parseFloat(matrix.matr[i][j])
            }
        }
        this.setState({
            matrix
        })
    }

    onResultHandler = () => {
        this.validate()
        const matrix = this.createNewMatrix()
        for (let i = 0; i < matrix.type; i++) {
            matrix.matr[i].push(Number.parseFloat(matrix.res[i]))
        }
        let result = Array(matrix.type)
        try {
            result = slauResult(matrix.matr)
        } catch (e) {
            this.setState({
                errorMessage: e.message,
                isResult: true,
                determinant: "-",
                result: []
            })
            return
        }
        if (result.roots) {
            this.setState({
                result: result.roots,
                isResult: true,
                errorMessage: "",
                determinant: result.det
            })
        } else {
            this.setState({
                errorMessage: "Данная система уравнений не имеет решений!",
                isResult: true,
                determinant: "-",
                result: []
            })
        }
    }

    renderResult() {
        return this.state.result.map((res, index) => {
            return (
                <React.Fragment key={index}>
                    <br />
                    <span key={index}>
                        {index !== this.state.result.length - 1 ? `a${index + 1} = ${res}, ` : `a${index + 1} = ${res}`}
                    </span>
                </React.Fragment>
            )
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
                <button className="resultt" onClick={this.onResultHandler}>Решить</button>
                {
                    this.state.matrix.type !== 1 && this.state.isResult
                        ? <p className="det">
                            <span>Det = {this.state.determinant}
                            </span>
                        </p>
                        : null
                }
                {
                    this.state.isResult
                        ? <p className="res">
                            Ответ: {!!!this.state.errorMessage
                                ? this.renderResult()
                                : this.state.errorMessage} </p>
                        : null
                }
            </div>
        )
    }
}

export default Kramer