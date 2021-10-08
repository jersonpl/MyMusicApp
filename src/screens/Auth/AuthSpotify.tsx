import React, {useState} from 'react';
import {WebView, WebViewNavigation} from 'react-native-webview';
import loginSpotifyConfig, {
  redirectUri,
} from '../../functions/loginSpotifyConfig';
import queryString from 'query-string';
import LocalDB from '../../LocalDB';
import {Auth} from '../../interfaces';
import IsLoading from '../../components/IsLoading';
import {useDispatch} from 'react-redux';
import {getUserProfile} from '../../redux/actions/userProfile';

const localDB = new LocalDB();

export default ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const onNavigationStateChange = async (
    navigationState: WebViewNavigation,
  ) => {
    const url = navigationState.url;

    const params = parseURLParams(url);
    if (params.access_token) {
      setIsLoading(true);
      await localDB.saveData(localDB.tables.auth, params);
      dispatch(getUserProfile({navigation}));
      navigation.reset({index: 0, routes: [{name: 'SignedInStack'}]});
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <IsLoading visible />;
  }
  return (
    <WebView
      source={{uri: loginSpotifyConfig}}
      onNavigationStateChange={onNavigationStateChange}
    />
  );
};

const parseURLParams = (url: string): Auth => {
  const parsed = queryString.parseUrl(url);

  if (parsed.url === redirectUri) {
    let params = parsed.query as unknown as Auth;
    let _params = queryString.parseUrl(url.replace('#', '?'))
      .query as unknown as Auth;
    if (params.access_token) {
      return params;
    } else if (_params.access_token) {
      return _params;
    }
  }

  return {
    access_token: undefined,
    token_type: undefined,
    expires_in: undefined,
  };
};
