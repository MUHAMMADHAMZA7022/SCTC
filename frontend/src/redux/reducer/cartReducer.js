import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  CART_RESET,
  CHECK_OUT ,
} from "../Constant/cartConstants";

export const cartReducer = (
  state = { cartItems: [], checkout: {} },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const isItemExist = state.cartItems.find(
        (i) => i.course === item.course
      );
      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.course === isItemExist.course ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.course !== action.payload),
      };
    case CART_RESET:
      return {
        ...state,
        success: false,
      };

    case CHECK_OUT :
      return {
        ...state,
        checkout: action.payload,
      };
      default:
        return state;
  }}