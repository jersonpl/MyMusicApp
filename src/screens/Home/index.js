import React, { useState } from 'react';
import { FlatList, SafeAreaView, View } from "react-native"
import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '../../components/CustomBasic';
import BasicComponent from '../../components/CustomBasic/BasicComponent';
import Song from '../../components/Song';
import changeFavorites from '../../functions/changeFavorites';
import { addFavorite, deleteFavorite } from '../../redux/actions/favorites';

export default () => {
  const dispatch = useDispatch();
  const [favorites, songs] = useSelector(({favorites, songs}) => [favorites, songs]);
  
  return (
    <BasicComponent>
      <FlatList
        data = {songs}
        keyExtractor={(item, index) => index}
        renderItem = {({item, index})=> <Song data = {item} onChangeFav = {({add}) => changeFavorites({dispatch, song: item, songs, add})}/>}
        onEndReached = {()=> {
          
        }}
        onEndReachedThreshold={0.5}
        initialNumToRender={6} 
        showsVerticalScrollIndicator = {false}    
      />
    </BasicComponent>
  )
}