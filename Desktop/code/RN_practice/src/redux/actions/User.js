export const getGender = (gender) => {
    return {
        type: 'GENDER',
        payload: gender
    }
}

export const getBirthday = (birthday) => {
    return {
        type: 'BIRTHDAY',
        payload: birthday
    }
}

export const getOrigin = (origin) => {
    return {
        type: 'ORIGIN',
        payload: origin
    }
}

export const getIdCity = (id) => {
    return {
        type: 'CITY',
        payload: id
    }
}

export const Loading = () => {
    return {
      type: 'LOADING',
    };
  };
  export const Loaded = () => {
    return {
      type: 'LOADED',
    };
  };

export const signUp = (email, password, firstname, gender, birthday, origin, affiliate, mailing, geoname_id) => {
    return {
        type: "SIGNUP",
        payload: {
          email,
          password,
          firstname,
          gender,
          birthday,
          origin,
          affiliate,
          mailing,
          geoname_id,
        },
    }
}

export const signIn = (login, password) => {
    return { 
        type: 'SIGNIN', 
        payload: {login, password}}
}