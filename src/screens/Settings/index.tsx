import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../../components/CustomBasic';
import BasicComponent from '../../components/CustomBasic/BasicComponent';
import translate from '../../lang/translate';
import LocalDB from '../../localDB';
import {useSelector} from '../../redux/useSelector';
import ViewProfile from '../../components/ViewProfile';

const localDB = new LocalDB();

export default ({navigation}: {navigation: any}) => {
  const userProfile = useSelector(state => state.userProfile);

  const onLogout = async () => {
    await localDB.deleteAllDB();
    navigation.reset({index: 0, routes: [{name: 'SignedOutStack'}]});
  };

  return (
    <BasicComponent>
      <View style={styles.container}>
        <ViewProfile userProfile={userProfile} />
        <Button
          title={translate('logout')}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.titleStyle}
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
  buttonStyle: {
    backgroundColor: 'white',
    width: 150,
    height: 40,
  },
  titleStyle: {
    color: 'black',
  },
});
