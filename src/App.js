import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    fetch('/api/products')
      .then((res) => res.json())
      .then(data => this.setState({
        listings: data,
      }));
  }


  render() {
    return (<main data-test="product-listings">Listing page</main>);
  }
}

export default App;
