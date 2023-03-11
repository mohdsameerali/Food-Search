import React from 'react'

export default function Products({mydata}) {
  return (
    <>
    <div className='container-fluid'>
      <div className='row '>
      {mydata.map((i)=>
        <div className='col-2 mt-5'>
          <img src={i.recipe.image}/>
          <h6 className='label'>{i.recipe.label}</h6>
          <h6 className='discrip'>calories:{Math.round(i.recipe.calories) }</h6>
          <button className='ml-5 bg-primary'>order now</button>
        </div>)
        
      }
      </div>
    </div>
    </>
  )
}









