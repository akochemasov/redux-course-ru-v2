export const initialState = {
  user: {
    name: 'Steve',
    surname: 'Jobs',
    age: 27,
  },
};

export function rootReducer(state = initialState) {
  return state;
}
