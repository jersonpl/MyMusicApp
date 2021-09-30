import React from 'react';
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { Icon } from 'react-native-elements';
import colors from '../../values/colors';
import { Text } from '../CustomBasic';
import FastImage from 'react-native-fast-image'

export default ({data: {title, album, singer, isFav, image}, onChangeFav}) => {
  return (
    <View style = {styles.container}>
      <View style = {styles.imageContainer}>
        <FastImage
          style={styles.image}
          source={{
            uri: image,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style = {styles.titleContainer}>
        <Text style = {styles.titleText} numberOfLines = {1} >{title}</Text>
        <Text style = {styles.albumText} numberOfLines = {1} >{`${singer} - ${album}`}</Text>
      </View>
      <TouchableOpacity style = {styles.favIcon} onPress = {()=> onChangeFav({add: isFav})}>
        <Icon name = {isFav ? "favorite" : "favorite-outline"} color = {isFav ? colors.primary : "white"} size = {18} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row"
  },
  imageContainer: {
    width: 50,
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