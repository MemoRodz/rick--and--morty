import {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  FILTER,
  ORDER,
  RESET,
} from "./action_type";
//import axios from "axios";

const STORAGE_KEY = "rick_and_morty_favorites";

function getStoredFavorites() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

function saveStoredFavorites(favorites) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}

export function addFavorites(character) {
  return function (dispatch) {
    const favorites = getStoredFavorites();

    const exists = favorites.some((fav) => fav.id === character.id);
    if (exists) {
      return;
    }

    const updatedFavorites = [...favorites, character];
    saveStoredFavorites(updatedFavorites);

    dispatch({
      type: ADD_FAVORITES,
      payload: character,
    });
  };
}

export function deleteFavorites(id) {
  return function (dispatch) {
    const favorites = getStoredFavorites();
    const updatedFavorites = favorites.filter((fav) => fav.id !== id);

    saveStoredFavorites(updatedFavorites);

    dispatch({
      type: DELETE_FAVORITES,
      payload: id,
    });
  };
}
/*
export function filterCards(status) {
  return {
    type: FILTER,
    payload: status,
  };
}
*/
export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}

/*
  Crear una action-creator con el nombre "filterCards". Esta action-creator recibirá por parámetro un status. 
  La action que retornará tendrá un type llamado "FILTER", y dentro del payload irá el género recibido.

Crear una action-creator con el nombre "orderCards". Esta action-creator recibirá por parámetro un id. 
La action que retornará tendrá un type llamado "ORDER", y dentro del payload irá el id recibido.
  */
