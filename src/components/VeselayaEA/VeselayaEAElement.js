import React from 'react';
import {
  VictoryChart, VictoryBar, VictoryAxis, VictoryTheme,
} from 'victory';
import Currency from './Currency';

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

const VeselayaEAElement = () => (
  <div>
    <Currency />
    <h4>Элемент из github</h4>
    График прибыли от продажи лаб
    <VictoryChart
        // adding the material theme provided with Victory
      theme={VictoryTheme.material}
      domainPadding={20}
    >
      <VictoryAxis
        tickValues={[1, 2, 3, 4]}
        tickFormat={['Семестр 1', 'Семестр 2', 'Семестр 3', 'Семестр 4']}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={(x) => (`$${x / 1000}k`)}
      />
      <VictoryBar
        data={data}
        x="quarter"
        y="earnings"
      />
    </VictoryChart>
  </div>
);
export default VeselayaEAElement;
