/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {Text} from '../../components/CustomBasic';
import BasicComponent from '../../components/CustomBasic/BasicComponent';
import PlaylistComponent from '../../components/Playlist';
import translate from '../../lang/translate';
import {
  changePlaylistsOffset,
  getPlaylists,
} from '../../redux/actions/playlists';
import {PropsHome} from '../../navigation/Stacks/HomeStack';
import {useSelector} from '../../redux/useSelector';

export default ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();
  const playlists = useSelector(state => state.playlists);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(
      getPlaylists({
        navigation,
        playlists,
        onFinish: () => setIsLoading(false),
      }),
    );
  }, []);

  return (
    <BasicComponent isLoading={isLoading}>
      <Text style={styles.title}>{translate('your_library')}</Text>
      <FlatList
        data={playlists.items}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={{flex: 1, justifyContent: 'space-around'}}
        renderItem={({item, index}) => (
          <PlaylistComponent
            key={index}
            data={item}
            onPress={() => navigation.navigate('Playlist', {playlist: item})}
          />
        )}
        onEndReached={() => {
          if (playlists.total > playlists.items.length) {
            dispatch(
              changePlaylistsOffset({
                playlists,
                offset: playlists.items.length,
                navigation,
              }),
            );
          }
        }}
        contentContainerStyle={styles.contentContainerStyleFlatList}
        onEndReachedThreshold={0.5}
        initialNumToRender={6}
        showsVerticalScrollIndicator={false}
      />
    </BasicComponent>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 20,
    marginLeft: 10,
  },
  contentContainerStyleFlatList: {
    paddingBottom: 10,
  },
});
