import React from 'react';
import { shallow } from 'enzyme';
import Recordings from './Recordings.jsx';

describe('Recordings', () => {
  it('matches a snapshot', () => {
    const recordings = [
      { title: 'some title',
        id: 'fneowigbw0' },
      { title: 'another title', 
        id: 'fneowigbw0' },
      { title: 'a third title',
        id: 'fneowigbw0' }
    ];

    const wrapper = shallow(
      <Recordings recordings={recordings} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
