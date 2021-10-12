// en redux actions son paquetes de datos en un objeto, tiene un tipo indicando el tipo de action y los datos que actualizaran en el store, los types de cada store son harcoded strings que unicli identufuy it, se asumura que se tiene acceso a estos unique keys importandolos
import * as constants from './constants';
// los datos que se meteran en los actions se importaran de otro archivo llamado balance
import * as actions from './balance';

// bloque para prmirer test de un action, action es un objeto pero lo que se testea el dimamic action cretors que crean estas action, los action creators son ufcniones que retornan el action con un tipo, da dinamic cata que se vana en los àrametors
it('creates an action to set the balance', () => {
    // primero se checa que retonra si el bancance es 0
    const balance = 0;

    // aqyi se esoecifica la accion con el tupo y los datos del balance, los tipos se toman del constant, ub action type se define con un maacro de c++, como una constante
    const expectedAction = {type: constants.SET_BALANCE, balance};

    // ahora con la accion esperada se define que la produce, el action creator la produce, su inpout sera el balance y retorna el expected action como outpu, el action crweator se define en los actions
    expect(actions.setBalance(balance)).toEqual(expectedAction);
});

// testeo de deposito a el balance
it('creates an action to deposit into the balance', () => {
    const deposit = 10;

    const expectedAction = {
        type: constants.DEPOSIT,
        deposit
    };

    expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it('creates an action to withdraw from the balance', () => {
    const withdraw = 10;

    const expectedAction = {
        type: constants.WITHDRAW,
        withdraw
    };

    expect(actions.withdraw(withdraw)).toEqual(expectedAction);
})

// los reducers tamvien son fucniones con resultados uniocos dependiendo en los input
