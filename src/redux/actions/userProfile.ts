import {UserProfile} from '../../interfaces';
import LocalDB from '../../localDB';
import api from '../../utils/api';
import errorRequest from '../../utils/errorRequest';
import request from '../../utils/request';

const localDB = new LocalDB();

export interface ActionTypeUserProfile {
  type: string;
  userProfile: UserProfile;
}

export const setUserProfile = (userProfile: UserProfile) => {
  return {type: 'saveUserProfile', userProfile};
};

export const getUserProfile = ({navigation}: {navigation?: any}) => {
  return async dispatch => {
    const resUserProfile = await request({link: api.profile});
    if (resUserProfile.success) {
      let userProfile: UserProfile = resUserProfile.response;
      dispatch(setUserProfile(userProfile));
      await localDB.saveData(localDB.tables.userProfile, userProfile);
    } else {
      if (navigation) {
        errorRequest({response: resUserProfile, navigation});
      }
      const userProfile = await localDB.findOne(localDB.tables.userProfile);
      dispatch(setUserProfile(userProfile));
    }
  };
};
