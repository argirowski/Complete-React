import React from "react";

class SearchBar extends React.Component {
  //controlled element
  state = { term: "" };
  //uncontrolled element
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }

  onFormSubmit = (e) => {
    //prevents the form to submit automatically
    e.preventDefault();
    this.props.onSubmit(this.state.term);
    // console.log(this.state.term);
  };
  //   onFormSubmit(e) {
  //     //prevents the form to submit automatically
  //     e.preventDefault();
  //     console.log(this.state.term);
  //   }

  render() {
    return (
      <div className="ui segment">
        {/* <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form"> */}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* alternative event handler syntax */}
            {/* <input type="text" onChange={(e) => console.log(e.target.value)} /> */}
            {/* <input type="text" onChange={this.onInputChange} /> */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
