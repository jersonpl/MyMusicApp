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

export const getUserProfile = ({
  navigation,
  onFinish,
}: {
  navigation?: any;
  onFinish: () => void;
}) => {
  return async (dispatch: any) => {
    const resUserProfile = await request({link: api.profile});
    if (resUserProfile.success) {
      let userProfile: UserProfile = resUserProfile.response;
      console.log({userProfile});
      dispatch(setUserProfile(userProfile));
      await localDB.saveData(localDB.tables.userProfile, userProfile);
      onFinish();
    } else {
      if (navigation) {
        errorRequest({response: resUserProfile, navigation});
      }
      const userProfile = await localDB.findOne(localDB.tables.userProfile);
      if (userProfile) {
        dispatch(setUserProfile(userProfile));
      }
    }
  };
};
