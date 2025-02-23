
import { useState } from 'react';
import './App.css';
import {Header} from './Header.jsx';
function App() {
  let temp='';
  let[count,setcount]=useState(1);
  let[pshow,setpshow]=useState(true);
   if(pshow)
   {
    //  temp=<>
    //   <button className='bg-[red] p-[10px] mr-[4]' onClick={()=>setpshow(!pshow)}>Hide</button>
    //   <p>welcome to ws</p>
      
    //   </>
    temp=<Card/>
     
   }
   else
   {
    temp='';
   }




   let display=()=>{
     
     setcount(count+1)
   }
   let addDate=(a,b)=>{
      alert(` ${a} and ${b}` );
   }


  return (
    
    <div className="App">
      {temp}

   <div> {count}</div>
     
  <button className='bg-[red] p-[10px] mr-4' onClick={()=>{addDate(10,20)}}>Add Data</button>
     <button className='bg-[red] p-[10px]' onClick={display}>save as</button>
      
      <img width={300}  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrZqTCInyg6RfYC7Ape20o-EWP1EN_A8fOA&s' alt='dog'/>
      <Header/>
     <h1 className='text-[40px] text-red-900 font-bold'>satya</h1>
    </div>
  );
}

export default App;


function Card(){
  return (
    <h1>welcome to hoops</h1>
  )
}