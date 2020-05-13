import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from './Lyrics.jsx';

describe('Lyrics', () => {
  it('matches a snapshot', () => {
    const match = {
      params: {
        recordingId: '192e12e5-cf73-41e9-b4f1-7869760b66f4'
      }
    };

    const wrapper = shallow(
      <Lyrics
        match={match} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
