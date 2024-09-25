import { useEffect, useState } from 'react'
import { fetchRandomVideo } from '../api/api_films'


export const useMovies=()=>{
    const [movies, setMovies]=useState([])
    const [isLoading, setIsLoading]=useState(false)
    const [error, setError]=useState(false)

    useEffect(()=>{
      const getMovies = async () => {
        try{
          setError(false)
          setIsLoading(true);
          const moviesList = await fetchRandomVideo()
          setMovies(moviesList.results)
          setError(false)
        }catch(error){
          setMovies({})
          setError(error)
        }finally{
          setIsLoading(false);
        }
      };
      getMovies()
    },[])

   return{movies, isLoading, error}

}
