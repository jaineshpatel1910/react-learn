import React, { Component } from 'react'

class userGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        // return this.state.isLoggedIn && <h1>Welcome Jay</h1>

        return (this.state.isLoggedIn ? (
            <h1>Welcome Jay</h1>
        ) : (
            <h1>Welcome Guest</h1>
        ))

        // if (this.state.isLoggedIn) {
        //     return <h1>Welcome Jay</h1>
        // } else {
        //     return <h1>Welcome Guest</h1>
        // }
    }
}

export default userGreeting