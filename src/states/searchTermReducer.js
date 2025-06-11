const defaultState = "";

const searchTermReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case "writeDownSearchTerm":
      return payload;
    default:
      return state;
  }
};

export default searchTermReducer;
