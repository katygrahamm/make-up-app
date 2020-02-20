import axios from 'axios';


const ROOT_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?'

export const FETCH_MAKEUP = 'FETCH_MAKEUP';

export function fetchMakeUp(tags, products) {
     //map through the fetches
    const url = `${ROOT_URL}product_tags=${tags}&product_type=${products}`;

    const request = axios.get(url);
  return {
    type: FETCH_MAKEUP,
    payload: request
  };

}
