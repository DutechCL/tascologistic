import axios from "axios";

axios.defaults.withCredentials = true;
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://tasco.test';
axios.defaults.baseURL = import.meta.env.APP_URL;