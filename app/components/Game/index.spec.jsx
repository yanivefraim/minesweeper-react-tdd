import * as React from 'react';
import {shallow} from 'enzyme';
import {Game} from './index';

describe('Game', () => {
  it('Should have cells', () => {
    const wrapper = shallow(
      <Game />
    );
    expect(wrapper.find('.cell').length).not.toBe(0);
  });

  it('Should have 10 rows', () => {
    const wrapper = shallow(
      <Game />
    );
    expect(wrapper.find('.row').length).toBe(10);
  });

  it('Should have 100 cels', () => {
    const wrapper = shallow(
      <Game />
    );
    expect(wrapper.find('.cell').length).toBe(100);
  });
});
