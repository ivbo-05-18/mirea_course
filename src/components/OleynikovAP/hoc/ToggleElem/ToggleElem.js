import React, { Component } from 'react'

class ToggleElem extends Component {
    state = {
        isShown: false,
        buttonLabel: "Показать"
    }

    toggleHandler = () => {
        let { isShown, buttonLabel } = this.state
        buttonLabel = isShown ? "Показать" : "Скрыть"
        isShown = !isShown
        this.setState({
            isShown, buttonLabel
        })
    }

    render() {
        return (
            <div style={{marginBottom: "50px"}}>
                <button onClick={this.toggleHandler}> {this.state.buttonLabel} {this.props.componentName
                    ? " " + this.props.componentName
                    : null
                } </button>
                <main>
                    {
                        this.state.isShown
                            ? this.props.children
                            : null
                    }
                </main>
            </div>
        )
    }
}

export default ToggleElem