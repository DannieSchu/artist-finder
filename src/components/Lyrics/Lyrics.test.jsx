import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from './Lyrics.jsx';

describe('Lyrics', () => {
  it('matches a snapshot', () => {
    const lyrics = 'Good time for a change See, the luck I\'ve had Can make a good man Turn bad So please please please Let me, let me, let me Let me get what I want This time';
    
    const wrapper = shallow(
      <Lyrics
        lyrics={lyrics}
        artist="The Smiths"
        recording="Please, Please, Please Let Me...Go To Bed" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
