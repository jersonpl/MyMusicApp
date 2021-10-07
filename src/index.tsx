import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserProfile } from './interfaces';
import LocalDB from './LocalDB';
import { NavigationRoot } from './navigation';
import { getUserProfile } from './redux/actions/userProfile';

const localDB = new LocalDB();

export default () => {
  const dispatch = useDispatch();
  const [log, setLog] = useState({log: false, verifySesion: false});

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    let auth = await localDB.findOne(localDB.tables.auth);
    if(auth && auth.access_token){
      dispatch(getUserProfile({}));
      setLog(prev => ({...prev, verifySesion: true, log: true}));
    }else{
      await localDB.deleteAllDB();
      setLog(prev => ({...prev, verifySesion: true}));
    }
  }

  if(!log.verifySesion) return null;
  return (
    <NavigationRoot log = {log.log} />
  )
}