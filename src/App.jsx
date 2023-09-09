import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
 function handleClick (){
  alert('button clicked')
 }
 const handleClick2 = () => {
alert('button clicked 2')
 }
 const adToFive = (num) => {
alert(num + 5)
 }

  return (
    <>
    
      <h1> React core concepts 2</h1>
      <Friends></Friends>
     <Users></Users>
      <Team></Team>
      <Counter></Counter>
    <button style={{ background:'green' }} onClick={handleClick}>Click Me</button>
    <button onClick={handleClick2}> click 2</button>
    <button onClick={()=>{alert('third clicked')}}> click 3</button>
    <button onClick={ () => adToFive(3)}>Five</button>
    </>
  )
}

export default App
