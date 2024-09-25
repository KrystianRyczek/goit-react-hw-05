import { useMovies } from '../hooks/useMovies'
import { Link, useLocation} from "react-router-dom";
export default function Home(){
//export const Home =()=>{
  const {movies, isLoading, error} = useMovies()
  const location = useLocation()
    return (
    <>
    <h2 className='heading-trend-list'>Trending today</h2>
    <ul className='trend-movie-list'>
              
              {movies.map((movie)=>{
                      return <li className='trend-movie-list-item'
                                key={movie.id}>
                                <Link 
                                    to={`/movie/${movie.id}`}
                                    state={{pathname: location.pathname,
                                            search: location.search,
                                    }}>
                                    {movie.title}
                                </Link>
                             </li>})}
            
          </ul>
    
    
    
    
    </>);
}

