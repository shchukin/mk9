import React from 'react';
import 'src/components/Action/style.css';

import Sequence from 'src/components/Sequence';
import { KeyVariant } from 'src/types';

type ActionProps = {
    label: string;
    keyVariants: KeyVariant[];
}
const Action: React.FC<ActionProps> = ({ label, keyVariants }) => {
  return (
    <div className="action">
      <strong className="action__title">
        { label }
      </strong>
      <span className="action__separator">
          :
      </span>
      <span className="action__combination">
          <Sequence keyVariants = { keyVariants } />
      </span>
    </div>
  )
}

export default Action;
