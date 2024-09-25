import { useEffect, useState } from 'react'
import { fetchMovieReviews } from '../api/api_films'
import { useLocation } from 'react-router-dom'

export const useMovieReviews=()=>{
    const [reviews, setReviews]=useState(null)
    const [isLoading, setIsLoading]=useState(false)
    const [error, setError]=useState(false)
    const location = useLocation()
    useEffect(()=>{
      const getMovies = async () => {
        try{
          setError(false)
          setIsLoading(true);
          const movieReviews = await fetchMovieReviews(location.state.id)
          setReviews(movieReviews)
          setError(false)
        }catch(error){
          setReviews(null)
          setError(error)
          console.log(error)
        }finally{
          setIsLoading(false);
        }
      };
      getMovies()
    },[])

   return{reviews, isLoading, error}

}