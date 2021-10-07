import React from 'react';
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Icon } from 'react-native-elements';
import colors from '../values/colors';
import { Text } from './CustomBasic';
import FastImage from 'react-native-fast-image'
import { Track } from '../interfaces';
import NoteIcon from '../assets/svg/note.svg';


class _Track extends React.PureComponent {

  render(){

    const data: Track = this.props.data;
    const isFromPlaylist: boolean = this.props.isFromPlaylist;
    const addOrRemoveFav: ({isFav, track} : {isFav?: boolean, track: Track}) => void = this.props.addOrRemoveFav;

    return (
      <View style = {styles.container}>
        <View style = {styles.imageContainer}>
          {
            data.album.images.length > 0 ? 
            <FastImage 
              source = {{uri: data.album.images[0].url}}
              style = {styles.image}
            />
            :
            <NoteIcon width = {20} height = {20} />
          }
        </View>
        <View style = {styles.titleContainer}>
          <Text style = {styles.titleText} numberOfLines = {1} >{data.name}</Text>
          <Text style = {styles.albumText} numberOfLines = {1} >{data.album.name}</Text>
        </View>
        {
          !isFromPlaylist &&
          <TouchableOpacity style = {styles.favIcon} onPress = {()=> addOrRemoveFav({isFav: data.isFav, track: data})}>
            <Icon name = {data.isFav ? "favorite" : "favorite-outline"} color = {data.isFav ? colors.primary : "white"} size = {18} />
          </TouchableOpacity>
        }
      </View>
    )
  }
}

export default _Track

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row"
  },
  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: "rgb(40,40,40)",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 50,
    height: 50
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "space-around",
  },
  titleText: {
    color: "white",
    fontWeight: "700",
    fontSize: 15
  },
  albumText: {
    color: "white",
    fontSize: 12
  },
  favIcon: {
    justifyContent: "center",
    paddingRight: 20,
    paddingLeft: 10
  }
})