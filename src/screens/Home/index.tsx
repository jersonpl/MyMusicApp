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

export default ({navigation}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [playlists, setPlaylist] = useState<Playlist[]>([]);

  useEffect(()=> {
    init();
  },[]);

  const init = async () => {
    setIsLoading(true);
    let resPlaylists = await request({link: api.playlists});
    if(resPlaylists.success){
      setPlaylist(resPlaylists.response.items);
    }else{
      errorRequest({response: resPlaylists, navigation})
    }
    setIsLoading(false);
  }
  
  return (
    <BasicComponent isLoading = {isLoading}>
      <Text style = {styles.title}>{translate("your_library")}</Text>
      <FlatList 
        data = {playlists}
        keyExtractor={(item, index) => index}
        renderItem = {({item, index})=> <PlaylistComponent key = {index} data = {item} onPress = {()=> navigation.navigate("Playlist", {playlist: item})} />}
        onEndReached = {()=> {}}
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