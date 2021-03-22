const initialState = {
    Countries: [],
    Regions: [],
    Cities: []
  };
  
  const locationReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'COUNTRIES_SUCCEEDED':
        return { ...state, Countries: action.payload.countries.CONTENT.ALL };
      case 'REGIONS_SUCCEEDED':
        return { ...state, Regions: action.payload.regions.CONTENT.regions };
      case 'CITIES_SUCCEEDED':
        return { ...state, Cities: action.payload.cities.CONTENT.ALL.cities };
      default:
        return state;
    }
  };
  
  export default locationReducer;