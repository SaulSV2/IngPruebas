import bitcoinReducer from './bitcoin';
import { FETCH_BITCOIN } from '../actions/constants';

describe('bitcoinReducer', () => {
    // el reducer manejaraa los fetch de los bitcpin actions, el reducer debe retornar un objeto con el bpi key y datos en este, esto representa lo que el bitcoin api returns, para esto crearemos un const con el bpi key y texto random
    const bitcoinData = {
        bpi: 'bitcoin price index'
    };

    it('fetches and sets the bitcoin data', () => {
        expect(bitcoinReducer({ }, {
            type: FETCH_BITCOIN,
            bitcoin: bitcoinData
        })).toEqual(bitcoinData);
    });
});