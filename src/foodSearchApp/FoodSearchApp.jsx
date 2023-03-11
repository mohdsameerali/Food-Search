
import React, { useState } from 'react'
import Products from './Products';
import {css} from "./FoodSearch.css"
import Home from './Home';

export default function FoodSearchApp() {
   
 const[data,setdata]= useState([]);
 const[search,setsearch]=useState("");

 function myfun(e){
  e.preventDefault();
  let sam=fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=2431ceae&app_key=%204580c49ada1357c7c793fbdcabbc4444`)
  .then((response) => response.json()).then((data) => setdata(data.hits))
}
 console.log(search);
  return (
    <>
      <div className='bigcon'>
        <div className='container1'>
            <h1 className='mt-3 mb-3'>Food Search App</h1>
            <form className="form-inline" onSubmit={myfun}>
              <input className="form-control"  size="70" type="text" placeholder="Search" aria-label="Search"  value={search} onChange={(e)=>setsearch(e.target.value)}/>
              <button className="btn btn-outline-successs" onClick={ ()=>{ alert("you clicked") }} type="submit" value="search">Search</button>
            </form>
        </div>
       {data.length>=1?<Products mydata={data}/>:<Home/> } 
     </div>
    </>
  )
}

