import React from 'react';
import './pokemon.css';

async function magic() {
  const ssilka = `https://pokeapi.co/api/v2/pokemon/`+Math.floor(Math.random()*20) + 1;
  const data = await (await fetch(ssilka)).json();
  document.getElementById('pokemon').style.display = "block";
  document.getElementById('name').innerHTML = data.name;
  document.getElementById('weight').innerHTML = data.weight;
  document.getElementById('height').innerHTML = data.height;
  document.getElementById('photo1').innerHTML = '<img src='+data.sprites.front_default+'></img>';
  document.getElementById('photo2').innerHTML = '<img src='+data.sprites.back_default+'></img>';
  document.getElementById('form').innerHTML = data.forms[0].name;
  document.getElementById('hp').innerHTML = data.stats[5].base_stat;
  document.getElementById('attack').innerHTML = data.stats[4].base_stat;
  for(let i=0;i<data.abilities.length;i++){
    if(i==0){
      document.getElementById('abil').innerHTML = 'Способности: ';
    }
    document.getElementById('abil').innerHTML += data.abilities[i].ability.name + ','
  }
}

const PokeController = () => (
  <div className="pokemon_root">
    <div className="conv-board">
      <div>
        <input type='button' id='poke_button' value='*Тык*' onClick= {()=>{magic()}}/><br />
        <div id='pokemon' hidden>
          <span id='name'></span><br />
          <div id='photo'>
            <span id='photo1'></span>
            <span id='photo2'></span>
          </div>
          <span id='field'>Вес: <span id='weight'></span>гр.</span><br />
          <span id='field'>Рост: <span id='height'></span>см.</span><br />
          <span id='field'>Форма: <span id='form'></span></span><br />
          <span id='abil'></span><br />
          <img id='plus' src='http://cdn.onlinewebfonts.com/svg/img_416911.png'/><span id='hp'></span><span id='attack'></span><img id='sword' src='https://www.pngkey.com/png/full/95-951102_sword-free-vector-icons-designed-by-freepik-sword.png'/>
        </div>
      </div>

    </div>
  </div>
);

export default PokeController;
