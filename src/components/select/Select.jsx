import { useEffect, useState } from 'react';
import Etiquetas from '../etiquetas/Etiquetas';
import Sum from '../sum/Sum';
//import styles from './Select.module.css';


const Select = () => {
    
    const [numbers, setNumbers] = useState([]);
    const [result, setResult] = useState(0);

    useEffect(()=> {
        let number = [1,2,3,4,5,6,7,8,9]
        setNumbers(number.map(num=>{
            return {
                num,
                disabled:false
            }
        }));
    },[]);

    const handleClickDisabled = (value) => {
        setNumbers(numbers.map(num=>{
            if(num.num===Math.abs(value)){
                return {
                    ...num,
                    disabled:!num.disabled
                }
            }
            return num
        }));
        
        setResult(result + value)
    }
 
    return (
        <div>
            <label>Digits:
            <select name="" id="" onChange={e=>handleClickDisabled(Number(e.target.value))} placeholder='select' defaultValue='Select Digits'>
                <option value='Select Digits' disabled >Select Digits</option>
                {numbers.map(num=>
                    <option 
                        disabled={num.disabled?'disabled':null}
                        key={num.num}
                        value={num.num} 
                        >
                            {num.num}
                        </option>
                )}
            </select>
            </label>

            <h2> Sum: </h2>
            <Sum result={result}/>

            <h2>Selected digits:</h2>
            <Etiquetas handleClickDisabled={handleClickDisabled} numbers={numbers}/>
        </div>
    )
}

export default Select;
