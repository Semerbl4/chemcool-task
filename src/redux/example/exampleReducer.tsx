import { ADD_NUMBER } from './exampleTypes';

interface IInitialState {
  defaultNumber: number;
}

const initialState: IInitialState = {
  defaultNumber: 10,
};
interface IAction {
  type: string;
  payload: number;
}
const exampleReducer = (state = initialState, action: IAction): IInitialState => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        defaultNumber: state.defaultNumber + action.payload,
      };
    default:
      return state;
  }
};

export default exampleReducer;
