import axios from 'axios';

const ROOT_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?'

export const FETCH_MAKEUP = 'FETCH_MAKEUP';

export function fetchMakeUp(tags, products) {
    //console.log('product passed', products)
    const url = `${ROOT_URL}product_tags=${tags}&product_type=${products}`;
    //console.log('url searched', url)
    const request = axios.get(url);
    return {
      type: FETCH_MAKEUP, 
      payload: request
    
    };
}
