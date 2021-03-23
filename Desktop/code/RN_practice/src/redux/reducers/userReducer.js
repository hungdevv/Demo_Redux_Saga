const initialState = {
    firstname: '',
    email: '',
    password: '',
    affiliate: 1,
    mailing: 1,
    gender: null,
    birthday: '',
    origin: null,
    geoname_id: '',
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GENDER': 
            return {...state, gender: action.payload};
        case 'BIRTHDAY':
            return {...state, birthday: action.payload};
        case 'ORIGIN': 
            return {...state, origin: action.payload};
        case 'CITY':
            return {...state, geoname_id: action.payload}
        default:
            return state;
    }
}

export default userReducer;