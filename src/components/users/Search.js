import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: " "

    }
    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.text)
    }
    onChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" value={this.state.text} placeholder= "Search Users..." onChange={this.onChange}/>
                    <input type="submit" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search
