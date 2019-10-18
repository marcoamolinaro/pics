import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
    state = {images: []};

    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: 'Client-ID 53de0c5c1817c770f156302503f78a79b8951424a065aba7d0c9337a3bf103f4'
            },
            params: {query: term}
        });

        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop:'10px'}} >
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;