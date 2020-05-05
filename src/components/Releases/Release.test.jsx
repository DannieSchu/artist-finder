import React from 'react';
import { shallow } from 'enzyme';
import Release from './Release.jsx';

describe('Release', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Release
        title="Wonderful Town"
        date="1953" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
