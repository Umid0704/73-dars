import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Album from './Album'
import axios from 'axios'



export default function Users() {
  const [users, setUsers]=useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
      setUsers(response.data)

    })
  },[])
  console.log(users);
  return (
    <div>
    <table className='table border border-black'>
      <thead>
        <tr className='border border-black'>
          <th className='border border-black px-3 py-2'>T/R</th>
          <th className='border border-black px-3 py-2'>Name </th>
          <th className='border border-black px-3 py-2'>User name </th>
          <th className='border border-black px-3 py-2'>Website</th>
          <th className='border border-black px-3 py-2'>Phone</th>
          <th className='border border-black px-3 py-2'>Address</th>
          <th className='border border-black px-3 py-2'>Email</th>
          <th className='border border-black px-3 py-2'>Company</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((item, index)=>{
            return(
              <tr  key={index}>
              <td className='border border-black px-3 py-2' >{index + 1}</td>
              <td className='border border-black px-3 py-2' >{item.name}</td>
              <td className='border border-black px-3 py-2' >{item.username}</td>
              <td className='border border-black px-3 py-2' >{item.website}</td>
              <td className='border border-black px-3 py-2' >{item.phone}</td>
              <td className='border border-black px-3 py-2' >{item.address.city}</td>
              <td className='border border-black px-3 py-2' >{item.email}</td>
              <td className='border border-black px-3 py-2' >{item.company.name}</td>
            </tr>
            )
          })
        }
      </tbody>
    </table>
     
    </div>
  )
}
