import React, { useEffect, useState } from 'react';
import { WebView, WebViewNavigation } from 'react-native-webview';
import loginSpotifyConfig, { redirectUri } from '../../functions/loginSpotifyConfig';
import queryString from 'query-string';
import LocalDB from '../../LocalDB';
import { Auth, UserProfile } from '../../interfaces';
import IsLoading from '../../components/IsLoading';
import request from '../../utils/request';
import api from '../../utils/api';
import errorRequest from '../../utils/errorRequest';
import { useDispatch } from 'react-redux';
import { saveUserProfile } from '../../redux/actions/userProfile';

const localDB = new LocalDB();

export default ({navigation}) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false);

  const onNavigationStateChange = async (navigationState: WebViewNavigation) => {
    const url = navigationState.url;
  
    const params = parseURLParams(url);
    if(params.access_token){
      setIsLoading(true);

      await localDB.saveData(localDB.tables.auth, params);

      const resUserProfile = await request({link: api.profile});
      console.log(resUserProfile);
      if(resUserProfile.success){
        let userProfile: UserProfile = resUserProfile.response;
        console.log({userProfile});
        dispatch(saveUserProfile(userProfile));
        await localDB.saveData(localDB.tables.userProfile, userProfile);
        navigation.reset({ index: 0, routes: [{ name: 'SignedInStack' }]});
      }else{
        errorRequest({response: resUserProfile, navigation});
      }
      
      setIsLoading(false);
    }
  };

  if(isLoading) return <IsLoading visible />
  return (
    <WebView 
      source={{ uri: loginSpotifyConfig }} 
      onNavigationStateChange={onNavigationStateChange}
    />
  )
}

const parseURLParams = (url: string): Auth => {
  const parsed = queryString.parseUrl(url);

  if(parsed.url == redirectUri){
    let params = parsed.query as unknown as Auth;
    let _params = queryString.parseUrl(url.replace("#","?")).query as unknown as Auth;
    if(params.access_token){
      return params
    }else if(_params.access_token){
      return _params
    }
  }
  
  return {access_token: undefined, token_type: undefined, expires_in: undefined};
}