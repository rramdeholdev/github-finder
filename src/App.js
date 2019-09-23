import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello From React</h1>
//     </div>
//   );
// }

// export default App;

class App extends Component {
  render () {
    return (
      <div className="App">
        < Navbar title= " gitHub Finder" icon= "fab fa-github"/>
        <div className="container">
          < Users />
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