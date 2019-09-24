import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";
import GithubContext from "../../context/gitHub/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, loading, getUser, getUserRepos, repos } = githubContext;
  //   console.log(match.params.login);
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    login,
    company,
    blog,
    avatar_url,
    location,
    bio,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;
  // console.log(repos);
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back To Search
        </Link>
        Hireable: {""}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              alt=''
              src={avatar_url}
              className='round-img'
              style={{
                width: "150px"
              }}
            />
            <h1>{name}</h1>
            <p>{location}</p>
          </div>
          <div>
            {bio ? (
              <Fragment>
                <h1>Bio</h1>
                {bio}
              </Fragment>
            ) : null}
            <div>
              <a href={html_url} className='btn btn-dark my1'>
                Visit GitHub Profile
              </a>
            </div>
            <ul>
              <li>
                {login ? (
                  <Fragment>
                    <strong>Username: </strong>
                    {login}
                  </Fragment>
                ) : null}
              </li>
              <li>
                {company ? (
                  <Fragment>
                    <strong>Company: </strong>
                    {company}
                  </Fragment>
                ) : null}
              </li>
              <li>
                {blog ? (
                  <Fragment>
                    <strong>Blog Site: </strong>
                    {blog}
                  </Fragment>
                ) : null}
              </li>
              <li>
                {login ? (
                  <Fragment>
                    <strong>Username: </strong>
                    {login}
                  </Fragment>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-success'>Following: {following}</div>
          <div className='badge badge-caution'>
            Public Repos: {public_repos}
          </div>
          <div className='badge badge-dark'>Public Gists: {public_gists}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
};

export default User;
