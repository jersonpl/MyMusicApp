import Snackbar from 'react-native-snackbar';
import LocalDB from '../localDB';
import colors from '../values/colors';
import {resFetch} from './request';

const localDB = new LocalDB();

export default async ({
  response,
  navigation,
}: {
  response: resFetch;
  navigation: any;
}) => {
  if (response.noAuth) {
    setTimeout(() => {
      Snackbar.show({
        text: 'La sesión ha vencido',
        duration: Snackbar.LENGTH_LONG,
        textColor: colors.primary,
      });
    }, 500);
    await localDB.deleteAllDB();
    navigation.reset({index: 0, routes: [{name: 'SignedOutStack'}]});
  } else {
    setTimeout(() => {
      Snackbar.show({
        text: 'Ha ocurrido un error',
        duration: Snackbar.LENGTH_LONG,
        textColor: colors.primary,
      });
    }, 500);
  }
};
