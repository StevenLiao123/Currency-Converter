import React from 'react';

import QuoteForm from '../../components/QuoteForm';
import QuoteResult from '../../components/QuoteResult';

export default () => <div className="quick-quote px-5">
        <h1 className="header text-left" style={{borderBottom: `8px solid #CADBE4`}}>Quick Quote</h1>
        <QuoteForm />
        <QuoteResult />
</div>