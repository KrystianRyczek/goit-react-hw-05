import { useEffect, useState } from 'react'
import { fetchMovieCast} from '../api/api_films'
import { useLocation } from 'react-router-dom'

export const useMovieCast=()=>{
    const [cast, setCast]=useState(null)
    const [isLoading, setIsLoading]=useState(false)
    const [error, setError]=useState(false)
    const location = useLocation()

    useEffect(()=>{
      const getMovies = async () => {
        try{
          setError(false)
          setIsLoading(true);
          const movieCast = await fetchMovieCast(location.state.id)
          setCast(movieCast)
          setError(false)
        }catch(error){
          setCast(null)
          setError(error)
          console.log(error)
        }finally{
          setIsLoading(false);
        }
      };
      getMovies()
    },[])

   return{cast, isLoading, error}

}