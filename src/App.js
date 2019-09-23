import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import './App.css';
import axios from 'axios';

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
    loading: true
  }
  async componentDidMount () {
    this.setState({
      loading: true,
    })
    // console.log("1234")
    const res = await
    axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({
      loading: false,
      users: res.data
    })
    // console.log(res.data)
  }
  render () {
    return (
      <div className="App">
        < Navbar title= " gitHub Finder" icon= "fab fa-github"/>
        <Search/>
        <div className="container">
          < Users loading = {this.state.loading} users={this.state.users}/>
        </div>
      </div>
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