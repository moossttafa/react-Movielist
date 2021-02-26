import React, { useReducer, createContext, useEffect } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
    watchlist: localStorage.getItem("watchlist")
      ? JSON.parse(localStorage.getItem("watchlist"))
      : [],
    watched: localStorage.getItem("watched")
      ? JSON.parse(localStorage.getItem("watched"))
      : [],
  };
  
  // create context
  export const GlobalContext = createContext(initialState);
  
  // provider components
  export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    useEffect(() => {
      localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
      localStorage.setItem("watched", JSON.stringify(state.watched));
    }, [state]);
  
    // actions
       //addMovieToWatchlist
    const addMovieToWatchlist = (movie) => {
      dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    };
  
       //removeMovieFromWatchlist 
    const removeMovieFromWatchlist = (id) => {
        dispatch({type : "REMOVE_MOVIE_FROM_WATCHLIST" , payload : id});
    }
        //addMovieToWatched

        const addMovieToWatched = (movie) => {
                dispatch({type: "ADD_MOVIE_TO_WATCHED" , payload : movie});
        }
        //move To Watchlist
        const moveToWatchlist = (movie) =>{
            dispatch({type: "MOVE_TO-WATCHLIST" , payload : movie})  ;  
        }
        //remove From Watched
        const removeFromWatched = (id) =>{
            dispatch({type: "RWMOVE_FROM_WATCHLIST" , payload : id})   ; 
        }

    return (
      <GlobalContext.Provider
        value={{
          watchlist: state.watchlist,
          watched: state.watched,
          addMovieToWatchlist,
          removeMovieFromWatchlist,
          addMovieToWatched,
          moveToWatchlist,
          removeFromWatched,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    );
  };