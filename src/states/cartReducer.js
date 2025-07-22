const defaultState = JSON.parse(localStorage.getItem("cart")) || {};

const cartReducer = (state = defaultState, { type, payload = {} }) => {
  const { id, title, price, size, color, amount } = payload;
  switch (type) {
    case "deleteFromCart": {
      // нельзя напрямую менять стейт, его нужно деструктуризировать,
      // создавая его копию, и уже оттуда удаляя товар по его id
      const newState = { ...state };
      delete newState[id];
      // localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    }

    case "addToCart": {
      const newState = {
        ...state,
        [id]: {
          title,
          price,
          size,
          color,
          amount,
        },
      };
      // localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    }
    case "changeAmount": {
      // идем в старый стейт корзины, ищем в нем по [id] эту конкретную карточку, не трогаем старый стейт,
      // а дописываем к нему в нужный ид новую информацию из селекта в поле amount
      const newState = {
        ...state,
        [id]: {
          ...state[id],
          amount,
        },
      };
      // localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    }

    case "changeSize": {
      const newState = {
        ...state,
        [id]: {
          ...state[id],
          size,
        },
      };
      // localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    }

    case "changeColor": {
      const newState = {
        ...state,
        [id]: {
          ...state[id],
          color,
        },
      };
      // localStorage.setItem("cart", JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducer;
