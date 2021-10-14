import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Playlist} from '../interfaces';
import {Text} from './CustomBasic';
import NoteIcon from '../assets/svg/note.svg';

const {width} = Dimensions.get("screen");

const widthItem = width / 2 - 20;

interface Props {
  data: Playlist;
  onPress: () => void;
}

class _Playlist extends React.PureComponent<Props> {
  render() {
    const data = this.props.data;
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
    width: widthItem,
    marginBottom: 20,
  },
  imageContainer: {
    width: widthItem,
    height: widthItem,
    backgroundColor: 'rgb(40,40,40)',
  },
  image: {
    width: widthItem,
    height: widthItem,
  },
  titleContainer: {
    flex: 1,
    marginVertical: 10,
    width: widthItem,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  owner: {
    color: 'white',
    marginTop: 5,
  },
});
