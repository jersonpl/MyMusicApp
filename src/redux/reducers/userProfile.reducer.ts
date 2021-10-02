import { UserProfile } from "../../interfaces"

const initialState: UserProfile = {
  id: "",
  country: "",
  display_name: "",
  email: "",
  explicit_content: [],
  followers: {total: 0},
  product: "",
  images: [],
  uri: ""
}

export default(state: UserProfile = initialState, action) => {
  switch (action.type) {
    case 'saveUserProfile':
      return action.userProfile
    default:
      return state
  }
}