import React, { Component } from 'react';
import UserItem from "./UserItem";

export class Users extends Component {
    render() {
        return (
            <div style={userStyle}>
                {this.props.users.map((user)=>(
                    <UserItem 
                    key={user.userid} 
                    id={user.userid}
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
