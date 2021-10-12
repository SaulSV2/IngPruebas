// reducers necesitan acciones por lo que se importan
import * as constants from '../actions/constants';
// para las cookies, read cookie toma string de cookie para saber que cokkie se debe leer, balke cookie toma un string para dientificar la cookie a meter
import { read_cookie, bake_cookie} from 'sfcookies';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

// por defecto pone el state en 0
const balance = (state = 0, action) => {
    let balance;
    // ahora como sabra este redicer manejar diferentes actions, se puede llevar a cabo ese comportamiento con el action type
    switch(action.type) {
        case constants.SET_BALANCE:
            balance = action.balance;
            break;

        case constants.DEPOSIT:
            // se deposita en el nuevo estado
            balance = state + action.deposit;
            break;

        case constants.WITHDRAW:
            balance = state - action.withdraw;
            break;

        default:
            balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
    }
    // mete el balance al cookie

    bake_cookie(BALANCE_COOKIE, balance);

    return balance;
}

export default balance;