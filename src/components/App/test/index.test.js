import React from 'react';
import App from '../App';

jest.mock('../App', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('App component exports', () => {
  it('should export the App component', () => {
    shallow(<App />);
    expect(App).toHaveBeenCalled();
  });
});