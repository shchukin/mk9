import React from 'react';
import 'src/components/Group/style.css';
import Key from "../Key";
import Move from "../Move";
import {KeyVariant} from "../../types";

type GroupProps = {
  title: string;
  movesList: []; /* массив чего? какой тип? */
}

const Group: React.FC<GroupProps> = ({title, movesList}) => {
  return (
    <div className="group group--expanded">
      <div className="group__head">
        <h3 className="group__heading">
          <button className="group__handler" type="button">
            {title}
          </button>
        </h3>
      </div>
      <div className="group__body">
        <div className="group__list">
          {movesList.map((item, index) => (
            /* Здесь по-идее должны быть данные изнутри самого movesList пробрасываться в move */
            <Move
              label='Heel Kicks'
              keyVariants={[KeyVariant.Fp, KeyVariant.Bp, KeyVariant.Fk]}
              comment='Can be done in the air'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Group;
