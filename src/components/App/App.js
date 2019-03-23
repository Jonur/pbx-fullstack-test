import React, { Component } from 'react';
import Listings from '../Listings';
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
      (listings.length && <Listings data-test="product-listings" listings={listings} />)
      || <div data-test="app-loader">Loading...</div>
    );
  }
}

export default App;
