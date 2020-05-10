import React, { Component } from 'react'

class ToggleElem extends Component {
    state = {
        isShown: false,
        buttonLabel: "Показать"
    }

    toggleHandler = () => {
        const state = Object.assign({}, this.state)
        state.buttonLabel = state.isShown ? "Показать" : "Скрыть"
        state.isShown = !state.isShown
        this.setState(state)
    }

    hasComponentName = () => {
        if (this.props.componentName)
            return " " + this.props.componentName
    }

    renderButton = props => {
        return <button onClick={this.toggleHandler}> {this.state.buttonLabel} {this.hasComponentName()}</button>
    }

    renderChildren = () => {
        if (this.state.isShown)
            return this.props.children
    }

    render() {
        return (
            <div style={{ marginBottom: "50px" }}>
                { this.renderButton() }
                <main>
                    { this.renderChildren() }
                </main>
            </div>
        )
    }
}

export default ToggleElem