import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    // Se instancia el componente app con shallow para renderizar de forma simulada
    const app = shallow(<App />);

    it('renders properly', () => {
        expect(app).toMatchSnapshot();
    });

    it('contains a connected Wallet component', () => {
        // con esto se indica que cloge en la consola de test lo que tiene el app.debug renderizaado, se vera que tiene la funcion connect con wallet
        // console.log(app.debug());
        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    });

    it('contains a connected Loot component', () => {
        expect(app.find('Connect(Loot)').exists()).toBe(true);
    });

    it('cointains to the APIs page', () => {
        expect(app.find('a').props().href).toBe('https://www.coindesk.com/price');
    })
});