import Etiqueta from '../etiqueta/Etiqueta';
import styles from './Etiquetas.module.css';

const Etiquetas = ({handleClickDisabled, numbers}) => {
    return(
        <div className={styles.container}>
            {numbers.map(num=> <Etiqueta key={num.num} num={num.num} disabled={num.disabled} handleClickDisabled={handleClickDisabled}/>)}
        </div>
    )
}

export default Etiquetas;