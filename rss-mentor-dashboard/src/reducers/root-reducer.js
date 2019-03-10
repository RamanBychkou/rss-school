import { CHOOSE_MENTOR } from '../actions/actions';

const initialState = {
  mentor: 'Aleh Lipski',
};

const rootReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case CHOOSE_MENTOR:
      return {
        mentor: action.mentor,
      };
    default:
      return state;
  }
};

export { initialState, rootReducer };
