import { UserProfile } from "../../interfaces"

export const setUserProfile = (userProfile: UserProfile) => {
  return {type : "saveUserProfile", userProfile}
}

export const saveUserProfile = (userProfile: UserProfile) => {
  return (dispatch) => {
    dispatch(setUserProfile(userProfile));
  }
}