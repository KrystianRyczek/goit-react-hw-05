import axios from "axios";






export const fetchRandomVideo = async () =>{
    const respons = await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=e3a12e82985e37037af7ddd92b1de4c0")
    return respons.data
}

export const fetchMovieDetails = async (id) =>{

    const respons = await axios.request(`https://api.themoviedb.org/3/movie/${id}?api_key=e3a12e82985e37037af7ddd92b1de4c0&append_to_response=videos,images`)
    return respons.data
} 

export const fetchSearchMovie = async (phrase) =>{

    const respons = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e3a12e82985e37037af7ddd92b1de4c0&query=${phrase}&include_adult=false&language=en-US&page=1`)
    return respons.data.results
} 

export const fetchMovieReviews = async (id) =>{

    const respons = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=e3a12e82985e37037af7ddd92b1de4c0&language=en-US&page=1`)
    return respons.data.results
} 
export const fetchMovieCast = async (id) =>{

    const respons = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=e3a12e82985e37037af7ddd92b1de4c0&language=en-US&page=1`)
    return respons.data.cast
} 
