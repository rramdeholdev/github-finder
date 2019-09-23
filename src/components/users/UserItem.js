import React from 'react'


const UserItem = ({userid,login,avatar_url, html_url, key}) =>  {
    return (
        <div className = "card text-center" >
            <img 
                src={avatar_url} 
                alt=""
                className="round-img"
                style = {{width:"60px"}}
            />
            <h3>{login}</h3>
            <h3>{userid}</h3>
            <div>
                <a href={html_url} className="btn btn-dark btn-sm my-1">
                More
                </a>
            </div>
        </div>

    )
}

export default UserItem
