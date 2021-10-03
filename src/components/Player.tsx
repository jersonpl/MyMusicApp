import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import { Text } from './CustomBasic';
import TrackPlayer, { State } from 'react-native-track-player';
import { useSelector } from '../redux/useSelector';
import { TrackPlayerReducer } from '../redux/reducers/trackPlayer.reducer';
import colors from '../values/colors';


const { width } = Dimensions.get("screen");

export default () => {
  const [trackPlayer] = useSelector(({trackPlayer} : {trackPlayer: TrackPlayerReducer}) => [trackPlayer]);
  const [state, setState] = useState({paused: false, initiated: false});
  

  useEffect(() => {
    init();
  }, []);

  useEffect(()=> {
    setTrackPlayer()
  },[trackPlayer]);
  
  const init = async () => {
    await TrackPlayer.setupPlayer({
      iosCategory: 'playback',
      iosCategoryOptions: ['interruptSpokenAudioAndMixWithOthers', 'duckOthers', 'allowAirPlay', 'allowBluetooth', 'allowBluetoothA2DP'],
      iosCategoryMode: 'spokenAudio',
    });
    setState(prev => ({...prev, initiated: true}));
  }

  const setTrackPlayer = async () => {
    if(state.initiated && trackPlayer.track) {
      await TrackPlayer.add([trackPlayer.track]);
      TrackPlayer.play();
      setState(prev => ({...prev, paused: false}));
    }
  }

  const onPlayOrPause = () => {
    if(state.paused){
      TrackPlayer.play();
      setState(prev => ({...prev, paused: false}));
    }else{
      TrackPlayer.pause();
      setState(prev => ({...prev, paused: true}));
    }
  }

  //if(!trackPlayer.track) return null;
  return (
    <View style = {styles.container}>
      <View style = {styles.imageContainer}>
        <FastImage 
          source = {{uri: "https://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg"}}
          resizeMode = {FastImage.resizeMode.cover}
          style = {styles.image}
        />
      </View>
      <View style = {styles.infoContainer}>
        <Text style = {styles.title} numberOfLines = {1} >{"Title"}</Text>
        <Text style = {styles.album} numberOfLines = {1} >{"Album"}</Text>
      </View>
      <View style = {styles.iconContainer}>
        <Icon name = {state.paused ? "play" : "pause"} type = "font-awesome-5" color = "white" onPress = {onPlayOrPause} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    width,
    flexDirection: "row",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white",
    padding: 5,
    position: "absolute",
    bottom: 5,
    backgroundColor: colors.secundary
  },
  audioElement: {
    flex: 0
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 45,
    height: 45,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "space-around"
  },
  title: {
    color: "white",
    fontSize: 18
  },
  album: {
    color: "white",
    fontSize: 12
  },
  iconContainer: {
    paddingHorizontal: 15,
    justifyContent: "center"
  }
})