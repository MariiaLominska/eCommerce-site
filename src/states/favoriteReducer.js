const defaultState = { favorite: [] };

const favoriteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "favorite": {
      return state.favorite.includes(action.payload)
        ? {
            ...state,
            favorite: state.favorite.filter((id) => id !== action.payload),
          }
        : { ...state, favorite: [...state.favorite, action.payload] };
    }
    default:
      return state;
  }
};

export default favoriteReducer;
