import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '../../components/CustomBasic';
import BasicComponent from "../../components/CustomBasic/BasicComponent"
import translate from '../../lang/translate';
import api from '../../utils/api';
import errorRequest from '../../utils/errorRequest';
import request from '../../utils/request';
import TrackComponent from '../../components/Track';
import { Track } from '../../interfaces';

export default ({navigation}) => {
  const [tracks, setTracks] = useState([]);
  const [infoPage, setInfoPage] = useState({offset: 0, total: 0});


  useEffect(()=> {
    init();
  }, [infoPage.offset]);

  const init = async () => {
    const resTracks = await request({link: api.tracks, method: "GET", body: {offset: infoPage.offset, limit: 50}});
    if(resTracks.success){
      let _tracks = resTracks.response.items.map(item => item.track);
      setTracks(prev => [...prev, ..._tracks]);
      setInfoPage(prev => ({...prev, total: resTracks.response.total}))
    }else{
      errorRequest({response: resTracks, navigation});
    }
  }

  return (
    <BasicComponent>
      <View style = {styles.container}>
        <View style = {styles.containerSongs}>
          <Text style = {styles.songsText}>{infoPage.total} {translate("songs")}</Text>
        </View>
        <FlatList 
          data = {tracks}
          keyExtractor={(item, index) => index}
          renderItem = {({item, index})=> <TrackComponent data = {item} />}
          onEndReached = {()=> {
            if(infoPage.total > infoPage.offset) setInfoPage(prev => ({...prev, offset: tracks.length}))
          }}
          onEndReachedThreshold={3}
          initialNumToRender={12} 
          showsVerticalScrollIndicator = {false}    
        />
      </View>
    </BasicComponent>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10
  },
  containerSongs: {
    padding: 10
  },
  songsText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold"
  }
});