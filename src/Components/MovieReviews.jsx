import { useMovieReviews } from '../hooks/useMovieReviews'


export default function MovieReviews(){
//export const MovieReviews =(id)=>{
  const {reviews, isLoading, error} = useMovieReviews()
  if(reviews!=null){
    return (
      <>
      <h2>MovieReviews</h2>
      <ul>
      {reviews.map((review)=>{
                            return <li key={review.author}>
                                      <h4>{review.author}</h4>
                                      <p>{review.content}</p>
                                   </li>})}
      </ul>
      </>)};
}
