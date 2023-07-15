import React from 'react';
import 'src/components/Warrior/style.css';
import MoveSet from 'src/components/MoveSet';

import { useAppSelector, selectWarriorsData } from 'src/store';

type WarriorProps = {
  warriorId: number;
}
const Warrior: React.FC<WarriorProps> = ({ warriorId }) => {
  const warriorsData = useAppSelector(selectWarriorsData);
  const warrior = warriorsData.find((warrior) => warrior.id === warriorId)!;

  const refName = React.useRef<HTMLHeadingElement>(null);
  const refColumn = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (refName.current !== null && refColumn.current !== null)
    {
      const offsetColumn = refColumn.current.offsetLeft;
      const offsetName = refName.current.offsetLeft;

      if (offsetColumn > offsetName)
      {
        refName.current.style.marginLeft = `${offsetColumn - offsetName}px`;
      }
    }
  }, [refName, refColumn]);

  return (
    <div className="warrior">
      <h2 className="warrior__name" ref = { refName }>
        {warrior.name}
      </h2>
      <div className="warrior__moves">
        <MoveSet warriorId={warriorId} ref = { refColumn } />
      </div>
    </div>
  )
}

export default Warrior;
