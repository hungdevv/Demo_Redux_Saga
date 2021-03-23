import axios from 'axios';
import { URL_API } from '../constants/Config'


const locationApi = axios.create({
  baseURL: URL_API,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default locationApi;