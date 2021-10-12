// LOS ACTION SON OBJETOS Y SU PARTE DINAMICA ES SU ACTION CREATOR
// para saber el tipo de el action que se definira con el action creator se necesita a las constantes del otro js
import * as constants from './constants';

export const setBalance = balance => {
    return {
        type: constants.SET_BALANCE,
        balance: balance
    }
}

export const deposit = deposit => {
    return {
        type: constants.DEPOSIT,
        deposit
    }
}

export const withdraw = withdraw => {
    return {
        type: constants.WITHDRAW,
        withdraw
    }
}