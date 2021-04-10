import { ADD_NUMBER } from './exampleTypes';

interface IAddNumberAction {
  type: typeof ADD_NUMBER;
  payload: number;
}

export const addNumber = (number = 1): IAddNumberAction => {
  return {
    type: ADD_NUMBER,
    payload: number,
  };
};
