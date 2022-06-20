import ContentHeader from "./ContentHeader";
import PokemonTypeSection from "./PokemonTypeSection";
import PokemonList from "./PokemonList";
import styles from '../styles/Home.module.css'
import { useState } from "react";

export default function Content(){
    const [filter, setFilter] = useState(null)
    console.log(filter)
    return (
        <div className={styles.principal} >
        < ContentHeader/>
        <PokemonTypeSection filter={setFilter} />
        <PokemonList filter={filter} />
        </div>
    )
}