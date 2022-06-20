import { useEffect, useState } from "react"
import styles from '../styles/PokemonType.module.css'

export default function PokemonType({index}){
    const[pokemon, setPokemon] = useState([])
    useEffect(() => {
        if(pokemon?.length >0){
        } else {
            fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
            .then(response => response.json())
            .then(value => { console.log(value.types);setPokemon(value.types)})
        }
    })
    return (
        <div className={styles.typeItems}>
        {pokemon?.map(val => {
            return  <img key={Math.random(432)} src={`./${val.type.name}.png`} className={styles.typeIcon} width={25} height={25}/>
        })}
        </div>
    )
}