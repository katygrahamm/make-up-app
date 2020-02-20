import axios from 'axios';

const API_KEY = '';
const ROOT_URL = `${}`;

export const FETCH_MAKEUP = 'FETCH_MAKEUP';

export function fetchMakeUp(makeUp) {
  const url = `${}`;
  const request = axios.get(url);

  return {
    type: FETCH_MAKEUP,
    payload: request
  };
}
