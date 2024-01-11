import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Photo() {
  const [photos, setPhotos] = useState([])


  const [count, setCount] = useState(1)

  const Count_num = 20
  const lastIndex = count * Count_num;
  const firstIndex = lastIndex - Count_num;
  const records = photos.slice(firstIndex, lastIndex);
  const result = Math.ceil(photos.length / Count_num);
  const numbers = [...Array(result + 1).keys()].slice(1);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
      setPhotos(res.data)
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
   
     
      <div className="row my-5">
        {
          records?.map((item, index) => {
            return <div >
              <div className=' my-3' key={index}>
                <div >
                  <h3>{index + 1}</h3>
                </div>
                <div >
                  <h3>{item.albumID}</h3>
                  <img src={item.thumbnailUrl} alt="" />
                  <h3>{item.title}</h3>
                </div>
                <div >
                  <img src={item.url} alt="" className=' w-75 h-75' />
                </div>
              </div>
            </div>
          })
        }
        <div className='text-center mt-2'>
         <button className='bg-blue-300 px-3 py-[4px] rounded-[10px]' onClick={count1}>←</button>
      <span className='px-3'>{count}</span>
      <button className='bg-blue-300 px-3 py-[4px] rounded-[10px]'  onClick={count2}>→</button>
         </div>
      </div>
  )
}