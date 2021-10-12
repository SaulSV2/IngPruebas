// para combinaar los reducers redux tiene la funcion convine reducers que toma un object con numero de reducers mapeados como key vaalue pairs donde los keys son nombres de reducers y values son los reducers a mapear, usando esa funcion se crea una solo reducers que es la combinaacion de los 2 reducers
import { combineReducers } from 'redux';
import balance from './balance';
import bitcoin from './bitcoin';

export default combineReducers( {
    balance,
    bitcoin
});