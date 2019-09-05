import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import './QuoteForm.css';

class QuoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: ['AUD', 'EUR', 'GBP', 'JPY', 'USD','SGD', 'NZD', 'KRW', 'INR', 'IDR', 'CNY', 'CAD', 'EGP'],
            fromCurrency: 'AUD',
            rate: '',
            amount: "0.00",
            toCurrency: 'AUD',
            result: ''
        };
    }

    handleFromCurrencySelector = (event) => {
        this.setState({
            fromCurrency: event.target.value
        });
    }

    handleToCurrencySelector = (event) => {
        this.setState({
            toCurrency: event.target.value
        });
    }

    handleInputChange = (event) => {
        this.setState({
            amount: event.target.value
        });
    }

    getCurrencyData = (event) => {
        event.preventDefault();
        const amount = this.state.amount;
        const fromCurrency = this.state.fromCurrency;
        const toCurrency = this.state.toCurrency;
        if (amount === isNaN) {
            return
        } else {
            axios.get(`https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${this.state.fromCurrency}/${this.state.toCurrency}/${this.state.amount}?format=json`)
                .then(res => {
                    const rate = res.data.CustomerRate
                    const result = res.data.CustomerAmount
                    this.setState({
                        rate, result
                    })
                    this.props.history.push({ pathname: '/result', state: { rate, result, fromCurrency, toCurrency, amount } });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

    render() {
        const { currencies, fromCurrency, amount, toCurrency } = this.state
        return (
            <div className="container">
                <h1 className="header text-left pb-2" style={{ borderBottom: `4px solid #92a8d1` }}>Quick Quote</h1>
                <form className="form mt-3 text-left" onSubmit={this.getCurrencyData}>
                    <div className="form-row text-left">
                        <div className="form-group col-md-6">
                            <label>First Name  <span style={{ color: "red" }}>*</span></label>
                            <input type="text" className="form-control" placeholder="First Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Last Name  <span style={{ color: "red" }}>*</span></label>
                            <input type="text" className="form-control" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="form-group text-left">
                        <label>Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <span className="telephone mb-4">Telephone / Mobile</span>
                    <div className="form-row text-left">
                        <div className="form-group col-md-2 pr-0">
                            <select className="form-control">
                                <option>+61</option>
                                <option>+64</option>
                                <option>+44</option>
                                <option>+81</option>
                            </select>
                        </div>
                        <div className="form-group col-md-10 pl-0">
                            <input type="number" className="form-control" />
                        </div>
                    </div>
                    <div className="form-row text-left">
                        <div className="form-group col-md-6">
                            <label >From Currency <span style={{ color: "red" }}>*</span></label>
                            <select
                                className="form-control"
                                name="fromCurrency"
                                value={fromCurrency}
                                onChange={this.handleFromCurrencySelector}
                            >{currencies.map(currency => <option
                                key={currency}
                                value={currency}
                            >{currency}
                            </option>)}
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label >To Currency <span style={{ color: "red" }}>*</span></label>
                            <select
                                className="form-control"
                                name="toCurrency"
                                value={toCurrency}
                                onChange={this.handleToCurrencySelector}
                            >{currencies.map(currency => <option
                                key={currency}
                                value={currency}
                            >{currency}
                            </option>)}
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Amount <span style={{ color: "red" }}>*</span></label>
                            <input
                                type="number"
                                value={amount}
                                onChange={this.handleInputChange}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <button className="btn btn-primary rounded-pill mt-3 px-5" type="submit" value="submit" width="100px">GET QUOTE</button>
                </form>
            </div>

        );
    }
}


export default withRouter(QuoteForm);