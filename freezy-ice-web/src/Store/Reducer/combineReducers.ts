import { Reducer, combineReducers } from 'redux';
import IState from '../Interface/IState';
import reducerCommon from './Common/reducer';

const reducers: Reducer<IState> = combineReducers<IState>({
    common: reducerCommon,
});

export default reducers;
