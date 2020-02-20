import { FETCH_MAKEUP } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MAKEUP:
      return state.concat([action.payload.data]);
    default:
      return state;
  }
}

// You could also use:

// export default function(state = [], action) {
//   switch (action.type) {
//     case FETCH_WEATHER:
//       return [action.payload.data, ...state];
//     default:
//       return state;
//   }
// }
