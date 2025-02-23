import { useState } from "react";
import "./App.css";
import tabs from "./Data/user";
function App() {
  let [todolist, settodolist] = useState([]);
  let[activeTabs,setactiveTabs]=useState(0);
  let[activecontent,setactivecontent]=useState(tabs[0])




  let changeData=(index)=>{
    setactiveTabs(index)
    setactivecontent(tabs[index])
  }
  let saveToDoList = (event) => {
    event.preventDefault(); // Prevents form refresh

    let toname = event.target.toname.value.trim(); // Fix: Assign before using

    if (toname === "") {
      alert("Please enter a task!");
      return;
    }

    if (!todolist.includes(toname)) {
      let finaltodolist = [...todolist, toname];
      settodolist(finaltodolist);
    } else {
      alert("Already present");
    }

   // Fix: Clears input field after adding task
  };
     let list=todolist.map((value, index) => {

      
   
           return( <Todolistitems key={index} value={value} indexNumber={index} todolist={todolist}
           settodolist={settodolist}
           />)
})
  return (
    <div className="App">
      <div className="tabsouter">
      <h1 style={{textAlign:'left'}}>
        this is about satya 
      </h1>
      <ul>
        {tabs.map((tabsItems,index)=>{
          return (
              <li ><button onClick={()=>changeData(index)} className={activeTabs===index ? 'activeButton': ''}>
                {tabsItems.title}
                </button></li>
          )
        })}
       
        
      </ul>
      {activecontent!==undefined ? <p>{
      activecontent.discription
      }</p> :''}
     
    </div>














      <h1>To-Do List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname" placeholder="Enter task" />
        <button type="submit">Save</button>
      </form>

      <div className="outerdiv">
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;

function Todolistitems({ value,indexNumber,todolist,settodolist }) {

  let[status,setstatus]=useState(false);
  let deleteRow=()=>{
    let finalData=todolist.filter((v,i)=>i!==indexNumber)
     settodolist(finalData)
  }
  let checkstatus=()=>{
    setstatus(!status)
  }
  return (
    <li className={status ? 'completetodo' : ''} onClick={checkstatus}>
      {value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}