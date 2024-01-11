import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Album() {
  const [albums, setAlbums] = useState([])

  const [count, setCount] = useState(1)

  const Count_num = 10
  const lastIndex = count * Count_num;
  const firstIndex = lastIndex - Count_num;
  const records = albums.slice(firstIndex, lastIndex);
  const result = Math.ceil(albums.length / Count_num);
  const numbers = [...Array(result + 1).keys()].slice(1);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/albums").then(res => {
      setAlbums(res.data)
    });
  }, [])

  const count1 = () => {
    if (count > 1) {
      setCount(prev => prev - 1)
    }
  }
  const count2 = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div >
      
          <table >
            <thead>
              <tr className='text-center fs-5'>
                <th className='px-3 py-2 border border-black'>T/R</th>
                <th className='px-3 py-2 border border-black'>Title</th>
              </tr>
            </thead>
            <tbody>
              {
                records?.map((item, index) => {
                  return <tr  key={index}>
                    <td className='px-3 py-2 border border-black'>{index + 1}</td>
                    <td className='px-3 py-2 border border-black'>{item.title}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
          <div className='text-center mt-2'>
         <button className='bg-blue-300 px-3 py-[4px] rounded-[10px]' onClick={count1}>←</button>
      <span className='px-3'>{count}</span>
      <button className='bg-blue-300 px-3 py-[4px] rounded-[10px]'  onClick={count2}>→</button>
         </div>
        </div>
     
  )
}