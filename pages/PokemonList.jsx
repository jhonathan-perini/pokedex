
import { useEffect, useState } from "react"
import styles from '../styles/PokemonList.module.css'
import PokemonType from "./PokemonType"


function mapPokemon(arr, item = null) {
    return arr?.map((pokemon) => {
        const variable = !item ? pokemon : pokemon.pokemon
        const pokemonUrlArray = variable.url.split('/')
        const pokemonIndex = pokemonUrlArray[pokemonUrlArray.length - 2]
        const baseUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png?raw=true`
        return (
            <div key={variable.name + 'card'} className={styles.card}>
                <img key={variable.name + 'img'} className={styles.sprite} src={baseUrl} width={120} />
                <li key={variable.name}>{variable.name}</li>
                <PokemonType index={pokemonIndex} />
            </div>
        )
    })
}
export default function PokemonList({ filter }) {
    const [pokemons, setPokemons] = useState([])
    const [mainPage, setMainPage] = useState(`https://pokeapi.co/api/v2/pokemon/`);
    useEffect(() => {
        const pageToFetch = filter ? `https://pokeapi.co/api/v2/type/${filter}` : mainPage
            fetch(pageToFetch)
                .then(response => response.json())
               .then(value => { setPokemons(value); console.log(pokemons); })
    }, [mainPage, filter])
    return (
        <div className={styles.mainContainer}>
            <div className={styles.pokemonCardContainer}>
                {pokemons && !filter ? mapPokemon(pokemons?.results) : mapPokemon(pokemons?.pokemon, 'filter')}
            </div>
            <nav>
                {pokemons.previous && <button onClick={() => setMainPage(pokemons.previous)}>Prev</button>}
                {pokemons.next && <button onClick={() => setMainPage(pokemons.next)}>Next</button>}
            </nav>
        </div >
    )
}