import React from 'react';
import 'src/components/Tower/style.css';

import { useAppSelector, selectWarriorsData } from 'src/store';

type TowerProps = {
  selectedWarriorId: number;
  onSelectWarrior: (id: number) => void;
}
const Tower: React.FC<TowerProps> = ({ selectedWarriorId, onSelectWarrior }) => {
  const warriorsData = useAppSelector(selectWarriorsData);

  return (
    <div className="tower">
      {warriorsData.map((warrior) => (
        <a
          className={`tower__link ${selectedWarriorId === warrior.id ? 'tower__link--current' : ''}`}
          href="#"
          key = {warrior.id}
          onClick = { () => onSelectWarrior(warrior.id) }
        >
          { warrior.name }
        </a>
      ))}
    </div>
  )
}

export default Tower;
