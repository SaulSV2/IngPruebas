// para unir a todos los reducers en uno solo y que en el index se cree solo un store para ambos reducers
import rootReducer from './index';

describe('rootReducer', () => {
    // primero se testea el default state de la app
    it('initializes the default state', () => {
        // se espera que el root reducer devuelva el default state, paraa el baalance es un 0 y paraa el bitcoin es un objeto vacio
        expect(rootReducer({}, {})).toEqual({
            balance: 0,
            bitcoin: {}
        });
    })
})