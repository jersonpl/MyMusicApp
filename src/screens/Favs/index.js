import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '../../components/CustomBasic';
import BasicComponent from "../../components/CustomBasic/BasicComponent"
import Song from '../../components/Song';
import changeFavorites from '../../functions/changeFavorites';
import translate from '../../lang/translate';

export default () => {
  const dispatch = useDispatch();
  const [songs] = useSelector(({songs}) => [songs]);

  let favorites = songs.filter(item => item.isFav);

  return (
    <BasicComponent>
      <View style = {styles.container}>
        <View style = {styles.containerSongs}>
          <Text style = {styles.songsText}>{favorites.length} {translate("songs")}</Text>
        </View>
        <FlatList 
          data = {favorites}
          keyExtractor={(item, index) => index}
          renderItem = {({item, index})=> <Song data = {item} onChangeFav = {({add}) => changeFavorites({dispatch, song: item, songs, add})}/>}
          onEndReached = {()=> {
            
          }}
          onEndReachedThreshold={0.5}
          initialNumToRender={6} 
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