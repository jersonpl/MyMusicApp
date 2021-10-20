import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from './CustomBasic';
import FastImage from 'react-native-fast-image';
import no_photo_user from '../assets/images/no_photo_user.png';
import {UserProfile} from '../interfaces';

type Props = {
  userProfile: UserProfile;
};

export default ({userProfile}: Props) => {
  return (
    <View style={styles.header}>
      {userProfile.images && userProfile.images.length ? (
        <FastImage
          source={{uri: userProfile.images[0].url}}
          style={styles.image}
        />
      ) : (
        <FastImage source={no_photo_user} style={styles.image} />
      )}
      <Text style={styles.nameText}>{userProfile.display_name}</Text>
      <Text style={styles.emailText}>{userProfile.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  nameText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  emailText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});
