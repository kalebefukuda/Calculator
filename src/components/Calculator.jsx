import React, { useState } from 'react'
import './Calculator.css'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';


const Calculator = () => {
    const[num,setNum]= useState(0);
    const[oldnum,setOldNum]= useState(0);
    const[operator,setOperator]= useState(0);

    function inputNum(e){
        
        let input = e.target.value;
        if(num===0){
            setNum( input);
        }else{
            setNum( num+ input);
        }
       
    }
function clear(e){
    setNum(0);

}
function porcentage(e){
    setNum(num/100);
}
function changeSign(e){
    if(num>0){
        setNum(-num);
    } else{
        setNum(Math.abs(num))
    }
}
function calculate(e){
    if(operator==="/"){
        setNum(parseFloat(oldnum)/parseFloat(num));
    }
     else if(operator==="X"){
        setNum(parseFloat(oldnum) * parseFloat(num));
    }
    else if(operator==="+"){
        setNum(parseFloat(oldnum) + parseFloat(num));
    }
    else if(operator==="-"){
        setNum(parseFloat(oldnum) - parseFloat(num));
    }
   
}
function operatorHaandler(e){
    let operatorInput=e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
}
    
  return (

    <div className='calculator-container'>
       <Box m={5} />
    <Container maxWidth="xs">
    <div className='wrapper'>
    <Box m={6} />
        <h1 className='result'> {num}</h1>
        <button className='especial' onClick={clear}> AC</button>
        <button className='especial' onClick={changeSign}> +/-</button>
        <button className='especial' onClick={porcentage}> %</button>
        <button className='operator' onClick={operatorHaandler} value={"/"}> /</button>
        <button className='numbers' onClick={inputNum} value={7}> 7</button>
        <button className='numbers' onClick={inputNum} value={8}> 8</button>
        <button className='numbers' onClick={inputNum} value={9}> 9</button>
        <button className='operator'onClick={operatorHaandler} value={"X"}> X</button>
        <button className='numbers' onClick={inputNum} value={4}> 4</button>
        <button className='numbers' onClick={inputNum} value={5}> 5</button>
        <button className='numbers' onClick={inputNum} value={6}> 6</button>
        <button className='operator'onClick={operatorHaandler} value={"-"}> -</button>
        <button className='numbers' onClick={inputNum} value={1}> 1</button>
        <button className='numbers' onClick={inputNum} value={2}> 2</button>
        <button className='numbers' onClick={inputNum} value={3}> 3</button>
        <button className='operator'onClick={operatorHaandler} value={"+"}> +</button>
        <button className='numbers number-0' onClick={inputNum} value={0}> 0</button>
        <button className='numbers' onClick={inputNum} value={"."}> ,</button>
        <button className='operator' onClick={calculate}> =</button>
    </div>
    
    </Container>
    </div>
  )
}

export default Calculator