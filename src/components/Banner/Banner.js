import React,{useEffect,useState} from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../Axios'
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState()
useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 20);
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data)
        setMovie(response.data.results[randomIndex])
    })

}, [])
  return (
    <div  style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>
    {movie?movie.title:""}
            </h1>
            <div className='banner-btns'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
                
            </div>
            <h1 className='description'>{movie?movie.overview:""} </h1>
                   </div>
                   <div className='fade-bottom'/>
      
    </div>
  )
}

export default Banner
