import { useReducer } from 'react';
import {
  UPDATE_TODO,
  ADD_TO_LIST,
  UPDATE_LIST_QUANTITY,
  REMOVE_FROM_LIST,
  ADD_MULTIPLE_TO_LIST,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_LIST,
  TOGGLE_LIST,
} from './actions';

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  switch (action.type) {
    // Returns a copy of state with an update products array. We use the action.products property and spread it's contents into the new array.
    case UPDATE_TODO:
      return {
        ...state,
        todo: [...action.todo],
      };

    case ADD_TO_LIST:
      return {
        ...state,
        listOpen: true,
        list: [...state.list, action.todo],
      };
    case ADD_MULTIPLE_TO_LIST:
      return {
        ...state,
        list: [...state.list, ...action.todo],
      };
    // Returns a copy of state, sets the cartOpen to true and maps through the items in the cart.
    // If the item's `id` matches the `id` that was provided in the action.payload, we update the purchase quantity.
    case UPDATE_LIST_QUANTITY:
      return {
        ...state,
        listOpen: true,
        list: state.list.map((todo) => {
          if (action._id === todo._id) {
            todo.totalQuantity = action.totalQuantity;
          }
          return todo;
        }),
      };

    // First we iterate through each item in the cart and check to see if the `product._id` matches the `action._id`
    // If so, we remove it from our cart and set the updated state to a variable called `newState`
    case REMOVE_FROM_LIST:
      let newState = state.list.filter((todo) => {
        return todo._id !== action._id;
      });

      // Then we return a copy of state and check to see if the cart is empty.
      // If not, we set the cartOpen status to  `true`. Then we return an updated cart array set to the value of `newState`.
      return {
        ...state,
        listOpen: newState.length > 0,
        list: newState,
      };

    case CLEAR_LIST:
      return {
        ...state,
        listOpen: false,
        list: [],
      };

    case TOGGLE_LIST:
      return {
        ...state,
        listOpen: !state.listOpen,
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    // Return the state as is in the event that the `action.type` passed to our reducer was not accounted for by the developers
    // This saves us from a crash.
    default:
      return state;
  }
};

export function useToDoReducer(initialState) {
  return useReducer(reducer, initialState);
}
