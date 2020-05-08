import React, {useState, useEffect} from 'react'
import Leader from './Leaderboard/Leader'
import './Leaderboard/Leaderboard.css'

const fetchData = async (stateUpdate) => {
    
    fetch("https://www.speedrun.com/api/v1/leaderboards/lde3woe6/category/ndx1pm52?top=10")
    .then(response => response.json())
    .then(json => {
        stateUpdate({
            leaders: json.data.runs,
            isLoading: false
        })
        console.log(json)    
    }
    )
}

const Leaderboard = (props) => {
    const [ state,setState ] = useState({
        leaders: props.leaders || null,
        isLoading: props.isLoading || true
    })

    useEffect(() => {
        fetchData(setState)
    },[])

    return (
        <div className="Leaderboard">
            <p>Dark Souls Remastered Leaderboards (Any%)</p>
            <table className='leaderboardTable'>
                <th>Rank</th>
                <th>Player</th>
                <th>IGT</th>
                <th>Platform</th>
                <th>Date</th>
                <th>Link</th>
            {state.isLoading === false ? state.leaders.map((chunk)=> {
                return (
                    <Leader rank={chunk.place} igt={chunk.run.times.ingame_t} platform="PC" date={chunk.run.date} loadLink={chunk.run.players[0].uri} link={chunk.run.videos.links[0].uri}/>
                )
            }) : null}
            </table>
        </div>
    )
}

export default Leaderboard