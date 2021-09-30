import React, { useEffect, useState } from 'react';
import { NavigationRoot } from './navigation';

export default () => {
  const [log, setLog] = useState({log: false, verifySesion: false});

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    setLog(prev => ({...prev, verifySesion: true}));
  }

  if(!log.verifySesion) return null;
  return (
    <NavigationRoot log = {true} />
  )
}