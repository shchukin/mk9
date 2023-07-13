import React from 'react';
import 'src/components/Warrior/style.css';
import { mkContext } from 'src/context'
import MoveSet from 'src/components/MoveSet';

type WarriorProps = {
  warriorId: number;
}
const Warrior: React.FC<WarriorProps> = ({ warriorId }) => {
  const context = React.useContext(mkContext);
  const warrior = context.warriorsData.find((warrior) => warrior.id === warriorId)!;

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
