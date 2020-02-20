import axios from 'axios';


const ROOT_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?'
const product = 'lipstick'

export const FETCH_MAKEUP = 'FETCH_MAKEUP';

export function fetchMakeUp(tags) {
    const url = `${ROOT_URL}product_tags='vegan'&product_type=${tags}`;
    const request = axios.get(url);
  return {
    type: FETCH_MAKEUP,
    payload: request
  };


}