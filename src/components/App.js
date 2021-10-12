import React from 'react';
import Wallet from './Wallet';
import Loot from './Loot';

// una oprimizacion es àsar esto a statemen functional component, esto es un componente de react totalmetne fucnional y retorna jsx y no se extiende de component, no tiene estados ni nada de eso, casi rodos los componentrs que usa app necesitan la clase Component, pero esta no, por lo que se puede hacer un statement functional component haciendola una funcion que retonra el render
// se tiene beneficio sabiendo que solo se retorna jsx en este componente, no se tiene que preocupar del binding del onjeto, mejora el performance, tambien se tiene menos codigo
const App = () => {
    return (
        <div>
            <h2>Loot Check</h2>
            <hr />
            <Wallet />
            <hr />
            <Loot />
            <div>Powered by <a target="_blank" href="https://www.coindesk.com/price">Coindesk</a></div>
        </div>
    );
}

export default App;