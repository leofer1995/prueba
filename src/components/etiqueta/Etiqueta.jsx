import styles from './Etiqueta.module.css';

const Etiqueta = ({num,disabled,handleClickDisabled}) => {
    
    return(
        <>
            {disabled && 
                <div className={styles.container} onClick={()=>handleClickDisabled(-num)}>
                    <span>{num}+</span>
                </div>
            }
            
        </>
    )
}

export default Etiqueta;