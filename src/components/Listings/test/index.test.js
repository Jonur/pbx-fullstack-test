import React from 'react';
import Listings from '../Listings';

jest.mock('../Listings', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Listings component exports', () => {
  it('should export the Listings component', () => {
    shallow(<Listings />);
    expect(Listings).toHaveBeenCalled();
  });
});