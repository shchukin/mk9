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

  return (
    <div className="warrior">
      <h2 className="warrior__name">
        {warrior.name}
      </h2>
      <div className="warrior__moves">
        <MoveSet warriorId={warriorId} />
      </div>
    </div>
  )
}

export default Warrior;
