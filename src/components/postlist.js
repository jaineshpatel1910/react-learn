import React, { Component } from 'react'
import axios from 'axios'

class postlist extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ""
        }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                console.log(response)
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: "Error in retreiving data" })
            })
    }
    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                <h1>Posts list</h1>
                {
                    posts.length ? posts.map(post => <div>{post.title}</div>) : null
                }
                {errorMsg ? (<div>{errorMsg}</div>) : null}
            </div>
        )
    }
}

export default postlist