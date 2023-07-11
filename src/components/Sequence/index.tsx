import React from 'react';
import 'src/components/Sequence/style.css';

const Sequence: React.FC = () => {
    return(
        <div className="sequence">
            <i className="key key--playstation key--down">↓</i>
            <i className="key key--playstation key--backward">←</i>
            <i className="key key--playstation key--fk">FK</i>
            <i className="key key--playstation key--plus">+</i>
            <i className="key key--playstation key--block">Block</i>
        </div>
    )
}

export default Sequence;
