export default(state = null, action) => {
  switch (action.type) {
    case 'saveUser':
      return action.user
    default:
      return state
  }
}