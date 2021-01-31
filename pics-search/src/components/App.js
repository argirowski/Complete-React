import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

//functional component
// const App = () => {
//   return (
//     <div className="ui container" style={{ marginTop: "10px" }}>
//       <SearchBar />
//     </div>
//   );
// };

//class component
class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
    // console.log(response.data.results);
    //using promises
    // .then((response) => {
    //   console.log(response.data.results);
    //   // console.log(response.data.results[0].urls.regular);
    // });
    // console.log(term);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* Fround: {this.state.images.length} images. */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
