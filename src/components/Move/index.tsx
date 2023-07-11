import React from 'react';
import 'src/components/Move/style.css';

const Move: React.FC = () => {
  return (
    <div className="move">
      <div className="action">
        <strong className="action__title">
          Flameport
        </strong>
        <span className="action__separator">
            :
        </span>
        <span className="action__combination">
            <span className="sequence">
                <i className="key key--playstation key--down">↓</i>
                <i className="key key--playstation key--backward">←</i>
                <i className="key key--playstation key--fk">FK</i>
                <i className="key key--playstation key--plus">+</i>
                <i className="key key--playstation key--block">Block</i>
            </span>
        </span>
      </div>
      <div className="comment">
        Can be done in the air
      </div>
    </div>
  )
}

export default Move;
