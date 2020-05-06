import React from 'react';
import { shallow } from 'enzyme';
import Releases from './Releases.jsx';

describe('Releases', () => {
  it('matches a snapshot', () => {
    const releases = [
      { title: 'some title',
        id: 'fneowigbw0' },
      { title: 'another title', 
        id: 'fneowigbw0' },
      { title: 'a third title',
        id: 'fneowigbw0' }
    ];

    const wrapper = shallow(
      <Releases releases={releases} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
