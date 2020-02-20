import { FETCH_MAKEUP } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MAKEUP:
      console.log('action.payload.data in fetchMakeUp', action.payload.data)
      return state.concat([action.payload.data]);
    default:
      return state;
  }
}

