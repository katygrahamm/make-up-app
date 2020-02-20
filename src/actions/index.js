import axios from 'axios';


const ROOT_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?'

export const FETCH_MAKEUP = 'FETCH_MAKEUP';

//Needs to decide tags we want to pass! must pass tag and products user has checked marked.
export function fetchMakeUp(tags, product) {
  const url = `${ROOT_URL}product_tags=${tags}&product_type=${product}`;
  const request = axios.get(url);

  return {
    type: FETCH_MAKEUP,
    payload: request
  };
}