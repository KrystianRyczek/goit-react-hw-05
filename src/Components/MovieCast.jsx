
import { useMovieCast } from '../hooks/useMovieCast'

export default function MovieCast(){
//export const MovieCast =()=>{
  const {cast, isLoading, error} = useMovieCast()
  if(cast!=null){
    return (
      <>
      <h2>Cast</h2>
      <ul>
      {cast.map((character)=>{
                            return <li key={character.credit_id}>
                                      <h4>{character.name}</h4>
                                      <img src={`https://image.tmdb.org/t/p/w500${character.profile_path}`} 
                                           alt={`Photo of ${character.name}`}
                                           className="photo" />
                            
                                      <p>Character: {character.character}</p>
                                   </li>})}
      </ul>
      </>)};
}




