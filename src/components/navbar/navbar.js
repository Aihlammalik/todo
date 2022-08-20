import Button from 'react-bootstrap/Button';
import {useState} from 'react'


 function NavBar(params) {
  const [count , setCounter] = useState(0)
  const onClickDecreament = () =>{
    setCounter(count - 1)
  }

  const onClickincreament = () =>{
    setCounter(count + 1)
  }

  const onClickReset = () =>{
    setCounter( 0)
  }
  
   return (
    <>
    <h1>{count}</h1>
    <Button onClick={onClickincreament}>+</Button>
    <Button onClick={onClickDecreament}>-</Button>
    <Button onClick={onClickReset}>Reset</Button>


    </>
   ) 
}

export default NavBar;
