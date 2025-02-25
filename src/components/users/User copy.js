import React, { Component, Fragment } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }
  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
  };
  render() {
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
    } = this.props.user;

    const { loading, repos } = this.props;
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
  }
}

export default User;
