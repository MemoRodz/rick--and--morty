import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  ORDER,
  FILTER,
  RESET,
} from "./action_type";

const initialState = {
  myFavorites: [],
  myFavoritesOrigin: [],
};

export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAVORITES: {
      const exists = state.myFavoritesOrigin.some((ch) => ch.id === payload.id);
      if (exists) {
        return state;
      }

      const updatedFavorites = [...state.myFavoritesOrigin, payload];

      return {
        ...state,
        myFavorites: updatedFavorites,
        myFavoritesOrigin: updatedFavorites,
      };
    }

    case DELETE_FAVORITES: {
      const updatedFavorites = state.myFavoritesOrigin.filter(
        (ch) => ch.id !== payload
      );

      return {
        ...state,
        myFavorites: updatedFavorites,
        myFavoritesOrigin: updatedFavorites,
      };
    }

    case FILTER: {
      const filteredFavorites = state.myFavoritesOrigin.filter(
        (ch) => ch.gender === payload
      );

      return {
        ...state,
        myFavorites: filteredFavorites,
      };
    }

    case ORDER: {
      const orderedFavorites = [...state.myFavorites].sort((a, b) => {
        if (payload === "Ascendente") {
          return a.id - b.id;
        }

        if (payload === "Descendente") {
          return b.id - a.id;
        }

        return 0;
      });

      return {
        ...state,
        myFavorites: orderedFavorites,
      };
    }

    case RESET:
      return {
        ...state,
        myFavorites: [...state.myFavoritesOrigin],
      };

    default:
      return state;
  }
}