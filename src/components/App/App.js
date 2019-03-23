import React, { Component } from 'react';
import { getProducts } from '../../utils/api';

class App extends Component {
  state = {
    listings: {},
  }

  componentDidMount() {
    getProducts()
      .then(data => this.setState({
        listings: data,
      }));
  }


  render() {
    const { listings } = this.state;

    return (
      (listings.length && <main data-test="product-listings">Listing page {listings.length}</main>)
      || <div data-test="app-loader">Loading...</div>
    );
  }
}

export default App;
