import React from 'react';
import App from '../App';
import { getProducts } from '../../../utils/api';

jest.mock('../../../utils/api', () => ({
  __esModule: true,
  getProducts: jest.fn(() => Promise.resolve([
    {
      'title': 'Simple Canvas',
      'description': 'Lets your pictures speak for themselves.',
    },
    {
      'title': 'Collage Canvas',
      'description': 'Can\'t choose just one pic? Put your favourite photos on one canvas - a collage.',
    },
  ]
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

  it('should render the product listings component', async () => {
    await Promise.resolve(getProducts).then(() => {
      wrapper.update();
      expect(wrapper.find('[data-test="product-listings"]')).toHaveLength(1);
    });
  });
});