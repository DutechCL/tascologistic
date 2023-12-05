import axios from 'axios'
import Cookies from 'js-cookie';
const _baseUrl = '/';
// const _baseUrl = '/';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    // 'Authorization': `Bearer ${Cookies.get('token')}`,
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  }
};
const api = axios.create(config);

export async function getWithToken(url) {
  const response = await api.get(`${_baseUrl}${url}`);

  return response.data;
}

export async function postWithToken(url, body) {
  const response = await api.post(`${_baseUrl}${url}`, body);

  return response.data;
}

export async function putWithToken(url, body) {
  const response = await api.put(`${_baseUrl}${url}`, body);

  return response.data;
}
