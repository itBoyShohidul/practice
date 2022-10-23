export const reducer = (state, action) => {
  const { value, type } = action;
  switch (type) {
    case "increment":
      return { ...state, count: state.count + value };

    case "decrement":
      return { ...state, count: state.count - value };

    case "reset":
      return { ...state, count: 0 };

    default:
      return state;
  }
};
