import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://tasco.test:5174';
axios.defaults.baseURL = import.meta.env.URL_ENDPOINT;;