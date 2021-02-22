import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  // const onInputChange = (e) => {
  //   setTerm(e.target.value);
  // };

  const onSubmit = (e) => {
    //the browser not to autom. submit the form
    e.preventDefault();
    onFormSubmit(term);
  };
  return (
    <div className='search-bar ui segment'>
      <form onSubmit={onSubmit} className='ui form'>
        <div className='field'>
          <label>Youtube video search</label>
          <input
            type='text'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
export default SearchBar; 
