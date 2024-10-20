"use client"
import { useState } from "react";
import styles from "./Styles.module.css";
import { MOCKPOKEMONS } from "./constants";


function ViewPokemons() {
  const  [pokemons, setPokemons] = useState(MOCKPOKEMONS)
  return <div>
    {pokemons.map((pokemon)=> {
      return (<span>{pokemon.name}</span>)
    } )}
  </div>;
}
export default ViewPokemons;
