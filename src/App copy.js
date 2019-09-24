import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import "./App.css";
import axios from "axios";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello From React</h1>
//     </div>
//   );
// }

// export default App;

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: true,
    alert: null,
    repos: []
  };
  async componentDidMount() {
    this.setState({
      loading: true
    });
    // console.log("1234")
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({
      loading: false,
      users: res.data
    });
    // console.log(res.data)
  }

  getUser = async username => {
    this.setState({
      loading: true
    });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({
      loading: false,
      user: res.data
    });
  };

  getUserRepos = async username => {
    this.setState({
      loading: true
    });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({
      loading: false,
      repos: res.data
    });
  };

  searchUsers = async text => {
    // console.log(text);
    this.setState({
      loading: true
    });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({
      loading: false,
      users: res.data.items
    });
  };
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    });
  };

  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg: msg,
        type: type
      }
    });
    setTimeout(() => {
      this.setState({
        alert: null
      });
    }, 5000);
  };

  render() {
    // console.log(this.state.repos);
    return (
      <Router>
        <div className='App'>
          <Navbar title=' gitHub Finder' icon='fab fa-github' />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={this.state.users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users
                      loading={this.state.loading}
                      users={this.state.users}
                    />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={props => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={this.state.user}
                    getUserRepos={this.getUserRepos}
                    repos={this.state.repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

// {
//   bar = () => "bar";
//   foo = () => "foo"
//   render () {
//     const name = "John Doe";
//     const foop = () => "Ryan";
//     const loading = false;
//     const showName = true;
//     return (
//       <div className="App">
//         <h1>Hello {name.toUpperCase()}</h1>
//         <h1>Hello {foop()}</h1>
//         {loading ? <h1>Hello there {this.bar()}</h1> : <h1>Hello {this.foo()}</h1>  }
//         {showName && name}
//       </div>
//     );
//   }
