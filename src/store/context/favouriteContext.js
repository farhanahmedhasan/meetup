import React, { useContext, useReducer } from 'react';
import { initialState, reducer } from '../reducers/favouriteReducer';

const FavouriteContext = React.createContext();

//Handlers For The context
const addFavourite = (dispatch, favouriteMeetup) => {
  dispatch({ type: 'ADD_FAVOURITE', payload: favouriteMeetup });
};

const removeFavourite = (dispatch, meetupId) => {
  dispatch({ type: 'REMOVE_FAVOURITE', payload: meetupId });
};

//Context Providers
const FavouriteContextProvider = (children) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch, addFavourite, removeFavourite };
  return <FavouriteContext.Provider value={value} {...children} />;
};

//Create a custom hook to access the context
const useFavouriteContext = () => {
  const favouriteContext = useContext(FavouriteContext);
  if (!favouriteContext) {
    throw new Error(`useFavouriteContext must be used within a useFavouriteContext`);
  }
  return favouriteContext;
};

export { FavouriteContextProvider, useFavouriteContext };
