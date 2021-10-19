/* eslint-disable no-labels */
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'SNDAJ12E1G1120SS';

export default class LocalDB {
  tables = {
    auth: `auth-${key}`,
    userProfile: `user-profile-${key}`,
  };

  async saveData(table: string, data: any) {
    try {
      if (typeof data !== 'object') {
        return {success: false, msg: 'Formato filtro incorrecto'};
      }

      let _storage = await AsyncStorage.getItem(table);
      var storage = [];

      if (!_storage) {
        storage = [];
      } else {
        storage = JSON.parse(_storage);
      }

      var dataTemp = [];

      if (Array.isArray(data)) {
        for (var i = 0; i < data.length; i++) {
          if (!data[i].id) {
            dataTemp.push({id: uuidv4(), ...data[i]});
          } else {
            dataTemp.push(data[i]);
          }
        }
      } else {
        if (!data.id) {
          dataTemp.push({id: uuidv4(), ...data});
        } else {
          dataTemp.push(data);
        }
      }

      await AsyncStorage.setItem(
        table,
        JSON.stringify([...storage, ...dataTemp]),
      );
      return {sucess: true, data: dataTemp};
    } catch (error) {
      console.log('ERROR LOCALDB saveDate ', error);
      return {sucess: false, msg: error};
    }
  }

  //añadir ordenas {desc, asc} y quitar el sucess
  async find(table: string, filter?: any, qty?: number) {
    try {
      let storage = await AsyncStorage.getItem(table);
      if (!storage) {
        return [];
      } else {
        let data = JSON.parse(storage);
        var dataTemp = [];

        //return all data
        if (filter === {} || !filter) {
          dataTemp = data;
        } else {
          if (typeof filter !== 'object') {
            console.log('Formato filtro incorrecto', filter);
            return [];
          }

          loop: for (var item of data) {
            var save = true;
            for (var field in filter) {
              if (item[field] !== filter[field]) {
                save = false;
                break;
              }
            }
            if (save) {
              dataTemp.push(item);
              if (qty && dataTemp.length === qty) {
                break loop;
              }
            }
          }
        }
      }
    } catch (error) {
      console.log('ERROR LOCALDB find ', error);
      return [];
    }
  }

  async findOne(table: string, filter?: object) {
    try {
      const data = (await this.find(table, filter, 1)) || [];
      if (data.length) {
        return data[0];
      } else {
        return null;
      }
    } catch (error) {
      console.log('error en findone ', error);
      return null;
    }
  }

  async modifyOne(table: string, filter?: any, data?: object) {
    try {
      let _storage = await AsyncStorage.getItem(table);
      if (!_storage) {
        return {sucess: false, msg: 'sin resultados'};
      }

      var storage = JSON.parse(_storage);

      var itemModify = null;

      storage.some((item: any) => {
        var modify = true;
        for (var field in filter) {
          if (item[field] !== filter[field]) {
            modify = false;
            break;
          }
        }
        if (modify) {
          item = Object.assign(item, data);
          itemModify = item;
          return true;
        }
      });

      await AsyncStorage.setItem(table, JSON.stringify(storage));

      if (!itemModify) {
        return {sucess: false, msg: 'sin resultados'};
      }
      return {sucess: true, data: itemModify};
    } catch (error) {
      console.log('ERROR LOCALDB modifyOne ', error);
      return {sucess: false, msg: error};
    }
  }

  async delete(table: string, filter: any, qty?: number) {
    try {
      let _storage = await AsyncStorage.getItem(table);
      if (!_storage) {
        return {sucess: true};
      }

      var storage = JSON.parse(_storage);

      if (filter.all) {
        await AsyncStorage.setItem(table, JSON.stringify([]));
        return {sucess: true};
      }

      var dataToDelete: any[] = [];

      loop: for (var item of storage) {
        var del = true;
        for (var field in filter) {
          if (item[field] !== filter[field]) {
            del = false;
            break;
          }
        }
        if (del) {
          dataToDelete.push(item.id);
          if (qty && dataToDelete.length === qty) {
            break loop;
          }
        }
      }

      var dataTemp = storage.filter(
        (item: any) => !dataToDelete.includes(item.id),
      );
      await AsyncStorage.setItem(table, JSON.stringify(dataTemp));
      return {sucess: true};
    } catch (error) {
      console.log('ERROR LOCALDB delete ', error);
      return {sucess: false, msg: error};
    }
  }

  async deleteAllDB() {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      return {sucess: false, msg: error};
    }
  }
}
