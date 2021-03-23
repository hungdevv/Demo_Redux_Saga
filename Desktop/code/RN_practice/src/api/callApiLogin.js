import axios from 'axios';
import { URL_lOGIN } from '../constants/Config'


const callApiLogin = axios.create({
  baseURL: URL_lOGIN,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

export default callApiLogin;