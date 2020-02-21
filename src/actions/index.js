import axios from 'axios';

const ROOT_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?'

export const FETCH_MAKEUP = 'FETCH_MAKEUP';
export const RESET_MAKEUP = 'RESET_MAKEUP';

export function resetMakeUp() {
  return {
    type: RESET_MAKEUP,
  };
}
export function fetchMakeUp(tags, products) {
  console.log('product passed', products)
  console.log('tags passed', tags)
  const url = `${ROOT_URL}product_tags=${tags}&product_type=${products}`;
  //console.log('url searched', url)
  const request = axios.get(url)
    .catch(function (error) {
      if (error.response) {
        // Request made and server responded
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        window.confirm(`error call did not returned data check console.log`);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
        window.confirm(`error call did not returned data check console.log`);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        window.confirm(`error call did not returned data check console.log`);
      }

    });
  return {
    type: FETCH_MAKEUP,
    payload: request

  };
}

