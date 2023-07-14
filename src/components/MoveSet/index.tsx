import React from 'react';
import 'src/components/MoveSet/style.css';
import Group from 'src/components/Group';

import { useAppSelector, selectWarriorsData } from 'src/store';

type MoveSetProps = {
  warriorId: number;
}
const MoveSet: React.FC<MoveSetProps> = ({ warriorId }) => {
  const warriorsData = useAppSelector(selectWarriorsData);
  const warrior = warriorsData.find((warrior) => warrior.id === warriorId)!;

  const group01 = warrior.groups.find((group) => group.id === 1)!;
  const group02 = warrior.groups.find((group) => group.id === 2)!;
  const group03 = warrior.groups.find((group) => group.id === 3)!;
  const group04 = warrior.groups.find((group) => group.id === 4)!;
  const group05 = warrior.groups.find((group) => group.id === 5)!;
  const group06 = warrior.groups.find((group) => group.id === 6)!;
  const group07 = warrior.groups.find((group) => group.id === 7)!;
  const group08 = warrior.groups.find((group) => group.id === 8)!;

  const group09 = warrior.groups.find((group) => group.id === 9);
  const group10 = warrior.groups.find((group) => group.id === 10);
  const group11 = warrior.groups.find((group) => group.id === 11);
  const group12 = warrior.groups.find((group) => group.id === 12);


  return (
    <div className="move-set">
      <div className="move-set__column">
        <Group title = { group01.title } headSequence = { group01.sequence } movesList = { group01.moves } />
        {group09 !== undefined && (
          <Group title = { group09.title } headSequence = { group09.sequence } movesList = { group09.moves } />
        )}
        {group10 !== undefined && (
          <Group title = { group10.title } headSequence = { group10.sequence } movesList = { group10.moves } />
        )}
        {group11 !== undefined && (
          <Group title = { group11.title } headSequence = { group11.sequence } movesList = { group11.moves } />
        )}
        {group12 !== undefined && (
          <Group title = { group12.title } headSequence = { group12.sequence } movesList = { group12.moves } />
        )}
        <Group title = { group02.title } headSequence = { group02.sequence } movesList = { group02.moves } />
        <Group title = { group03.title } headSequence = { group03.sequence } movesList = { group03.moves } />
        <Group title = { group04.title } headSequence = { group04.sequence } movesList = { group04.moves } />
      </div>
      <div className="move-set__column">
        <Group title = { group05.title } headSequence = { group05.sequence } movesList = { group05.moves } />
        <Group title = { group06.title } headSequence = { group06.sequence } movesList = { group06.moves } />
        <Group title = { group07.title } headSequence = { group07.sequence } movesList = { group07.moves } />
        <Group title = { group08.title } headSequence = { group08.sequence } movesList = { group08.moves } />
      </div>
    </div>
  )
}

export default MoveSet;
