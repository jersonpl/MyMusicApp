import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native"
import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '../../components/CustomBasic';
import BasicComponent from '../../components/CustomBasic/BasicComponent';
import Song from '../../components/Song';
import request from '../../utils/request';
import api from '../../utils/api';
import errorRequest from '../../utils/errorRequest';
import { Album, Playlist } from '../../interfaces';
import FastImage from 'react-native-fast-image';
import PlaylistComponent from '../../components/Playlist';
import translate from '../../lang/translate';
import { changePlaylistsOffset, getPlaylists } from '../../redux/actions/playlists';
import { PlaylistReducer } from '../../redux/reducers/playlists.reducer';

export default ({navigation}) => {
  const dispatch = useDispatch();
  const [playlists] = useSelector(({playlists} : {playlists: PlaylistReducer}) => [playlists]);
  const [infoPage, setInfoPage] = useState({offset: playlists.length, total: 0});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    dispatch(getPlaylists({navigation, playlists}));
  },[]);
  
  return (
    <BasicComponent isLoading = {isLoading}>
      <Text style = {styles.title}>{translate("your_library")}</Text>
      <FlatList 
        data = {playlists.items}
        keyExtractor={(item, index) => index}
        renderItem = {({item, index})=> <PlaylistComponent key = {index} data = {item} onPress = {()=> navigation.navigate("Playlist", {playlist: item})} />}
        onEndReached = {()=> {
          if(playlists.total > playlists.items.length) dispatch(changePlaylistsOffset({playlists, offset: playlists.items.length, navigation}))
        }}
        contentContainerStyle = {{paddingBottom: 10}}
        onEndReachedThreshold={0.5}
        initialNumToRender={6} 
        showsVerticalScrollIndicator = {false}    
      />
    </BasicComponent>
  )
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 20,
    marginLeft: 10
  }
})