import { Platform, NativeModules} from 'react-native';

import strings from './strings';

const deviceLanguage = Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
    NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;

export const lang = deviceLanguage.split("_")[0];


export default (keyword: string) => {
  var languaje = deviceLanguage.split("_")[0];
  var text: string | null = "";

  text = getString(keyword, languaje);
  if(!text) text = getString(keyword, "es");
  
  const text_translated = text ? text : keyword;
  return String(text_translated).replace("@empty"," ");
}

const getString = (keyword: string, languaje: string): string | null => {
  const text = strings.find(item => item.key === keyword);
  if(text) return text[languaje];
  return null
}