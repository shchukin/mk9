import React from 'react';
import 'src/components/Group/style.css';
import Sequence from 'src/components/Sequence';
import Move from "src/components/Move";
import {KeyVariant, MoveItem} from "src/types";

type GroupProps = {
  title: string;
  headSequence?: KeyVariant[];
  movesList: MoveItem[];
}
const Group: React.FC<GroupProps> = ({title, headSequence, movesList}) => {
  return (
    <div className="group group--expanded">
      <div className="group__head">
        <h3 className="group__heading">
          <button className="group__handler" type="button">
            {title}
          </button>
        </h3>
        {headSequence !== undefined ? 
          <div className="group__combination">
            <Sequence keyVariants = { headSequence } />
          </div>
          :
          null
        }
      </div>
      <div className="group__body">
        <div className="group__list">
          {movesList.map((item, index) => (
            <Move
              label={item.label}
              keyVariants={item.keyVariants}
              comment={item.comment}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Group;
