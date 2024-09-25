import { useEffect, useState } from 'react'
import { fetchSearchMovie } from '../api/api_films'
import { useSearchParams } from "react-router-dom";

export const useSearchMovie=(initialSearchValue)=>{
  const initialPhrase=initialSearchValue.replace("?search=","")

  const [searchPhrase, setSearchPhrase]=useState("")
  const [movies, setMovies]=useState([])
  const [isLoading, setIsLoading]=useState(false)
  const [error, setError]=useState(false)
  const [searchParams, setSearchParams] = useSearchParams();
 
  
  
  if(initialPhrase!="" & initialPhrase!=searchPhrase){
    setSearchPhrase(initialPhrase)
  }

  const handleSearch = (phrase)=>{
    if(phrase.trim()=="") {
       return
    }
    setSearchParams({search: phrase})
    setSearchPhrase(phrase)
  }


  useEffect(()=>{
    const getMovies = async () => {
      try{
        setError(false)
        setIsLoading(true);
        const moviesList = await fetchSearchMovie(searchPhrase)
        setMovies(moviesList)
        setError(false)
      }catch(error){
        setMovies({})
        setError(error)
      }finally{
        setIsLoading(false);
      }
    };
  
    if(searchPhrase.trim()!="")  getMovies()
  },[searchPhrase])
   


  return{handleSearch, movies, isLoading, error, searchParams}
}