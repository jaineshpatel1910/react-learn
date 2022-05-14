import React, { Component } from 'react'

class form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            comments: ""
        }
    }
    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    handleCommentChange = (e) => {
        this.setState({
            comments: e.target.value
        })
    }
    handleSubmit = (e) => {
        alert(`${this.state.username} ${this.state.comments} `)
        e.preventDefault()
    }
    render() {
        const { username, comments } = this.state
        return (
            <div>
                <h1>Form</h1>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={this.handleUsernameChange}
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea
                        value={comments}
                        onChange={this.handleCommentChange}
                    />
                </div>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default form