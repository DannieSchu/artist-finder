import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls.jsx';

describe('Controls', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Controls
        onSubmit={() => {}}
        onChange={() => {}}
        value=""
        placeholder="Enter an artist"
        buttonText="Go!" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
