import React from 'react'
import Input from '../Input/Input'

const MATRIX_STYLE = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
}

const renderMatrix = (matrix, onChageInput) => {
    return <table>
        <tbody>
            {matrix.matr.map((row, i) => {
                return (
                    <tr key={i}>
                        {row.map((cell, j) => {
                            const k = (i+1) + "" + (j+1)
                            return <td key={j}><Input
                                key={k}
                                value={cell}
                                onChangeInput={onChageInput}
                                name={k}
                                span={j !== matrix.matr.length - 1 ? "a" + k : "a" + k + " = "}
                            /></td>;
                        })}
                    </tr>
                );
            })}
        </tbody>
    </table>
}

const Matrix = props => {
    return (
        <div style={MATRIX_STYLE}>
            {renderMatrix(props.matrix, props.onChangeInput)}
            <table>
                <tbody>
                    {props.matrix.res.map((res, index) => {
                        return <tr key={index}><td key={index}><Input
                            key={index}
                            value={res}
                            onChangeInput={props.onChageResHandler}
                            name={index}
                        /></td></tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Matrix