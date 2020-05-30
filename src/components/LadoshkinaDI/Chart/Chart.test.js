import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Chart from './Chart_Elim_Element';

configure({adapter: new Adapter()});


describe('indirectly testing click simulation', () => {
  it('should ', () => {
    const wrapper = shallow(<Chart />);
    expect(wrapper.state('Men')).toBe(null);
    expect(wrapper.state('Women')).toBe(null);
      
  
      
  });

    
});
