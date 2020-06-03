import React, { Component } from 'react';
import styles from './pokemon.modules.css';
import plus from './plus.png';
import sword from './sword.png';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderpokemon: {},
    };
  }

  async magic() {
    const url = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 20)}${1}`;
    const data = await (await fetch(url)).json();
    this.setState(() => ({
      renderpokemon: data,
    }));
  }

  render() {
    const { renderpokemon } = this.state;
    for (let i = 0; i < renderpokemon.abilities.length; i++) {
      if (i === 0) {
        document.getElementById('abil').innerHTML = 'Способности: ';
      }
      document.getElementById('abil').innerHTML += `${renderpokemon.abilities[i].ability.name},`;
    }
    document.getElementById('photo1').innerHTML = `<img src=${renderpokemon.sprites.front_default} alt=""></img>`;
    document.getElementById('photo2').innerHTML = `<img src=${renderpokemon.sprites.back_default} alt=""></img>`;
    return (
      <div className={styles.pokemon_root}>
        <div align="center" id="conv_board">
          <div id="poke">
            <button id="pokebutton" type="button" onClick={() => { this.magic(); }}>Тык</button>
            <br />
            <div id="pokemon">
              <span id="name">{ renderpokemon.name }</span>
              <br />
              <div id="photo">
                <span id="photo1" />
                <span id="photo2" />
              </div>
              <span id="field">
                Вес:
                <span id="weight">{ renderpokemon.weight }</span>
                гр.
              </span>
              <br />
              <span id="field">
                Рост:
                <span id="height">{ renderpokemon.height }</span>
                см.
              </span>
              <br />
              <span id="field">
                Форма:
                <span id="form">{ renderpokemon.forms[0].name }</span>
              </span>
              <br />
              <span id="abil" />
              <br />
              <img id="plus" alt="" src={plus} />
              <span id="hp">{ renderpokemon.stats[5].base_stat }</span>
              <span id="attack">{ renderpokemon.stats[4].base_stat }</span>
              <img id="sword" alt="" src={sword} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokemon;
