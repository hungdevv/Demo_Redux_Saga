import axios from 'axios';
import { URL_SIGNUP } from '../constants/Config'

const callApiSignUp = axios.create({
    baseURL: URL_SIGNUP,
    headers: {
        'Content-Type': 'multipart/form-data'
      }
});

export default callApiSignUp;