import React, { Component } from 'react'

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        }
    }
    handleChange = (event) => {
        this.setState(
            { content: event.target.value }
        )
    }
    handleSubmit = (event)=>{
        event.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            content: ""
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">Add New Todo: </label>
                    <input value={this.state.content} type="text" onChange={this.handleChange} />
                </form>
            </div>
        );
    }
}

export default AddTodo;