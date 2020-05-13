import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Leader from './Leaderboard/Leader';
import './Leaderboard/Leaderboard.css';

const fetchData = async (stateUpdate) => {
  const host = 'https://www.speedrun.com';
  // internal API game id - can be obtained only through API
  // **********************************************************
  // https://github.com/speedruncomorg/api/tree/master/version1
  // **********************************************************
  const gameID = 'lde3woe6';
  // internal API category ID - can only be obtained through API
  const categoryID = 'ndx1pm52';
  const runAmountLimit = '10';
  const URL = `${host}/api/v1/leaderboards/${gameID}/category/${categoryID}?top=${runAmountLimit}`;
  const data = await fetch(URL);
  const parsedData = await data.json();

  stateUpdate({
    leaders: parsedData.data.runs,
    isLoading: false,
  });
};

const Leaderboard = (props) => {
  const { leaders } = props;
  const { isLoading } = props;
  const [state, setState] = useState({
    leaders: leaders || null,
    isLoading: isLoading || true,
  });

  useEffect(() => {
    fetchData(setState);
  }, []);

  return (
    <div className="Leaderboard">
      <p>Dark Souls Remastered Leaderboards (Any%)</p>
      <table className="leaderboardTable">
        <th>Rank</th>
        <th>Player</th>
        <th>IGT</th>
        <th>Platform</th>
        <th>Date</th>
        <th>Link</th>
        {state.isLoading === false ? state.leaders.map((chunk) => (
          <Leader rank={chunk.place} igt={chunk.run.times.ingame_t} platform="PC" date={chunk.run.date} LoadLink={chunk.run.players[0].uri} link={chunk.run.videos.links[0].uri} />
        )) : null}
      </table>
    </div>
  );
};

Leaderboard.propTypes = {
  leaders: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Leaderboard;
