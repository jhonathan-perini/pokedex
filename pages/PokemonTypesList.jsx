// @ts-nocheck

import { useEffect, useState } from "react";
import styles from '../styles/PokemonTypesList.module.css'


export default function PokemonTypesList ({filter}) {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type')
        .then(response => response.json())
        .then(value => setTypes(value.results))
    }, [])
    
function handleFilter(val) {
    if(val !==null){

        const testeUrl = val.url.split("/");
     
        const index = testeUrl[6]
        filter(index)
    }  else 
    {
        filter(val)
    }
}
function capitalizeFirstLetter(val){
    return val.charAt(0).toUpperCase() + val.slice(1)
}
    return (
        <div className={styles.typeList}>
            <span onClick={() => handleFilter(null)}>All</span>
            {types?.map((val, index) => {
                return <span key={index} className={styles[val.name] } onClick={() => handleFilter(val)}>
                    {capitalizeFirstLetter(val.name)}
                    </span>
            })}
        </div>

    )
}