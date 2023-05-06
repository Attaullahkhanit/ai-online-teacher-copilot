import React from 'react';
import './ProUpgrade.css';
import Dashbaord from '../Dashboard/Dashboard';
import { parse } from 'popper/farms/saucelabs';

function ProUpgrade() {

  const students = [
    {
        name: 'Bike', price: 100
    },
    {
        name: "TV", price: 200
    }, 
    {
        name: 'Album', price: 10
    },
    {
        name: 'Book', price: 5
    },
    {
        name: 'Phone', price: 500
    },
    {
        name: 'Computer', price: 1000
    },
    {
        name: 'Keyboard', price: 25
    },
  ]
  const findItems = students.find((item) => {
    return item.name === 'Computer'
  })

  const clickButton = () => {
    console.log(findItems)
  }
  return (
    <>
        <Dashbaord>
            <h2>Upgrade Page</h2>
            <button onClick={clickButton} className='btn btn-warning'>
                Click Me
            </button>
        </Dashbaord>
    </>
  )
}

export default ProUpgrade