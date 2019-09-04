import React, { Component } from 'react';
import CurrencyInput from 'react-currency-input';

import './QuoteForm.css';

class QuoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencies: ['AUD', 'EUR', 'USD', 'GBP', 'JPY', 'SGD', 'NZD', 'KRW', 'INR', 'IDR', 'CNY', 'CAD', 'EGP'],
            fromCurrency: 'AUD',
            rate: '',
            amount: "0.00",
            toCurrency: '',
            result: ''
        };
    }

    render() {
        const { currencies, fromCurrency, rate, amount, toCurrency, result } = this.state

        return (
            <form class="form mt-3">
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
                    <label for="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <span className="telephone mb-4">Telephone / Mobile</span>
                <div className="form-row text-left">
                    <div className="form-group col-md-2 pr-0">
                        <select class="form-control" id="sel1">
                            <option>+61</option>
                            <option>+64</option>
                            <option>+44</option>
                            <option>+81</option>
                        </select>
                    </div>
                    <div className="form-group col-md-10 pl-0">
                        <input type="text" className="form-control" />
                    </div>
                </div>


                <div className="form-row text-left">
                    <div className="form-group col-md-6">
                        <label >From Currency <span style={{ color: "red" }}>*</span></label>
                        <select className="form-control">
                            <option value="cad">CAD</option>
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                            <option value="gbp">GBP</option>
                            <option value="ars">ARS</option>
                            <option value="aud">AUD</option>
                            <option value="bbd">BBD</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label >To Currency <span style={{ color: "red" }}>*</span></label>
                        <select className="form-control">
                            <option value="cad">CAD</option>
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                            <option value="gbp">GBP</option>
                            <option value="ars">ARS</option>
                            <option value="aud">AUD</option>
                            <option value="bbd">BBD</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Amount <span style={{ color: "red" }}>*</span></label>
                        <CurrencyInput className="form-control" value={amount} onChangeEvent={this.handleChange} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary rounded-pill mt-3 px-5" width="100px">GET QUOTE</button>
            </form>
        );
    }
}


export default QuoteForm;
