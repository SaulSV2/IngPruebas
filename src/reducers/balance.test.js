import balanceReducer from './balance';
// baalance reducer para las cookies
import balanceReducer2 from './balance';
// los reducers usana ction cstantrs para detemrinar las acciones
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
    describe('when initializing', () =>{
        // este balance representa los datos del redux store, el reducer balance retornara un umero basado en sus inpots, el numero que retornara sera el primer numero que se dio en la accion
        const balance = 10;
        // primero se vera qeu funcione el balancer del reducer sabiendo que lso reducers deben tener resultados diferentes segun sus inputs
        it('sets a balance', () => {
            
            // el balance reducer tomaara 2 datos, el primero es el estadoa ctual y el sefundo es el objeto con datos, donde van los actions
            expect(balanceReducer(undefined, {
                type: constants.SET_BALANCE,
                balance
            })).toEqual(balance);
        });

        describe('then re-initializing', () => {
            it('reads the balance from the cookies', () => {
                expect(balanceReducer2(undefined, {})).toEqual(balance);
            });
        });
    });

    // para cusando se deposita en el balanceador
    it('deposit into the balance', () => {
        const deposit = 10;
        const initialState = 5;

        expect(balanceReducer(initialState, {
            type: constants.DEPOSIT,
            deposit
        })).toEqual(initialState + deposit);
    });

    it('withdraws from the balance', () => {
        const withdraw = 10;
        const initialState = 20;
        expect(balanceReducer(initialState, {
            type: constants.WITHDRAW,
            withdraw
        })).toEqual(initialState - withdraw);
    });
});