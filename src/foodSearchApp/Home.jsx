import React from 'react'

export default function Home() {
  return (
    <>
    <div className='container' id='homecon'>
    <h3 className='my-3 text-center'>Search  Different Variety Of Pastas, Burgers, Pizzas And Many More</h3>
        <div className='row'>
            <div className='col-4'>
                <img id='homeimg' src='images\sandwich.jpg'/>
            </div>
            <div className='col-4'>
                <img id='homeimg' src='images\mul pizza.jpg'/>
            </div>
            <div className='col-4'>
                <img id='homeimg' src='images\noodles.jpg'/>
            </div>
            <div className='col-6 mt-2'>
                <img id='banner' src='images\bread.jpg'/>
            </div>
            <div className='col-6 mt-2'>
                <img id='banner' src='images\sweet.jpg'/>
            </div>
        </div>
    </div>
    </>
  )
}