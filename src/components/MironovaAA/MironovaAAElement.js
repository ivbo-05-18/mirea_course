import React from 'react';
import AvatarGenerator from 'react-avatar-generator';
import Calendar from 'react-calendar';
import Nekotube from './nekotube/nekotube';

const MironovaAAElement = () => {
  const TEXT_STYLE = {
    'font-size': '25px',
    color: 'white',
    margin: '10px 0px',
  };

  return (
    <div className="mironova_aa_element">
      <p style={TEXT_STYLE}>Собственный компонент</p>
      <Nekotube />
      <p style={TEXT_STYLE}>Компонент из GitHub</p>
      <AvatarGenerator
        colors={['#333', '#222', '#ccc']}
        backgroundColor="#000"
      />
      <p style={TEXT_STYLE}>Компонент другого студента (Бекина М.П.)</p>
      <Calendar
        startDate={new Date()}
        endDate={new Date().getFullYear}
        weekNumbers
        size={12}
        mods={
            [
              {
                date: new Date(),
                classNames: ['current'],
                component: ['day', 'month', 'week'],
              },
            ]
          }
      />
    </div>
  );
};

export default MironovaAAElement;
