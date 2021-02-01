import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  //initialize state object
  //callback from the onChange
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    //the browser not to autom. submit the form
    e.preventDefault();
    //to do: call callback from parent component
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Youtube video search</label>
            <input
              type="text"
              value={this.state.term}
              //the state can be updated inline
              // onChange={(e) => this.setState({ term: e.target.value })}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
