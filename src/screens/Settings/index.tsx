import React, {useContext} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import AppContext from '../../context/AppContext';
import {Button, Text} from '../../components/CustomBasic';
import BasicComponent from '../../components/CustomBasic/BasicComponent';
import translate from '../../lang/translate';
import LocalDB from '../../localDB';
import {useSelector} from '../../redux/useSelector';
import {UserProfile} from '../../interfaces';
import FastImage from 'react-native-fast-image';
import no_photo_user from '../../assets/images/no_photo_user.png';
import screenNames from '../../navigation/screenNames';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const localDB = new LocalDB();

export default ({navigation}: NativeStackScreenProps<{}>) => {
  const [userProfile] = useSelector(
    ({userProfile}: {userProfile: UserProfile}) => [userProfile],
  );
  const {endSession} = useContext(AppContext);

  const onLogout = async () => {
    await localDB.deleteAllDB();
    endSession();
    navigation.reset({index: 0, routes: [{name: screenNames.SignedOutStack}]});
  };

  return (
    <BasicComponent>
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          {userProfile.images && userProfile.images.length > 0 ? (
            <FastImage
              source={{uri: userProfile.images[0].url}}
              style={{width: 150, height: 150, borderRadius: 75}}
            />
          ) : (
            <Image
              source={no_photo_user}
              style={{width: 150, height: 150, borderRadius: 75}}
            />
          )}
          <Text style={styles.nameText}>{userProfile.display_name}</Text>
          <Text style={styles.emailText}>{userProfile.email}</Text>
        </View>
        <Button
          title={translate('logout')}
          buttonStyle={{backgroundColor: 'white', width: 150, height: 40}}
          titleStyle={{color: 'black'}}
          onPress={onLogout}
        />
      </View>
    </BasicComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
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
});
