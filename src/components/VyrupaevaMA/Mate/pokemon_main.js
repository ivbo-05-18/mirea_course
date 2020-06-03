import React, { Component } from 'react';
import styles from './pokemon.module.css';
import plus from './plus.png';
import sword from './sword.png';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderpokemon: null,
    };
    this.magic();
  }

  componentDidMount() {
    this.magic();
  }

  handleClick() {
    this.magic();
  }

  async magic() {
    const url = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 20)}${1}`;
    const data = await (await fetch(url)).json();
    this.setState(() => ({
      renderpokemon: data,
    }));
  }

  abil() {
    let abilStr = '';
    const { renderpokemon } = this.state;
    for (let i = 0; i < renderpokemon.abilities.length; i++) {
      abilStr += `${renderpokemon.abilities[i].ability.name},`;
    }
    return abilStr;
  }

  render() {
    const { renderpokemon } = this.state;
    if (!renderpokemon) { return null; }
    return (
      <div className={styles.pokemon_root}>
        <div align="center" className={styles.conv_board}>
          <div id="poke">
            <button className={styles.pokebutton} type="button" onClick={() => { this.handleClick(); }}>Тык</button>
            <br />
            <div className={styles.pokemon}>
              <span id="name">{ renderpokemon.name }</span>
              <br />
            </div>
            <span className={styles.field}>
              Вес:
              <span id="weight">{ renderpokemon.weight }</span>
              гр.
            </span>
            <br />
            <span className={styles.field}>
              Рост:
              <span id="height">{ renderpokemon.height }</span>
              см.
            </span>
            <br />
            <br />
            <span className={styles.abil}>
              Способности:
              <span id="abil_count">{ this.abil() }</span>
            </span>
            <br />
            <img className={styles.plus} alt="" src={plus} />
            <span className={styles.hp}>{ renderpokemon.stats[5].base_stat }</span>
            <span className={styles.attack}>{ renderpokemon.stats[4].base_stat }</span>
            <img className={styles.sword} alt="" src={sword} />
          </div>
        </div>
      </div>
    );
  }
}

export default Pokemon;
