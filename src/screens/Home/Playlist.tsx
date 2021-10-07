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
import constants from '../../values/constants';
import checkIfTrackIsLiked from '../../functions/checkIfTrackIsLiked';
import formatPlaylist from '../../functions/formatPlaylist';

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

      const reformedPlaylist = formatPlaylist(resPlayList.response);
      setPlayList(reformedPlaylist);

      const _tracksItems = await checkIfTrackIsLiked(reformedPlaylist.tracks.items!);
      setPlayList(prev => ({...prev, tracks: {...prev.tracks, items: _tracksItems}}));
    }else{
      errorRequest({response: resPlayList, navigation});
    }
  }

  const addOrRemoveFav = ({isFav, track} : {isFav?: boolean, track: Track}) => {
    dispatch(addOrRemoveTrack({tracks, track, isFav}));
    setPlayList(prev => {
      let indexTrack = prev.tracks.items!.findIndex(_track => _track.id == track.id);
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
        contentContainerStyle = {styles.contentContainerStyleFlatList}
        onEndReached = {()=> {}}
        ListHeaderComponent = {()=> (
          <View style = {styles.container}>
            <View style = {styles.imageContainer}>
              { playList.images.length >= constants.MIN_LEN_IMAGES_TO_SHOW ? 
                <FastImage source = {{uri: playList.images[0].url}} style = {{width: "100%", height: "100%"}} resizeMode = {FastImage.resizeMode.cover}  /> : 
                <NoteIcon width = {50} height = {50} /> 
              }
            </View>
            <View style = {styles.infoContainer}>
              <Text style = {styles.title} numberOfLines = {1} >{playList.name}</Text>
              <View style = {styles.userContainer}>            
                {playList.owner.images && playList.owner.images.length >= constants.MIN_LEN_IMAGES_TO_SHOW ?
                  <FastImage source = {{uri: playList.owner.images[0].url}} style = {styles.imagePlaylist} /> :
                  <Image source = {no_photo_user} style = {styles.imagePlaylist} />
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
  },
  imagePlaylist: {
    width: 20, 
    height: 20, 
    borderRadius: 10
  },
  contentContainerStyleFlatList: {
    paddingBottom: 10
  }
})