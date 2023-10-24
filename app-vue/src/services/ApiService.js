import axios from 'axios'
import Cookies from 'js-cookie';
const _baseUrl = '/';
// const _baseUrl = '/';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${Cookies.get('token')}`,
  }
};

export async function getWithToken(url) {
  const response = await axios.get(`${_baseUrl}${url}`, config);

  return response.data;
}

export async function postWithToken(url, body) {
  const response = await axios.post(`${_baseUrl}${url}`, body, config);

  return response.data;
}

export async function putWithToken(url, body) {
  const response = await axios.put(`${_baseUrl}${url}`, body, config);

  return response.data;
}
