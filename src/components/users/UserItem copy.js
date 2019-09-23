import React, { Component } from 'react'

class UserItem extends Component {
    render() {
        return (
            <div className = "card text-center" >
                <img 
                    src={this.props.avatar_url} 
                    alt=""
                    className="round-img"
                    style = {{width:"60px"}}
                />
                <h3>{this.props.login}</h3>
                <h3>{this.props.id}</h3>
                <div>
                    <a href={this.props.html_url} className="btn btn-dark btn-sm my-1" target="_blank">
                   More
                    </a>
                </div>
            </div>

        )
    }
}

export default UserItem
