const initialState = [...[...Array(20)].map((item, index) => ({id: index, title: `${index} Eres mi sueño - Versión Radio Edit`, album: "Ilusión", singer: "Fonseca", isFav: index%13 == 0, image: "https://casanare24horas.com/wp-content/uploads/2016/05/3e8c0bc8e16b729921a5b7bd182047f1.jpg"}))];

export default(state = initialState, action) => {
  switch (action.type) {
    case 'saveSongs':
      return action.songs
    default:
      return state
  }
}