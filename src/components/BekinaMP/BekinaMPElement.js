import React from 'react';
import TimeAgo from 'react-timeago';
import MUIDataTable from 'mui-datatables';
import TextTransformer from './TextTransformer';

const columns = ['Name', 'Company', 'City', 'Country'];

const data = [
  ['Joe James', 'RTU MIREA', 'Moscow', 'RU'],
  ['John Walsh', 'RTU MIREA', 'Samara', 'RU'],
  ['Bob Herm', 'RTU MIREA', 'Saransk', 'RU'],
  ['James Houston', 'RTU MIREA', 'Sochi', 'RU'],
];

const options = {
  filterType: 'checkbox',
};


const BekinaMPElement = () => {
  const TEXT_STYLE = {
    fontSize: '25px',
    color: 'white',
    margin: '10px 0px',
  };
  const BORD_STYLE = {
    border: '1px solid black',
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: '5px',
    borderRadius: '25px',
  };

  return (
    <div className="bekina_mp_element">
      <p style={TEXT_STYLE}>Собственный компонент</p>
      <TextTransformer />
      <div style={BORD_STYLE}>
        <p style={TEXT_STYLE}>
          Компонент из GitHub
          <hr />
        </p>
        How many years remain until the 22nd century?
        <br />
        <TimeAgo date="January 01, 2101" />
      </div>


      <p style={TEXT_STYLE}>Компонент другого студента (Веселая Е.А.)</p>
      <MUIDataTable
        title="Employee List"
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
};

export default BekinaMPElement;
