import React from 'react';
import App from './App';

describe('App Component', () => {
  const wrapper = shallow(<App />);

  it('should render the App component', () => {
    expect(wrapper).toMatchSnapshot();
  });
});