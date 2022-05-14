import React, { Component } from 'react'

class stateExample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "WELCOME VISITOR"
        }
    }
    changeMessage = () => {
        this.setState({
            message: "Thank you for subscribing!"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => { this.changeMessage() }}>Subscribe</button>
            </div>
        )
    }
}

export default stateExample