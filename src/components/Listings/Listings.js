import React from 'react';
import { array } from 'prop-types';

const Listings = ({ listings }) => (
  <section className="pb-section">
    <h1 className="section-title">Listings</h1>
    {
      listings.map((product, index) => (
        <div data-test="product-listing" key={index}>
          Product
        </div>
      ))
    }
  </section>
);

Listings.propTypes = {
  listings: array.isRequired,
};

export default Listings;