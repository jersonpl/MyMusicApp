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
import Player from '../../components/Player';
import { saveTrackPlayer } from '../../redux/actions/trackPlayer';
import { TrackPlayerReducer } from '../../redux/reducers/trackPlayer.reducer';

let ss = {url: 'https://p.scdn.co/mp3-preview/9100a200837a871f6f1c2cda42b2b5749cf9f11f?cid=9ca64e0015de458f9448b08016d05321',
  title: 'Title',
  artist: 'Album',
  artwork: 'https://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg',
  duration: 30}

  const play = ({
    spotify_uri,
    playerInstance: {
      _options: {
        getOAuthToken
      }
    }
  }) => {
    getOAuthToken(access_token => {
      fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
        method: 'PUT',
        body: JSON.stringify({ uris: [spotify_uri] }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`
        },
      });
    });
  };

export default ({navigation}) => {
  const dispatch = useDispatch()
  const [tracks, trackPlayer] = useSelector(({tracks, trackPlayer} : {tracks: TrackReducer, trackPlayer: TrackPlayerReducer}) => [tracks, trackPlayer]);


  useEffect(()=> {
    dispatch(getTracks({navigation, tracks}));
  }, []);

  const onPlayerTrack = (track: Track) => {
    dispatch(saveTrackPlayer({state: "play", track: {
      url: ss.url,
      title: track.name,
      artist: track.artists.length > 0 ? track.artists[0].name : "",
      artwork: track.album.images.length > 0 ? track.album.images[0].url : "",
      duration: 30,
    }}))
  }

  return (
    <BasicComponent>
      <View style = {styles.container}>
        <View style = {styles.containerSongs}>
          <Text style = {styles.songsText}>{tracks.total} {translate("songs")}</Text>
        </View>
        <FlatList 
          data = {tracks.items}
          keyExtractor={(item, index) => index}
          renderItem = {({item, index})=> <TrackComponent key = {index} data = {item} addOrRemoveFav = {({track, isFav} : {track: Track, isFav: boolean})=> dispatch(addOrRemoveTrack({track, isFav, tracks}))} onPress = {onPlayerTrack} />}
          onEndReached = {()=> {
            if(tracks.total > tracks.items.length) dispatch(changeTracksOffset({tracks, offset: tracks.items.length, navigation}))
          }}
          onEndReachedThreshold={1}
          initialNumToRender={12} 
          showsVerticalScrollIndicator = {false}    
        />
      </View>
      <Player />
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