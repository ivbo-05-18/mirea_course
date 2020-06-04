import React from 'react';
import renderer  from 'react-test-renderer';

import Chart from './Chart_Elim_Element';


it('Render correctly', () => {
const ChartComponent = renderer.create(<Chart />).toJSON();
expect(ChartComponent).toMatchSnapshot();
});