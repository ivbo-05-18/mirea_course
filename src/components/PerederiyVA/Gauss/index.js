import React from 'react';
import GaussianElimResult from './GaussianElimResult';
import './index.css';

class GaussianElimElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matrix: [[1,1,1,3], [1,1,1,3], [1,1,1,3]]
        };
    }

    updateMatrix = (e, i, index) => {
        let updatedMatrix = this.state.matrix;
        updatedMatrix[i][index] = e.target.value;
        this.setState({
            matrix: updatedMatrix 
        })
    }

    render() {
        return (
            <div class="gauss_input">
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
