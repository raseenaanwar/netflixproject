import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../Axios'

function RowPost(props) {
    const [movies,setMovies]=useState([])
    const [urlId,setUrlId]=useState('')
    // const [urlId,setUrlId]=useState('')
    useEffect(() => {
    axios.get(props.url).then(response=>{
        console.log(response.data)
        setMovies(response.data.results)
    }).catch(err=>{
        // alert('Network Error')
    })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleMovie = (id) => {
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
          .then((response) => {
            console.log(response.data);
            if (response.data.results.length !== 0) {
              setUrlId(response.data.results[0]);
            } else {
              console.log("No videos available for this movie.");
            }
          })
          .catch((error) => {
            console.error('Error fetching movie videos:', error);
          });
      };
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {
            movies.map((obj,index)=>
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPoster':"poster"} src={`${imageUrl+obj.backdrop_path}`} alt="poster"></img>
        
            )
        }
        


      </div>
{urlId&&<Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost
