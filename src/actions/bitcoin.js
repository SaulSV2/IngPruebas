import { FETCH_BITCOIN } from './constants';

// thunk action creator async, se exportara
export const fetchBitcoin = () => {
    // redux think middleware funciona si se quiere retornar una primisse o algo async, el middlewaer lo toma y nos da una funcion dispatch function que representa la dispatch hability de reduxstore, eso es muy poderosoporque se puede devolver el async fetch, se retornara el dispatch al store
    return dispatch => {
        // con esta fucnion se puede retonrar el fetch method
        return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => response.json())
        .then(json => dispatch({
            type: FETCH_BITCOIN,
            bitcoin: json
        }));
    }
}