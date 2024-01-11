import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function Todo() {
  const [todo, setTodo] = useState([])

  const [count, setCount] = useState(1)

  const Count_num = 20
  const lastIndex = count * Count_num;
  const firstIndex = lastIndex - Count_num;
  const records = todo.slice(firstIndex, lastIndex);
  const result = Math.ceil(todo.length / Count_num);
  const numbers = [...Array(result + 1).keys()].slice(1);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(res => {
      setTodo(res.data)
      console.log(res);
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
    <div className='container-fluid'>
      <button className='btn btn-success' onClick={count1}>←</button>
      <span className=' fs-4'>{count}</span>
      <button className='btn btn-success' onClick={count2}>→</button>
      <div className="row my-5">
        <div className="col-10 offset-4">
          <table className='table table-bordered  table-striped'>
            <thead>
              <tr className='text-center'>
                <th className='border border-black px-3 py-2'>T/R</th>
                <th className='border border-black px-3 py-2'>UserId</th>
                <th className='border border-black px-3 py-2'>Title</th>
                <th className='border border-black px-3 py-2'>completed</th>
              </tr>
            </thead>
            <tbody>
              {
                records?.map((item, index) => {
                  return <tr key={index}>
                    <td className='border border-black px-3 py-2'>{index + 1}</td>
                    <td className='border border-black px-3 py-2'>{item.userId}</td>
                    <td className='border border-black px-3 py-2'>{item.title}</td>
                    <td className='border border-black px-3 py-2'>{item.completed}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}