import { useEffect, useState } from 'react'
import { fetchMovieDetails } from '../api/api_films'

export const useMovie=(id)=>{
    const [movie, setMovie]=useState(null)
    const [isLoading, setIsLoading]=useState(false)
    const [error, setError]=useState(false)

    useEffect(()=>{
      const getMovies = async () => {
        try{
          setError(false)
          setIsLoading(true);
          const selectedMovie = await fetchMovieDetails(id)
          //const selectedMovie = await fetchRandomVideo()
          setMovie(selectedMovie)
          setError(false)
        }catch(error){
          setMovie({})
          setError(error)
          console.log(error)
        }finally{
          setIsLoading(false);
        }
      };
      getMovies()
    },[])

   return{movie, isLoading, error}

}