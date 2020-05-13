import React from 'react';
import GaussianElimResult from './GaussianElimResult';
import './GaussianElimElement.css';

class GaussianElimElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matrix: [[2,3,1,17], [4,9,7,63], [-3,7,-4,-1]]
        };
    }

    updateMatrix = (e, i, index) => {
        let updatedMatrix = this.state.matrix;

        if (parseFloat(e.target.value) || parseFloat(e.target.value) === 0) {   
            updatedMatrix[i][index] = parseFloat(e.target.value);    
        }
        else { // Для удобства ввода оставить пользователю возможность вводить строки, которые не пройдут parse в float (функция GaussianElim при таких входных данных вернёт исключение)
            updatedMatrix[i][index] = e.target.value;
        }

        this.setState({
            matrix: updatedMatrix 
        })
    }

    render() {
        return (
            <div class="perederiyva_gauss_input">
                <table>
                    {this.state.matrix.map((item, i) => (
                        <tr>
                            <td>
                                <input type="number" step="any" value={item[0]} onChange={(e) => this.updateMatrix(e, i, 0)} />x +
                            </td>
                            <td>
                                <input type="number" step="any" value={item[1]} onChange={(e) => this.updateMatrix(e, i, 1)} />y +
                            </td>
                            <td>
                                <input type="number" step="any" value={item[2]} onChange={(e) => this.updateMatrix(e, i, 2)} />z =
                            </td>
                            <td>
                                <input type="number" step="any" value={item[3]} onChange={(e) => this.updateMatrix(e, i, 3)} />
                            </td>
                        </tr>
                    ))}
                </table>   
                <GaussianElimResult input={this.state.matrix} />
            </div>
        )
    }
}

export default GaussianElimElement;
