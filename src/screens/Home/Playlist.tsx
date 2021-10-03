import React from 'react'
import { useEffect, useState } from "react"
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, View } from "react-native";
import BasicComponent from "../../components/CustomBasic/BasicComponent"
import { Playlist } from "../../interfaces";
import FastImage from "react-native-fast-image"
import NoteIcon from '../../assets/svg/note.svg';
import { Text } from '../../components/CustomBasic';
import colors from '../../values/colors';

import no_photo_user from '../../assets/images/no_photo_user.png';
import request from '../../utils/request';
import errorRequest from '../../utils/errorRequest';
import TrackComponent from '../../components/Track';
import api from '../../utils/api';
import { Track } from '../../interfaces';
import { useSelector } from '../../redux/useSelector';
import { addOrRemoveTrack } from '../../redux/actions/tracks';
import { useDispatch } from 'react-redux';

const { width } = Dimensions.get("screen");

export default ({navigation, route}) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false);
  const [tracks] = useSelector(({tracks}) => [tracks])
  const [playList, setPlayList] = useState<Playlist>(route.params.playlist);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    let resPlayList = await request({link: playList.href});
    if(resPlayList.success){
      let _playlist: Playlist = {...resPlayList.response, tracks: {...resPlayList.response.tracks, items: resPlayList.response.tracks.items.map(item => ({...item.track}))} }
      setPlayList(_playlist);
      let _tracksItems = await checkIsLiked(_playlist.tracks.items!);
      setPlayList(prev => ({...prev, tracks: {...prev.tracks, items: _tracksItems}}));
    }else{
      errorRequest({response: resPlayList, navigation});
    }
  }

  const addOrRemoveFav = ({isFav, track} : {isFav?: boolean, track: Track}) => {
    console.log({isFav, track})
    dispatch(addOrRemoveTrack({tracks, track, isFav}));
    setPlayList(prev => {
      let indexTrack = prev.tracks.items!.findIndex(a => a.id == track.id);
      prev.tracks.items![indexTrack].isFav = !isFav;
      return prev;
    })
  }


  return (
    <BasicComponent isLoading = {isLoading} >
      <FlatList 
        data = {playList.tracks.items || []}
        keyExtractor={(item, index) => index}
        renderItem = {({item, index})=> <TrackComponent key = {index} data = {item} addOrRemoveFav = {addOrRemoveFav}  />}
        contentContainerStyle = {{paddingBottom: 10}}
        onEndReached = {()=> {}}
        ListHeaderComponent = {()=> (
          <View style = {styles.container}>
            <View style = {styles.imageContainer}>
              { playList.images.length > 0 ? 
                <FastImage source = {{uri: playList.images[0].url}} style = {{width: "100%", height: "100%"}} resizeMode = {FastImage.resizeMode.cover}  /> : 
                <NoteIcon width = {50} height = {50} /> 
              }
            </View>
            <View style = {styles.infoContainer}>
              <Text style = {styles.title} numberOfLines = {1} >{playList.name}</Text>
              <View style = {styles.userContainer}>            
                {playList.owner.images && playList.owner.images.length > 0 ?
                  <FastImage source = {{uri: playList.owner.images[0].url}} style = {{width: 20, height: 20, borderRadius: 10}} /> :
                  <Image source = {no_photo_user} style = {{width: 20, height: 20, borderRadius: 10}} />
                }
                <Text style = {styles.nameOwner} numberOfLines = {1} >{playList.owner.display_name}</Text>
              </View>
              {playList.followers && <Text style = {styles.followers} numberOfLines = {1} >{playList.followers.total} me gusta</Text>}
            </View>
          </View>
        )}
        onEndReachedThreshold={0.5}
        initialNumToRender={6} 
        showsVerticalScrollIndicator = {false}    
      />
    </BasicComponent>
  )
}

const checkIsLiked = async (tracks: Track[]): Promise<Track[]> => {
  let _tracks: Track[] = JSON.parse(JSON.stringify(tracks))
  let list = []
  const len = Math.ceil(_tracks.length/50)
  for(var i = 0; i < len; i++){
    list.push(_tracks.splice(0, 50).map(item => item.id));
  }
  let responseList: boolean[] = [];
  for(var listItem of list){
    let likedTrack = await request({link: api.tracks_contains, method: "GET", body: {ids: listItem}});
    if(likedTrack.success){
      responseList = [...responseList, ...likedTrack.response];
    }
  }
  let final = tracks.map((item, index) => ({...item, isFav: responseList[index]}));
  return final;
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20
  },
  imageContainer: {
    width: width*0.6,
    height: width*0.6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(40,40,40)",
    alignSelf: "center",
    ...colors.shadow
  },
  infoContainer: {
    marginTop: 20,
    paddingHorizontal: 20
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15
  },
  nameOwner: {
    color: "white",
    marginLeft: 10,
    fontWeight: "700"
  },
  followers: {
    color: "white",
    marginTop: 10,
    fontWeight: "500",
    fontSize: 13
  }
})