import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Comments() {
  const [comments, setComments] = useState([])

  const [count, setCount] = useState(1)

  const Count_num = 5
  const lastIndex = count * Count_num;
  const firstIndex = lastIndex - Count_num;
  const records = comments.slice(firstIndex, lastIndex);
  const result = Math.ceil(comments.length / Count_num);
  const numbers = [...Array(result + 1).keys()].slice(1);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then(res => {
      setComments(res.data)
      console.log(res.data);
    })
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
    <div className='mt-5'>
      
          <table >
            <thead>
              <tr>
                <th className='border border-black px-3 py-2'>T/R</th>
                <th className='border border-black px-3 py-2'>Body</th>
                <th className='border border-black px-3 py-2'>Email</th>
                <th className='border border-black px-3 py-2'>Name</th>
                <th className='border border-black px-3 py-2'>postId</th>
              </tr>
            </thead>
            <tbody>
              {
                records?.map((item, index) => {
                  return <tr key={index}>
                    <td className='border border-black px-4 py-3 text-xl'>{index + 1}</td>
                    <td className='border border-black px-4 py-3 text-xl'>{item.body}</td>
                    <td className='border border-black px-4 py-3 text-xl'>{item.email}</td>
                    <td className='border border-black px-4 py-3 text-xl'>{item.nama}</td>
                    <td className='border border-black px-4 py-3 text-xl'>{item.postId}</td>
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