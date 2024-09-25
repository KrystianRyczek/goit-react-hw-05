import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
//import { Navigation } from './Components/Navigation'
//import { Home } from './Components/Home'
//import { ErrorMessage } from './Components/ErrorMessage'
//import { Movies } from './Components/Movies'
//import { MovieDetails } from './Components/MovieDetails'
// import { MovieCast } from './Components/MovieCast'
// import { MovieReviews } from './Components/MovieReviews'
import { lazy, Suspense } from "react";
const Navigation = lazy(() => import('./Components/Navigation'));
const Home = lazy(() => import('./Components/Home'));
const ErrorMessage = lazy(() => import('./Components/ErrorMessage'));
const Movies = lazy(() => import('./Components/Movies'));
const MovieDetails = lazy(() => import('./Components/MovieDetails'));
const MovieCast = lazy(() => import('./Components/MovieCast'));
const MovieReviews = lazy(() => import('./Components/MovieReviews'));
function App() {



  return (
    <>
    <BrowserRouter>
      <Navigation/>
      <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="review" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<ErrorMessage/>}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
      
    </>
  )
}

export default App
