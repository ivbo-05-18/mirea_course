import React, { useEffect, useState } from 'react';

const HYPER_LINK_STYLE = {
  textDecoration: 'none',
  color: 'white',
};

const getUpdateUrl = () => 'http://api.open-notify.org/astros.json';
const fetchData = async (dataUpdate) => {
  try {
    const response = await fetch(getUpdateUrl());
    const json = await response.json();
    dataUpdate({
      number: json.number,
      people: json.people,
      isLoaded: true,
    });
  } catch (error) {
    dataUpdate({
      number: 'Fetching has failed',
      isLoaded: false,
    });
  }
};

const SpacePeople = () => {
  const [data, setData] = useState({
    number: 'Fetching...',
    people: ['name', 'name', 'name', '', '', ''],
    isLoaded: false,
  });
  useEffect(() => {
    fetchData(setData);
  }, []);
  if (data.isLoaded) {
    return (
      <div>
        <a style={HYPER_LINK_STYLE} href="https://www.howmanypeopleareinspacerightnow.com/">How many people are in space right now?</a>
        <h1>{data.number}</h1>
        {data.people.map((chunk) => <div>{chunk.name}</div>)}
      </div>
    );
  }

  return (
    <div>{data.number}</div>
  );
};

export default SpacePeople;
