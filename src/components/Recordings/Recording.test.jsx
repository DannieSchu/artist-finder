import React from 'react';
import { shallow } from 'enzyme';
import Recording from './Recording.jsx';

describe('Recording', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Recording
        title="Wonderful World"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
