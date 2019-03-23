import React from 'react';
import Listings from '../Listings';

describe('Listings Component', () => {
  const defaultProps = {
    listings: [
      {
        'title': 'Simple Canvas',
        'description': 'Lets your pictures speak for themselves.',
        'image': {
          'path': '/images/product.jpg',
          'alt': 'Simple Canvas'
        },
        'price': 1500,
        'currency': '£',
        'priceLabel': 'From',
        'productLabel': 'bestseller',
        'cta': 'Shop Now',
        'ctaLink': '/random/link/to/no/where'
      },
      {
        'title': 'Collage Canvas',
        'description': 'Can\'t choose just one pic? Put your favourite photos on one canvas - a collage.',
        'image': {
          'path': '/images/product.jpg',
          'alt': 'Collage Canvas'
        },
        'price': 2500,
        'currency': '£',
        'priceLabel': 'From',
        'productLabel': '',
        'cta': 'Shop Now',
        'ctaLink': '/random/link/to/no/where'
      },
    ],
  };

  const wrapper = shallow(<Listings {...defaultProps} />);

  it('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain 2 product listing cards', () => {
    expect(wrapper.find('[data-test="product-listing"]')).toHaveLength(2);
  });
});