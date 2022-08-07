import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi'
import {APIKey} from '../../common/apis/MovieApiKey'
//AsyncAction creator using MiddlewareThunk
//getting the data from the api 
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
    async(term) => {
        // const movieText = 'Harry';
          const response = await movieApi
          .get(`?apiKey=${APIKey}&s=${term}&type=movie`)
        //   .catch((err) => {
        //     console.log('err :', err)
        //   });
          return response.data;
    }
)
export const fetchAsyncSeries = createAsyncThunk('movies/fetchAsyncSeries',
    async(term) => {
        // const seriesText = 'Friends';
          const response = await movieApi
          .get(`?apiKey=${APIKey}&s=${term}&type=series`)
          return response.data;
    }
)
export const fetchAsyncMSDetails = createAsyncThunk('movies/fetchAsyncMSDetails',
    async(id) => {
          const response = await movieApi
          .get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
          return response.data;
    }
)
const initialState = {
        movies:{},
        series:{},
        selectedMSDetails:{},
        // loader:false,
}
 const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{
            state.movies= payload
        },
        removeSelectedMSDetails: (state) => {
            state.selectedMSDetails={}
        }
    },
    extraReducers:{
        //fetchAsyncMovies will have additional action creators
        //which define the lifeCycle of an async request 
        [fetchAsyncMovies.pending]:() => {
            console.log('pending')
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload}) => {
            console.log("fetched Successfully")
            return {...state, movies:payload}
        },
        [fetchAsyncMovies.rejected]:() => {
            console.log('Rejected')
            
        },
        [fetchAsyncSeries.fulfilled]:(state,{payload}) => {
            console.log("fetched Successfully")
            return {...state, series:payload}
        },
        [fetchAsyncMSDetails.fulfilled]:(state,{payload}) => {
            console.log("fetched Successfully")
            return {...state, selectedMSDetails:payload}
        },
    }
});

export const {addMovies} = movieSlice.actions
export const {removeSelectedMSDetails} = movieSlice.actions

//getting values from store
export const getAllMovies = (state) => state.moviesr.movies
export const getAllSeries = (state) => state.moviesr.series
export const getAllselectedMSDetails = (state) => state.moviesr.selectedMSDetails

// (state) => state.NameoftheReducer?OR?sliceName.propertyName

export default movieSlice.reducer