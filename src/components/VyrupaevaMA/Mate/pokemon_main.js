import React, { Component } from 'react';
import styles from './pokemon.modules.css';
import plus from './plus.png';
import sword from './sword.png';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderpokemon: {},
      photo1: {},
      photo2: {},
      abilities: {},
    };
  }

  async magic() {
    const url = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 20)}${1}`;
    const data = await (await fetch(url)).json();
    const ph1 = data.sprites.front_default;
    const ph2 = data.sprites.back_default;
    this.setState(() => ({
      renderpokemon: data,
      photo1: ph1,
      photo2: ph2,
    }));
  }

  render() {
    const {
      renderpokemon, photo1, photo2, abilities } = this.state;
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
                <span id="photo1" src={photo1} />
                <span id="photo2" src={photo2} />
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
              </span>
              <br />
              <span id="abil" />
              <br />
              <img id="plus" alt="" src={plus} />
              <img id="sword" alt="" src={sword} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokemon;
