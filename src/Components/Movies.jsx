import { Link, useLocation} from "react-router-dom";
import { useSearchMovie } from "../hooks/useSearchMovie"
import  SearchBar from "./SearchBar"


export default function Movies(){
//export const Movies =()=>{
  
  
  const location = useLocation()
  const {handleSearch, movies, isLoading, error, searchParams}= useSearchMovie(location.search)
  

    return  (
      <>
        <SearchBar
          handleSearch={handleSearch}
        />      
        <ul className="search-movie-list">
          {movies.map((movie)=>{
                  return <li className="search-movie-list-item"
                             key={movie.id}>
                            <Link 
                                to={`/movie/${movie.id}`}
                                state={{pathname: location.pathname,
                                        search: location.search,
                                }}>
                                {movie.title}
                            </Link>
                         </li>})}
        </ul>;
      </>

      );
}

