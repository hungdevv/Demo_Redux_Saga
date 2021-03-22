const initialState = {
    statusErr: false,
    token: '',
    puk: '',
    isLoading: false,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'LOADING':
        return {...state, isLoading: true};
      case 'LOADED':
        return {...state, isLoading: false};
      case 'ADD_ERROR_MESSAGE':
        return { ...state, statusErr: action.payload.statusErr };
      case 'DELETE_ERROR_MESSAGE':
        return { ...state, statusErr: false};
      case 'SIGNIN_SUCCEEDED':
        return { ...state, token: action.payload.token };
      case 'SIGNUP_SUCCEEDED':
        return {
          ...state,
          token: action.payload.token,
          puk: action.payload.puk
        }
      case 'SIGNOUT_SUCCEEDED':
        return { ...state, token: '', puk: '' };
      default: 
        return state;
    }
  };
  
  export default authReducer;