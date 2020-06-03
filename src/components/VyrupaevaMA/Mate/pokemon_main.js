import React from 'react';
import styles from './pokemon.modules.css';

async function magic() {
  const ssilka = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 20)}${1}`;
  const data = await (await fetch(ssilka)).json();
  document.getElementById('pokemon').style.display = 'block';
  document.getElementById('name').innerHTML = data.name;
  document.getElementById('weight').innerHTML = data.weight;
  document.getElementById('height').innerHTML = data.height;
  document.getElementById('photo1').innerHTML = `<img src=${data.sprites.front_default} alt=""></img>`;
  document.getElementById('photo2').innerHTML = `<img src=${data.sprites.back_default} alt=""></img>`;
  document.getElementById('form').innerHTML = data.forms[0].name;
  document.getElementById('hp').innerHTML = data.stats[5].base_stat;
  document.getElementById('attack').innerHTML = data.stats[4].base_stat;
  for (let i = 0; i < data.abilities.length; i++) {
    if (i === 0) {
      document.getElementById('abil').innerHTML = 'Способности: ';
    }
    document.getElementById('abil').innerHTML += `${data.abilities[i].ability.name},`;
  }
}

const PokeController = () => (
  <div className={styles.pokemon_root}>
    <div align="center" id="conv_board">
      <div id="poke">
        <button id="pokebutton" type="button" onClick={() => { magic(); }}>Тык</button>
        <br />
        <div id="pokemon" hidden>
          <span id="name" />
          <br />
          <div id="photo">
            <span id="photo1" />
            <span id="photo2" />
          </div>
          <span id="field">
            Вес:
            <span id="weight" />
            гр.
          </span>
          <br />
          <span id="field">
            Рост:
            <span id="height" />
            см.
          </span>
          <br />
          <span id="field">
            Форма:
            <span id="form" />
          </span>
          <br />
          <span id="abil" />
          <br />
          <img id="plus" alt="" />
          <span id="hp" />
          <span id="attack" />
          <img id="sword" alt="" />
        </div>
      </div>

    </div>
  </div>
);

export default PokeController;
