import React from 'react';
import { shallow } from 'enzyme';
import ArtistFinder from './ArtistFinder.jsx';

describe('ArtistFinder', () => {
  it('matches a snapshot', () => {
    const artists = [{
      id: 'gh8932hg3gee',
      name: 'Leonard Cohen',
      origin: 'Canada',
      birth: '1934-09-21',
      death: '1934-09-21',
    },
    {
      id: '6943w0utw0ghjvdr',
      name: 'Leonard Cohen',
      origin: 'Canada',
      birth: '1934-09-21',
      death: '1934-09-21' 
    },
    {
      id: 't430tu340grjid',
      name: 'Leonard Cohen',
      origin: 'Canada',
      birth: '1934-09-21',
      death: '1934-09-21' 
    }];
    
    const wrapper = shallow(
      <ArtistFinder artists={artists} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
