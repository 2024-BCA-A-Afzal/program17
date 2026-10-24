export const initialState = [];

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD": {
      const product =
        action.product ||
        action.payload?.product ||
        action.payload;

      if (!product) return state;

      const existing = state.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...product, quantity: 1 }];
    }

    case "INCREASE":
      return state.map((item) =>
        item.id === action.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "DECREASE":
      return state
        .map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

    case "REMOVE":
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
}

export const reducer = cartReducer;
export default cartReducer;
