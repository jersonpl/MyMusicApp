import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Playlist} from '../interfaces';
import {Text} from './CustomBasic';
import NoteIcon from '../assets/svg/note.svg';

class _Playlist extends React.PureComponent {
  render() {
    const data: Playlist = this.props.data;
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <View style={styles.imageContainer}>
          {data.images.length ? (
            <FastImage
              source={{uri: data.images[0].url}}
              style={styles.image}
            />
          ) : (
            <NoteIcon width={20} height={20} />
          )}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {data.name}
          </Text>
          <Text style={styles.owner} numberOfLines={1}>
            {data.owner.display_name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default _Playlist;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  imageContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(40,40,40)',
  },
  image: {
    width: 60,
    height: 60,
  },
  titleContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-around',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  owner: {
    color: 'white',
    marginTop: 10,
  },
});
