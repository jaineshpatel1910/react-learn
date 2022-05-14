import React, { Component } from 'react'

class counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    handleCount = () => {
        this.setState(prevstate => ({
            count: prevstate.count + 1
        }))
    }
    render() {
        return (
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={() => { this.handleCount() }}>Increment</button>
            </div>
        )
    }
}

export default counter