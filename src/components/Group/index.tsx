import React from 'react';
import cc from 'classcat';


import 'src/components/Group/style.css';
import Sequence from 'src/components/Sequence';
import Move from "src/components/Move";
import {KeyVariant, MoveItem } from "src/types";

type GroupProps = {
  title: string;
  headSequence?: KeyVariant[];
  movesList: MoveItem[];
}
const Group: React.FC<GroupProps> = ({title, headSequence, movesList}) => {
  const [groupExpanding, setGroupExpanding] = React.useState<boolean>(true);

  const onHeadButtonClick = () => {
    setGroupExpanding(!groupExpanding);
  }

  return (
    <div className={cc([{ "group--expanded": groupExpanding }, "group"])}>
      <div className="group__head">
        <h3 className="group__heading">
          <button className="group__handler" type="button" onClick = {onHeadButtonClick}>
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
      {groupExpanding && (
        <div className="group__body">
          <div className="group__list">
            {movesList.map((item, index) => (
              <Move
                label={item.name}
                keyVariants={item.sequence}
                comment={item.comment}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Group;
