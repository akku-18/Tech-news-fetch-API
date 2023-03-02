import React from 'react'
import { useEffect } from 'react';

export default function Stories() {

  let API = "https://hn.algolia.com/api/v1/search?query=technology";

  const FetchApiData = async (url) => {    
    try{
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

    } catch(err){
      console.log(err);
    }
  }

  useEffect(() =>{
    FetchApiData(API);
  },[]);  // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <div> 
        <h1>Stories</h1>
        <h3>My tech news Post</h3>  
    </div>
  )
}
