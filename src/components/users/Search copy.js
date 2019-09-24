import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: " "
  };
  static propTyes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired
  };
  onSubmit = event => {
    event.preventDefault();
    if (this.state.text === " ") {
      this.props.setAlert("Please Enter Something", "light");
    } else {
      // console.log(this.state.text)
      this.props.searchUsers(this.state.text);
      this.setState({
        text: " "
      });
    }
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            value={this.state.text}
            placeholder='Search Users...'
            onChange={this.onChange}
          />
          <input type='submit' className='btn btn-dark btn-block' />
        </form>
        {this.props.showClear ? (
          <button
            className='btn btn-light btn-block'
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        ) : null}
      </div>
    );
  }
}

export default Search;
