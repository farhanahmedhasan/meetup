const localStorageFavourites = JSON.parse(localStorage.getItem('favourites'));

const initialState = {
  favourites: localStorageFavourites || [],
  totalFavourites: !localStorageFavourites ? 0 : localStorageFavourites.length,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      localStorage.setItem('favourites', JSON.stringify([...state.favourites, action.payload]));
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
        totalFavourites: state.totalFavourites + 1,
      };

    case 'REMOVE_FAVOURITE':
      const newFavourites = state.favourites.filter((favourite) => favourite.id !== action.payload);
      localStorage.setItem('favourites', JSON.stringify(newFavourites));
      return {
        ...state,
        favourites: newFavourites,
        totalFavourites: state.totalFavourites - 1,
      };

    default:
      return {
        ...state,
      };
  }
};

export { initialState, reducer };
