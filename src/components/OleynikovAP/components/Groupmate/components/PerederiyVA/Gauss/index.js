import React from 'react';
import GaussianElimResult from './GaussianElimResult';
import './index.css';

class GaussianElimElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matrix: [[2, 3, 1, 17], [4, 9, 7, 63], [-3, 7, -4, -1]]
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
            <div className="gauss_input">
                <table>
                    {this.state.matrix.map((item, i) => (
                        <tbody key={i-2}>
                            <tr key={i - 1}>
                                <td key={i}>
                                    <input type="number" step="any" value={item[0]} onChange={(e) => this.updateMatrix(e, i, 0)} />x +
                            </td>
                                <td key={i + 1}>
                                    <input type="number" step="any" value={item[1]} onChange={(e) => this.updateMatrix(e, i, 1)} />y +
                            </td>
                                <td key={i + 2}>
                                    <input type="number" step="any" value={item[2]} onChange={(e) => this.updateMatrix(e, i, 2)} />z =
                            </td>
                                <td key={i + 3}>
                                    <input type="number" step="any" value={item[3]} onChange={(e) => this.updateMatrix(e, i, 3)} />
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
                <GaussianElimResult input={this.state.matrix} />
            </div>
        )
    }
}

export default GaussianElimElement;
