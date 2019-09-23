import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: " "

    }
    onSubmit = (event) => {
        event.preventDefault();
        console.log("Hello")
    }
    onChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <form className="form">
                    <input type="text" name="text" value={this.state.text} placeholder= "Search Users..." onChange={this.onChange}/>
                    <input type="submit" className="btn btn-dark btn-block" onSubmit={this.onSubmit}/>
                </form>
            </div>
        )
    }
}

export default Search
