export default(state = [], action) => {
  switch (action.type) {
    case 'saveFavorites':
      return action.favorites
    default:
      return state
  }
}