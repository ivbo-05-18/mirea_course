import React, {useState, useEffect} from 'react'
import Characters from './Character/Characters'

const fetchChar = async (stateUpdate) => {

    fetch("https://secure-hamlet-19722.herokuapp.com/api/v1/characters")
    .then(response => response.json())
    .then(json => {
        stateUpdate({
            characters: json,
            isLoading: false
        })
        console.log(json)
    }
    )
}

const CharInfo = (props) => {
    const [ state,setState ] = useState({
        characters: props.characters || null,
        isLoading: props.isLoading || true,
    })

    useEffect(() => {
        fetchChar(setState)
    },[])



    return (
        <div className="Characters">
            <p>Marvel vs. Capcom 2 character info</p>
            <table className='CharTable'>
                <th>Character</th>
                <th>Icon</th>
                <th>Universe</th>
                <th>Info</th>
                {state.isLoading === false ? state.characters.map((chunk)=> {
                    if(chunk.name.includes('Dalvin')) {}
                    else {
                    if(chunk.name.includes('Wolverine')) {
                      const info = "https://marvelvscapcom.fandom.com/wiki/Wolverine"
                      return (
                          <Characters name={chunk.name} head_shot={chunk.head_shot} universe={chunk.universe} loadLink={'https://secure-hamlet-19722.herokuapp.com/api/v1/characters/' + chunk.name}
                          info={info}/>
                         )}
                    else if(chunk.name.includes(' ')) {
                      const info = "https://marvelvscapcom.fandom.com/wiki/" + chunk.name.split(' ')[0] + '_' + chunk.name.split(' ')[1]
                      return (
                          <Characters name={chunk.name} head_shot={chunk.head_shot} universe={chunk.universe} loadLink={'https://secure-hamlet-19722.herokuapp.com/api/v1/characters/' + chunk.name}
                          info={info}/>
                        )} else {
                          const info = "https://marvelvscapcom.fandom.com/wiki/" + chunk.name
                          return (
                              <Characters name={chunk.name} head_shot={chunk.head_shot} universe={chunk.universe} loadLink={'https://secure-hamlet-19722.herokuapp.com/api/v1/characters/' + chunk.name}
                              info={info}/>
                        )}
                    }
                }) : null}
            </table>
        </div>
    )
}

export default CharInfo
