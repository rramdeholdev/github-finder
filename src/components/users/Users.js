import React, { Component } from 'react';
import UserItem from "./UserItem";

export class Users extends Component {
    state = {
        users: [
            {
                id: "1",
                login: "rramdehol1",
                avatar_url: "https://github.com/images/error/octocat_happy.gif",
                html_url: "https://github.com/octocat"
            },
            {
                id: "2",
                login: "rramdehol2",
                avatar_url: "https://github.com/images/error/octocat_happy.gif",
                html_url: "https://github.com/octocat"
            },
            {
                id: "3",
                login: "rramdehol3",
                avatar_url: "https://github.com/images/error/octocat_happy.gif",
                html_url: "https://github.com/octocat"
            },
            {
                id: "4",
                login: "rramdehol4",
                avatar_url: "https://github.com/images/error/octocat_happy.gif",
                html_url: "https://github.com/octocat"
            },
        ]
    }
    render() {
        return (
            <div style={userStyle}>
                {this.state.users.map((user)=>(
                    <UserItem 
                    key={user.id} 
                    id={user.id}
                    avatar_url={user.avatar_url}
                    html_url={user.html_url}
                    login={user.login} 
                    >{user.login}/>
                    </UserItem>
                ))}
            </div>
        )
    }
}

const userStyle = {
    dipslay: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
} 

export default Users;
