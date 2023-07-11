import React from 'react';
import 'src/components/Sequence/style.css';
import Key from 'src/components/Key';
import { KeyVariant } from 'src/types';

type SequenceProps = {
    keyVariants: KeyVariant[];
}
const Sequence: React.FC<SequenceProps> = ({ keyVariants }) => {
    return(
        <div className="sequence">
            {keyVariants.map((item, index) => (
                <Key key = { index } variant = { item } />
            ))}
        </div>
    )
}

export default Sequence;
