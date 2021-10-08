import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import {RootState} from './reducers';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
