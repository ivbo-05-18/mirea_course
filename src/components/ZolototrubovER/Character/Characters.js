import React, { useState, useEffect } from 'react';

const fetchChar = async (props, stateUpdate) => {
  fetch(null)
    .then((response) => response.json());
  stateUpdate(
    {
      isLoading: false,
      name: props.name,
      head_shot: props.head_shot,
      universe: props.universe,
      loadLink: props.loadLink,
      info: props.info,
    },
  );
};

const Characters = (props) => {
  const [state, setState] = useState({
    isLoading: true,
    name: null,
    head_shot: null,
    universe: null,
    loadLink: null,
    info: null,
  });

  useEffect(() => {
    fetchChar(props, setState);
  }, [props]);

  if (state.isLoading === false) {
    return (
      <tr className="zolototrubov_er_tr">
        <th className="zolototrubov_er_th">{state.name}</th>
        <th className="zolototrubov_er_th" aria-label=" "><img src={state.head_shot} alt="" /></th>
        <th className="zolototrubov_er_th">{state.universe}</th>
        <th className="zolototrubov_er_th">
          <a href={state.info} target="_blank" rel="noopener noreferrer">
            More info
          </a>
        </th>
      </tr>
    );
  }
  return (
    <tr>
      <th>Fetching...</th>
      <th>Fetching...</th>
      <th>Fetching...</th>
      <th>Fetching...</th>
    </tr>
  );
};

export default Characters;
