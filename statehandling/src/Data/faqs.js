import React, { useState } from 'react'
import question from "./faqsquest.jsx"; // Ensure correct import
export default function () {
    let[current,setcurrent]=useState(question[0].id);

let items=question.map((itemsdata,i)=>{

   let itemDetails={
    itemsdata,
    current,
    setcurrent
   }
    return( <Faqitems itemDetails={itemDetails} key={i}/>

    )
})
  return (
    <div>
     <h1>Frequently Asked Questions (FAQs)</h1>
        <div className="faqouter">
        {items}
        </div>
    </div>
  )
}
function Faqitems({itemDetails}){
    return (
        <div className="faqitem" >
                <h2 onClick={()=>itemDetails.setcurrent(itemDetails.itemsdata.id)}>{itemDetails.itemsdata.title}</h2>
                <p className={itemDetails.current===itemDetails.itemsdata.id ? 'activeAnswer':''}>{itemDetails.itemsdata.description}</p>
              </div>
    )
}
