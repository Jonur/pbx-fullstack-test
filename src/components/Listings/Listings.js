import React from 'react';
import { array } from 'prop-types';

const Listings = ({ listings }) => (
  <section className="pb-section">
    <h1 className="section-title">Listings</h1>
    {
      listings.map(({
        image: {
          path,
          alt,
        },
        productLabel,
        title,
        description,
        priceLabel,
        currency,
        price,
        ctaLink,
        cta,
      }, index) => {
        const formatPrice = (currency, price, decimal) => {
          const formattedPrice = `${currency}${price}`;
          const partInt = formattedPrice.substring(0, formattedPrice.length - 2);
          const partFraction = formattedPrice.substring(formattedPrice.length - 2);
          return `${partInt}${decimal}${partFraction}`;
        };

        return (
          <div data-test="product-listing" key={index}>
            <img className="product-cover" src={path} alt={alt} />
            {productLabel && <span className="product-label">{productLabel}</span>}
            <h2 className="product-title">{title}</h2>
            <p>{description}</p>
            <div className="price">
              <span>{priceLabel}</span>
              <span>{formatPrice(currency, price, '.')}</span>
            </div>
            <a href={ctaLink} className="product-cta">{cta}</a>
          </div>
        );
      })
    }
  </section>
);

Listings.propTypes = {
  listings: array.isRequired,
};

export default Listings;