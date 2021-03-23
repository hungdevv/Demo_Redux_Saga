import locationApi from "../../api/locationApi";
import {call, put, takeEvery,takeLatest, all } from 'redux-saga/effects';
import callApiLogin from '../../api/callApiLogin';
import callApiSignUp from '../../api/callApiSignUp';
import { errMess } from '../actions/Error';
import { Loading, Loaded } from "../actions/User";

function* getCountries() {
  const res = yield locationApi.get('/static/atlas/countries.json');
  yield put({ type: 'COUNTRIES_SUCCEEDED', payload: { countries: res.data } });
}

function* watchCountries() {
  yield takeEvery('COUNTRIES', getCountries);
}

function* getRegions(action) {
  const { type, payload } = action;
  const res = yield locationApi.get(`/static/atlas/${payload}/regions.json`);
  yield put({ type: 'REGIONS_SUCCEEDED', payload: { regions: res.data } });
}

function* watchRegions() {
  yield takeEvery('REGIONS', getRegions);
}

function* getCities(action) {
  const { type, payload: { idCountry, idRegion } } = action;
  const res = yield locationApi.get(`/static/atlas/${idCountry}/${idRegion}/cities.json`);
  yield put({ type: 'CITIES_SUCCEEDED', payload: { cities: res.data } });
}

function* watchCities() {
  yield takeEvery('CITIES', getCities);
}


function* signIn(action) {
  yield put(Loading());
  try {
    const { payload: { login, password } } = action;
    const res = yield call(callApiLogin.post, `/gate/${login}.json`, { login, password, validitySeconds: 7776000 });
    yield put({ type: 'SIGNIN_SUCCEEDED', payload: { token: res.data.CONTENT.token } });
  } catch(err) {
    yield put(errMess(true));
  }
  yield put(Loaded());
}

function* watchSignIn() {
  yield takeLatest('SIGNIN', signIn)
}

function* signUp(action) {
  yield put(Loading());
  try {
    const { payload: {
      email, password, firstname, gender, origin, birthday,
      affiliate, mailing, geoname_id
    } } = action;
    const res = yield call(
      callApiSignUp.post,
      '/pool/.json?new_key_signUp=true',
      { email, password, firstname, gender, birthday, origin,
        affiliate, mailing, geoname_id
      }
    );
    yield put({ type: 'SIGNUP_SUCCEEDED', payload: {
      puk: res.data.CONTENT.AUTH.puk,
      token: res.data.CONTENT.AUTH.token
    } });
  } catch(err) {
    yield put(errMess(true));
  }
  yield put(Loaded());
}

function* watchSignUp() {
  yield takeLatest('SIGNUP', signUp);
}

function* signOut() {
  yield put({ type: 'SIGNOUT_SUCCEEDED' });
}

function* watchSignOut() {
  yield takeLatest('SIGNOUT', signOut);
}

export default function* rootSaga() {
  yield all([
    watchCountries(),
    watchRegions(),
    watchCities(),
    watchSignIn(),
    watchSignUp(),
    watchSignOut()
  ]);
};
