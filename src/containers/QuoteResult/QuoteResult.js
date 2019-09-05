import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './QuoteResult.css';

class QuoteResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: this.props.location.state.result,
            rate: this.props.location.state.rate,
            fromCurrency: this.props.location.state.fromCurrency,
            toCurrency: this.props.location.state.toCurrency
        }
    }

    handleClickEvent = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <h1 className="header text-left pb-2" style={{ borderBottom: `4px solid #92a8d1` }}>Quick Quote</h1>
                <div className="quote-result mt-3">
                    <div className="content">
                        <h4>OFX Customer Rate</h4>
                        <h1 className="currency-rate text-center mb-3">{this.props.location.state.rate}</h1>
                        <h4>From</h4>
                        <h2 className="fromCurrency mb-3">{this.props.location.state.fromCurrency} <span className="currency">{this.props.location.state.amount}</span></h2>
                        <h4>To</h4>
                        <h2>{this.props.location.state.toCurrency} <span className="currency">{this.props.location.state.result}</span></h2>
                        <button className="btn btn-primary rounded-pill mt-5 px-4" type="button" onClick={this.handleClickEvent} width="100px">START NEW QUOTE</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(QuoteResult);
