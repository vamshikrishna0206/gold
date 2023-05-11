import React from 'react'
import { useState } from 'react'

const Trow = ({item}) => {
    console.log(item)

    let [name,setName]=useState(item.name)
    let [email,setEmail]=useState(item.name)
    let [status,setStatus]=useState(item.name)
    let [gender,setGender]=useState(item.name)

function changeName(e){
    console.log(e.target)
}


  return (

    <tr>
        <td>  {name} </td>

        <td>{email}</td>
 
    <td>{status}</td>
    <td>{gender}</td>
    </tr>
  )
}

export default Trow