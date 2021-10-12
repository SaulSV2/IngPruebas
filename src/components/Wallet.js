import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';

export class Wallet extends Component {
    constructor(){
        super();
        this.state = {
            balance: undefined
        }
    }

    updateBlanace = event =>{
        const balanceToUpdate = parseInt(event.target.value, 10);
        if(isNaN(balanceToUpdate)){
            return this.setState({
                balance: 0
            });
        } else {
            return this.setState({
                balance: balanceToUpdate
            });
        }
    }
    
    deposit = () => this.props.deposit(this.state.balance);

    withdraw = () => this.props.withdraw(this.state.balance);

    render() {
        // se debe poner el dato del balanceo en estaa parte, esto vive en el reduxstore, por lo que se necesita conectar el reduxstore
        return (
            <div>
                <h3 className='balance'>Wallet Balance: {this.props.balance}</h3>
                <br/>
                <input className='input-wallet' onChange={this.updateBlanace}/>
                <button className="btn-deposit" onClick={this.deposit}>Desposit</button>
                <button className='btn-withdraw' onClick={this.withdraw}>Withdraw</button>
            </div>
        )
    }
}

// connect retorna una funcion por lo que a esa funcion que se reotrna se la pasa el wallet para conectar el store con el wallet, el connect fucntion toma 2 parametros, el primero es una fucnion que idnica que parte del sotore se qi¡uiere usar para este component o el reducer que se utilizara, el segundo es el action creator que se quiere usar en el componente para mandar datos al redix store,ese aun no se suara, en el primer paarametro se pasara una fucntion con el balance state que saca erl estado del rootreducer y lo mapea al balance.
// de esta forma el conncectr ejecuta elcallbaack cada que se ejecuta en wallet alguna de los actions que se le indican
export default connect(state => {
    return {balance: state.balance}
}, {deposit, withdraw})(Wallet);