import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '../../components/CustomBasic';
import BasicComponent from "../../components/CustomBasic/BasicComponent"
import translate from '../../lang/translate';
import TrackComponent from '../../components/Track';
import { Track } from '../../interfaces';
import { addOrRemoveTrack, changeTracksOffset, getTracks, removeTrackFromFav } from '../../redux/actions/tracks';
import { TrackReducer } from '../../redux/reducers/tracks.reducer';

export default ({navigation}) => {
  const dispatch = useDispatch()
  const [tracks] = useSelector(({tracks} : {tracks: TrackReducer}) => [tracks]);


  useEffect(()=> {
    dispatch(getTracks({navigation, tracks}));
  }, []);

  return (
    <BasicComponent>
      <View style = {styles.container}>
        <View style = {styles.containerSongs}>
          <Text style = {styles.songsText}>{tracks.total} {translate("songs")}</Text>
        </View>
        <FlatList 
          data = {tracks.items}
          keyExtractor={(item, index) => index}
          renderItem = {({item, index})=> 
            <TrackComponent 
              key = {index} 
              data = {item} 
              addOrRemoveFav = {({track, isFav} : {track: Track, isFav: boolean})=> dispatch(addOrRemoveTrack({track, isFav, tracks}))} 
            />
          }
          onEndReached = {()=> {
            if(tracks.total > tracks.items.length) dispatch(changeTracksOffset({tracks, offset: tracks.items.length, navigation}))
          }}
          onEndReachedThreshold={1}
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