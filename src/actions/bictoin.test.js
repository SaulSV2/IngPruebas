// https://api.coindesk.com/v1/bpi/currentprice.json
// primero se necesita cofigirar test con mockstore, se configurara el reduxstore fake en el contexto de un test, las acciones asincronas crearan objetos action que usaran las operaciones asincronas de store, solo se tendra acceso a asycn actions y no a aobj de acciones async create, con mockstore se puede checar pure actionstore en el store
import configureMockStore from 'redux-mock-store';
// ahora el middleware que permitira retornar acciones obj, las action creator retornan solo objatos, pero queremos que regrese una primise, el middleware permitiraa retornara otrascosas en ves de obj como el primise
import thunk from 'redux-thunk';
// para mejorar la api request se usara tech methots, no se tendra que hacer mucha http request, se tendra version mock de fetch
import fetchMock from 'fetch-mock';

// se necesita contante que represente a la accion
import {FETCH_BITCOIN} from './constants';
import {fetchBitcoin} from './bitcoin';

// coinfigurar mockstore function, por si sila retorna una fucnionq ue crea la store en redux, createmockfunctions permite configurar y costuuzar que hara la fucnion con opciones
// el configure mockstore pemitira crear middleware, el middleware es thunk por lo que se le pasa en el erreglo
const createMockStore = configureMockStore([thunk]); 
// creado el moscrotrese se puede inizializar store con data pasandolo como datos al createmockstore, se tiene bitcoiun data y bitcoin data
const store = createMockStore({
    bitcoin: {

    }
});
// ahora el fetch del api en si, en el app se hara fetch del endpoiunt, fetchmock permite detern endpoint y retornar costume data cada que el user quiere acceder a ella, se usa con fetchmock functiones, para detener el ednpoint se hara mockresponse para testeo, solo se quiere saber qur repsonda con el bpi, da igual el contenido, solo se define que se quiere el bpi ya que solo estamos testeando que funcione el api
const mockResponse = {
    body: {
        bpi: 'butconin price index'
    }
};

// ahora para detener el endpoint se usa fethcmocks ghetmethot ya que se hace ghertequest, toma getparameters, una que toma el endpoint que se quiere dentener en un string representatico y otra el objeto que representa lo que se quiere que retorne la peticion
fetchMock.get(
    'https://api.coindesk.com/v1/bpi/currentprice.json',
    mockResponse
);

// la accion asincrona que hace fetch y saca el valor del bitcoin
it('create an async action to fetch the bitcoin value', () => {
    // normalmente ne reduc se testeara la funcion que retorne el objeto deseado `lano ahora se tiene el middleware que retorna el priomise, esto se teestea ya que el async function retorna un promise que el redux puede manejar, cuando va al middleware boils down simple data que el app puede usar, esa daata puede ser cualquier action que contiene body dagta y el tipo de dato que es el constante que se creo arriba, entonces se puede usar el store para crear el test para crearlo de una nueva forma, se mirara las actions que tendra el abtsh al store con getactions que mostrara que actions que se estan usando, primero se crea arrya de posibles actions
    const expectedActions = [{
        bitcoin: mockResponse.body,
        type: FETCH_BITCOIN
    }];
    // ahora se enviaraa el fetchbvitcoin action creator ene l store, `para que jest puede ejecutar el test se necesita retornar el promise
     return store.dispatch(fetchBitcoin()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });
});