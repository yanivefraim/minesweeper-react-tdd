
import * as React from 'react';
import {shallow} from 'enzyme';
import {Home} from './index';

describe('Home', () => {
  it('Should have link for new game', () => {
    const wrapper = shallow(
      <Home />
    );
    expect(wrapper.find('.new-game').type()).toEqual('a');
  });

  it('Should have href for new game', () => {
    const wrapper = shallow(
      <Home />
    );

    expect(wrapper.find('.new-game').props().href).toEqual('./#/new');
  });

  it('Should have href with "new Game" text', () => {
    const wrapper = shallow(
      <Home />
    );

    expect(wrapper.find('.new-game').text()).toEqual('New Game');
  });
});
