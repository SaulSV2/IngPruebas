import React from 'react';
import {shallow} from 'enzyme';
import {Wallet} from './Wallet';

describe('Wallet', () => {
    const mockDeposit = jest.fn();
    const mockWithdraw = jest.fn();
    const props = {balance: 20, deposit: mockDeposit, withdraw: mockWithdraw};
    // el wallet component tiene que tener los props para que se puedan testear
    const wallet = shallow(<Wallet {...props} />);

    it('renders properly', () => {
        expect(wallet.render()).toMatchSnapshot();
    });

    it('displays the balance from props', () => {
        // ahoraa se toma el balance data en el h3
        expect(wallet.find('.balance').text()).toEqual('Wallet Balance: 20');
    });

    it('creates an input to deposit into or withdraw from the balance', () => {
        expect(wallet.find('.input-wallet').exists()).toBe(true);
    });

    describe('when the user types into the wallet input', () => {

        describe('and types a NaN number', () => {
            // numero que desbriube que repsresenta al user balance en el tip del desceribe, es string porque es el valor que se recibe por defecto en un iuntpu detext
            const userBalance = 're';

            beforeEach(() => {
                wallet.find('.input-wallet').simulate('change', {
                    target: {
                        value: userBalance
                    }
                });
            });

            it('updates the local wallet balance in `state` with the same number', () => {
                expect(wallet.state().balance).toEqual(0);
            });
    
            describe('and the user wants to make a deposit', () => {
                beforeEach(() =>
                    wallet.find('.btn-deposit').simulate('click')
                );
    
                it('dispatcher the `deposit()` it recives from the props with local balance', () => {
                    expect(mockDeposit).toHaveBeenCalledWith(0);
                });
            });
    
            describe('and the user wantso to make a witdthdraw', () => {
                beforeEach(() => wallet.find('.btn-withdraw').simulate('click'));
    
                it('dispatcher the `withdraw()` it recives from props with the local balance', () => {
                    expect(mockWithdraw).toHaveBeenCalledWith(0);
                })
            });
        });

        describe('and types a Numeric number', () => {
            // numero que desbriube que repsresenta al user balance en el tip del desceribe, es string porque es el valor que se recibe por defecto en un iuntpu detext
            const userBalance = '10';

            beforeEach(() => {
                wallet.find('.input-wallet').simulate('change', {
                    target: {
                        value: userBalance
                    }
                });
            });

            it('updates the local wallet balance in `state` and converts it to a number', () => {
                expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
            });
    
            describe('and the user wants to make a deposit', () => {
                beforeEach(() =>
                    wallet.find('.btn-deposit').simulate('click')
                );
    
                it('dispatcher the `deposit()` it recives from the props with local balance', () => {
                    expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
                });
            });
    
            describe('and the user wantso to make a witdthdraw', () => {
                beforeEach(() => wallet.find('.btn-withdraw').simulate('click'));
    
                it('dispatcher the `withdraw()` it recives from props with the local balance', () => {
                    expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
                })
            });
        });

        // it('checks the input is not a NaN numeric type', () => {
        //     expect(isNaN(wallet.state().balance)).toBe(false);
        // });
    }); 
});