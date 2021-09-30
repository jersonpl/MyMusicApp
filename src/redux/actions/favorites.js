export const setFavorites = (favorites) => {
  return {type : "saveFavorites", favorites}
}

export const saveFavorites = (favorites) => {
  return (dispatch) => {
    dispatch(setFavorites(favorites));
  }
}

export const addFavorite = (fav, favorites) => {
  return (dispatch) => {
    dispatch(setFavorites([...favorites, fav]));
  }
}

export const deleteFavorite = (fav, favorites) => {
  return (dispatch) => {
    dispatch(setFavorites(favorites.filter(item => item.id != fav.id)));
  }
}