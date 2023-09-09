import React,{ useEffect, useState } from 'react'
import { getAllBooks } from '../api/books'
import Search from '../components/Search';
import bdata from '../api/data.json'
export default function HomePage() {
    const [data,setData]=useState([]);

    useEffect(() => {
      // getAllBooks().then(items => setData(items))
      // .catch(error => console.error(error));
      setData(bdata)
    },[])

  return (
    <div>
      <Search data={bdata}/>
    </div>
  )
}
