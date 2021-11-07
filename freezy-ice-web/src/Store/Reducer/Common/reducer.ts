import { CommonState } from '../../Interface/CommonInterface';
import IAction from '../../Interface/IAction';
import commonInitialState from '../../InitialState/CommonInitialState';
import ActionsEnums from '../../../Helpers/enums/ActionsEnum';

export default function reducerCommon(
  state: CommonState = commonInitialState,
  action: IAction<ActionsEnums>,
): CommonState {
  switch (action.type) {
    case ActionsEnums.LOADING:
      return { ...state, loading: !state.loading };
    case ActionsEnums.SAVING:
      return { ...state, saving: !state.saving };
    case ActionsEnums.PROCESSING:
      return { ...state, processing: !state.processing };
    default:
      return state;
  }
}
