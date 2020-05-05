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
        console.log(this.state.matrix); // DEBUG
    }

    render() {
        return (
            <div>
                <table>
                    {this.state.matrix.map((item, i) => (
                        <tr>
                            <td>
                                <input type="number" value={item[0]} onChange={(e) => this.updateMatrix(e, i, 0)} /> +
                            </td>
                            <td>
                                <input type="number" value={item[1]} onChange={(e) => this.updateMatrix(e, i, 1)} /> +
                            </td>
                            <td>
                                <input type="number" value={item[2]} onChange={(e) => this.updateMatrix(e, i, 2)} /> =
                            </td>
                            <td>
                                <input type="number" value={item[3]} onChange={(e) => this.updateMatrix(e, i, 3)} />
                            </td>
                        </tr>
                    ))}
                </table>
                <GaussianElimResult />
            </div>
        )
    }
}

export default GaussianElimElement;