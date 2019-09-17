import React from "react";
import unlsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async term => {
        const response = await unlsplash.get('/search/photos/', {
            params: {
                query: term
            }
        });

        this.setState({images: response.data.results});
    };

render() {
    return (
        <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            Found {this.state.images.length} pics!
            <ImageList images={this.state.images}/>
        </div>
    );
}
}

export default App;
