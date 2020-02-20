import { FETCH_MAKEUP, RESET_MAKEUP } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    //reset the state everytime we run the didthecomponentmount
    case RESET_MAKEUP:
      return []
    case FETCH_MAKEUP:
      return state.concat([action.payload.data]);
    default:
      return state;
  }
}

