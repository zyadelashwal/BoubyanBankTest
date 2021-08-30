import { FETCHING_COUNTRIES, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_FAILURE,ENDPOINT } from '../../scripts/constants.js';
import axios  from "axios";

export  function  fetchCountries() {

  return async (dispatch)  => {
    dispatch(getCountries())

    await axios.get(`${ENDPOINT}countries`)
        .then(function (response) {
            console.log(response)
            return(dispatch(getCountriesSuccess(response.data)))
        })
        .catch(err => dispatch(getCountriesFailure(err)))
}

}

function getCountries() {

    return {
        type: FETCHING_COUNTRIES
    }
}

function getCountriesSuccess(data) {
console.log(data)
  return {
      type: FETCH_COUNTRIES_SUCCESS,
      data
  }
}

function getCountriesFailure(err) {
  return {
      type: FETCH_COUNTRIES_FAILURE
  }
}