const defaultState = {};

const cartReducer = (state = defaultState, { type, payload = {} }) => {
  const { id, title, price, size, color, amount } = payload;
  switch (type) {
    case "deleteFromCart": {
      // нельзя напрямую менять стейт, его нужно деструктуризировать,
      // создавая его копию, и уже оттуда удаляя товар по его id
      const newState = { ...state };
      delete newState[id];
      return newState;
    }
    case "addToCart": {
      return {
        ...state,
        [id]: {
          title,
          price,
          size,
          color,
          amount,
        },
      };
    }
    case "changeAmount": {
      // идем в старый стейт корзины, ищем в нем по [id] эту конкретную карточку, не трогаем старый стейт,
      // а дописываем к нему в нужный ид новую информацию из селекта в поле amount
      return {
        ...state,
        [id]: {
          ...state[id],
          amount,
        },
      };
    }

    case "changeSize": {
      return {
        ...state,
        [id]: {
          ...state[id],
          size,
        },
      };
    }

    case "changeColor": {
      return {
        ...state,
        [id]: {
          ...state[id],
          color,
        },
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
