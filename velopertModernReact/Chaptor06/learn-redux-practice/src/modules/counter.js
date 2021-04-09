const initialState = {
  count: 0,
  number: 1,
};

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const SET_NUMBER = "counter/SET_NUMBER";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const setNumber = (number) => ({
  type: SET_NUMBER,
  payload: { number: number },
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREASE:
      return { ...state, count: state.count + state.number };
    case DECREASE:
      return { ...state, count: state.count + state.number };
    case SET_NUMBER:
      return { ...state, number: payload.number };

    default:
      return state;
  }
};
