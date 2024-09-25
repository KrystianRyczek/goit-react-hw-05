import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useMovie } from "../hooks/useMovie";
import { Link, Outlet } from "react-router-dom"
export default function MovieDetails(){
//export const MovieDetails =()=>{
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick =()=> {
          navigate(`${location.state.pathname+location.state.search}`)
  }

   const {id} = useParams()
   const {movie, isLoading, error} = useMovie(id)
   
   if(movie=== null){
    return <p>is loading...</p>
   }
  
   const genersAcc = movie.genres.reduce(
    (string, currentValue) => string  + currentValue.name + ", ",
    "")
   return (<>
             <button
                  onClick={handleClick} 
                  className="button-back"
             >Back</button>
             <div className="movie-details-box">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                   alt={`Poster of ${movie.title}`}
                   className="poster" />
              <div >
                <h2>{movie.title}</h2>
                <p>User score {movie.vote_average * 10} %</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h4>Geners</h4>
                <p>{genersAcc.slice(0, -2)}</p>
              </div>
             </div>
             <div className='more-details-box'>
              <h3 className="more-details-heading">Additional information</h3>
              <ul className='more-details-list'>
                <li>
                  <Link 
                      to={`/movie/${movie.id}/cast`}
                      state={{pathname: location.state.pathname,
                              search: location.state.search,
                              id: id
                  }}>
                      Cast
                  </Link>
                </li>
                <li>
                  <Link 
                      to={`/movie/${movie.id}/review`}
                      state={{pathname: location.state.pathname,
                        search: location.state.search,
                        id: id,
                  }}>
                      Reviews
                  </Link>
                </li>
              </ul>
             </div>
             <Outlet/>
          </>);
}

