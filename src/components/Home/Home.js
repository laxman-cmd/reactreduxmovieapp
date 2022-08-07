import React from 'react'
import MovieList from '../MovieList/MovieList'
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { fetchAsyncMovies,fetchAsyncSeries } from '../../features/movies/movieSlice';
// import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'mission';   //initial text term 
  const seriesText = 'Friends'; //

  //making api call here inside useEffect
  //whenever we get the values from api well send it 
  //to the reducer to update the state using the dispatch method 
  //#dispatching-Actions

  useEffect( () => {
    dispatch(fetchAsyncMovies(movieText)) 
    dispatch(fetchAsyncSeries(seriesText)) 

    // const fetchMovies = async() => {
    //   const response = await movieApi
    //   .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    //   .catch((err) => {
    //     console.log('err :', err)
    //   });
    //   // console.log('Response from api:', response);
    //   //dispatching the action from movieSlice.actions 
    //   dispatch(addMovies(response.data)) // passing the response.data data is the key which contains all the results
    // } 

    // fetchMovies();
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieList />
    </div>
  )
}

export default Home