export const getCountry = () => {
    return {
        type: 'COUNTRIES'
    }
}

export const getRegion = (id) => {
    return {
        type: 'REGIONS',
        payload: id,
    }
}

export const getCity = (idCountry, idRegion) => {
    return {
        type: 'CITIES',
        payload: {
            idCountry: idCountry,
            idRegion: idRegion
        }
    }
}