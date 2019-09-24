import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/gitHub/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem
            key={user.login}
            id={user.userid}
            avatar_url={user.avatar_url}
            html_url={user.html_url}
            login={user.login}
          />
        ))}
      </div>
    );
  }
};

const userStyle = {
  dipslay: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
