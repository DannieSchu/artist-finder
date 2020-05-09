import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist.jsx';

describe('Artist', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Artist
        name="Leonard Cohen"
        origin="Canada"
        birth="1934-09-21"
        death="1934-09-21" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
