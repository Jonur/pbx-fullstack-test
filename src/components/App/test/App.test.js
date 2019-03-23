import React from 'react';
import App from '../App';
import { getProducts } from '../../../utils/api';

jest.mock('../../../utils/api', () => ({
  __esModule: true,
  getProducts: jest.fn(() => Promise.resolve(
    [
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
  )),
}));

describe('App Component', () => {
  const wrapper = mount(<App />);

  it('should render the App component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have the Products when mounted', () => {
    expect(getProducts).toHaveBeenCalledTimes(1);
  });

  it('should show the application loader for a default empty listings state', () => {
    expect(wrapper.find('[data-test="app-loader"]')).toHaveLength(1);
  });

  it('should render the product listings component', async () => {
    await Promise.resolve(getProducts).then(() => {
      wrapper.update();
      expect(wrapper.find('[data-test="product-listings"]')).toHaveLength(1);
    });
  });
});