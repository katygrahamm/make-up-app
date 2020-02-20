import { FETCH_MAKEUP } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MAKEUP:
      console.log('state:',state)
      return state.concat([action.payload.data]);
    default:
      return state;
  }
}

