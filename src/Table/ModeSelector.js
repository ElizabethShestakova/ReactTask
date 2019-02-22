import React from 'react';

export default props => {

    const smallData = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    const bigData = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

    return (
        <div className="buttons">
            <button className="mode-btn" onClick={() => props.onSelect(smallData)}>Маленький набор данных</button>
            <button className="mode-btn" onClick={() => props.onSelect(bigData)}>Большой набор данных</button>
        </div>
    )

}