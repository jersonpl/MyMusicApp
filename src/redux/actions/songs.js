export const setSongs = (songs) => {
  return {type : "saveSongs", songs}
}

export const saveSongs = (songs) => {
  return (dispatch) => {
    dispatch(setSongs(songs));
  }
}