const initialState = {
  sectionName: 'login'
};

export const CHANGE_SECTION = 'CHANGE_SECTION';

const other = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SECTION:
      return {
        ...state, sectionName: action.sectionName
      };
    default:
      return state;
  }
};

export default other;
