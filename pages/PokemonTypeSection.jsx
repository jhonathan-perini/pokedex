import styles from '../styles/PokemonTypeSection.module.css'
import PokemonTypesList from './PokemonTypesList'

export default function PokemonTypeSection({filter}){
    return (
        <div className={styles.typeSection}>
            <div className={styles.typeBox}>
                <PokemonTypesList filter={filter} />
            </div>
        </div>
    )
}