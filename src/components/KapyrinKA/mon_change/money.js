import React from 'react';
import Money_Controller from './moneychange';

class Money_Element extends React.Component {
    render() {
        return (
            <div className="mon_change">
                <Money_Controller/>
            </div>
        )
    }
}

export default Money_Element;