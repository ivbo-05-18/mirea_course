import React, {useState, useEffect} from 'react'

const fetchMoves = async (props,link,stateUpdate) => {
    fetch(link)
    .then(response => response.json())
    .then(json => {
        stateUpdate(
            {
                isLoading: false,
                move: props.move_name,
                input: props.image,
                loadLink: props.loadLink
            }
        )
    })
}


const Moves = (props) => {
    const [ state,setState ] = useState({
        isLoading: true,
        move: null,
        input: null,
        loadLink: null
    })

    useEffect(()=>{
        fetchMoves(props,props.loadLink,setState)
    },[props])

    if (state.isLoading === false) {
        return(
               <div className="Moves">
                 <p>Character move list</p>
                 <tr className='moveTable'>
                     <th>Move</th>
                     <th>Input</th>
                     {state.isLoading === false ? state.moves.map((chunk)=> {
                       return (
                           <Moves move={props.move_name} input={props.image} loadLink={'https://secure-hamlet-19722.herokuapp.com/api/v1/characters/' + chunk.name + '/moves'}/>
                       )
                     }) : null}
                     </tr>
                 </div>
             )
           }
           else {
        return(
            <tr>
                <th>Fetching...</th>
                <th>Fetching...</th>
            </tr>
        )
    }
}

export default Moves
