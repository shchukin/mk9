import React from 'react';
import 'src/components/Player/style.css';

import Sidebar from 'src/components/Sidebar';
import Warrior from 'src/components/Warrior';
import ShowPlayer from 'src/components/ShowPlayer';
import { PlayerIndex } from 'src/types';


import { useAppSelector, selectShowSecondPlayer } from 'src/store';

type PlayerProps = {
  playerIndex: PlayerIndex;
}
const Player: React.FC<PlayerProps> = ({ playerIndex }) => {
  const showSecondPlayer = useAppSelector(selectShowSecondPlayer);
  const [selectedWarriorId, setSelectedWarriorId] = React.useState<number>(1);

  const onSelectHandler = (id: number) => {
    setSelectedWarriorId(id);
  }

  if (playerIndex === 'two' && !showSecondPlayer)
  {
    return <ShowPlayer />
  }

  return (
    <div className={`player player--${playerIndex}`}>
      <div className="player__sidebar">
        <Sidebar playerIndex={playerIndex} selectedWarriorId={selectedWarriorId} onSelectWarrior={onSelectHandler} />
      </div>
      <div className="player__list">
        <Warrior warriorId={selectedWarriorId} />
      </div>
    </div>
  )
}

export default Player;
