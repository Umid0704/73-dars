import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Posts() {
  const [posts, setPosts] = useState([])

  const [count, setCount] = useState(1)

  const Count_num = 10
  const lastIndex = count * Count_num;
  const firstIndex = lastIndex - Count_num;
  const records = posts.slice(firstIndex, lastIndex);
  const result = Math.ceil(posts.length / Count_num);
  const numbers = [...Array(result + 1).keys()].slice(1);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      setPosts(res.data)
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
    <div>
      
       
          <table >
            <thead>
              <tr className='text-center'>
                <th>T/R</th>
                <th>Body</th>
                <th>Title</th>
                <th>UserId</th>
              </tr>
            </thead>
            <tbody>
              {
                records?.map((item, index) => {
                  return <tr key={index}>
                    <td className='border border-black px-4 py-3 text-xl'>{index + 1}</td>
                    <td className='border border-black px-4 py-3 text-xl'>{item.body}</td>
                    <td className='border border-black px-4 py-3 text-xl'>{item.title}</td>
                    <td className='border border-black px-4 py-3 text-xl'>{item.userId}</td>
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