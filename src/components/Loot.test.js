// para pasar el balance a bitcoins con el api
import React from 'react';
// para escribir el test con el component mount para rnderizar todos los children y lifecycle hooks del react componentr, tambiense mapea redux store data para ese componente
import { mount, shallow } from 'enzyme';
import {Loot} from './Loot';

describe('Loot', () => {
    const mockFetchBitcoin = jest.fn();
    let props = {
        balance: 10,
        bitcoin: {}
    }
    let loot = shallow(<Loot {...props} />);

    it('renders properly', () => {
        expect(loot.render()).toMatchSnapshot();
    });

    describe('when mounted', () => {
        // el componente montaada disparara el fetch bitcoin function el component mount hook
        beforeEach(() => {
            props.fetchBitcoin = mockFetchBitcoin;
            loot = mount(<Loot {...props} />);
        });

        it('dispatches the `fetchBitcoin()`method it recives from props', () => {
            expect(mockFetchBitcoin).toHaveBeenCalled();
        });
    });

    describe('when there are valid bitcoin props', () => {
        beforeEach(() => {
            props = {
                balance: 10,
                bitcoin: {
                    bpi: {
                        USD: {
                            rate: '1,000'
                        }
                    }
                }
            };
            loot = shallow(<Loot {...props} />)
        });

        it('displays the correct bitcoin value', () => {
            // se testea que en el h3 salga el valor del bitcoin
            expect(loot.find('h3').text()).toEqual('Bitcoin Balance: 0.01');
        });

    })
})