import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/gitHub/githubContext";

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);
  // state = {
  //   text: " "
  // };
  const [text, setText] = useState("");
  const onSubmit = event => {
    event.preventDefault();
    if (text === " ") {
      setAlert("Please Enter Something", "light");
    } else {
      // console.log(this.state.text)
      githubContext.searchUsers(text);
      setText("");
    }
  };
  const onChange = event => setText(event.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          value={text}
          placeholder='Search Users...'
          onChange={onChange}
        />
        <input type='submit' className='btn btn-dark btn-block' />
      </form>
      {githubContext.users.legth > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};
Search.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default Search;
