import React from 'react';
import 'src/components/Sidebar/style.css';
import { PlayerIndex } from 'src/types';
import Tower from 'src/components/Tower';
import Logo from 'src/components/Logo';
import Input from 'src/components/Input';
import HidePlayer from 'src/components/HidePlayer';


type SidebarProps = {
  playerIndex: PlayerIndex;
  selectedWarriorId: number;
  onSelectWarrior: (id: number) => void;
}
const Sidebar: React.FC<SidebarProps> = ({ playerIndex, selectedWarriorId, onSelectWarrior }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__head">
        <div className="sidebar__actions">
          {playerIndex === 'one' && (
            <Logo />
          )}
          {playerIndex === 'two' && (
            <HidePlayer />
          )}
        </div>
        <div className="sidebar__platform">
          <Input playerIndex={playerIndex} />
        </div>
      </div>
      <div className="sidebar__body">
        <Tower selectedWarriorId={selectedWarriorId} onSelectWarrior={onSelectWarrior} />
      </div>
    </div>
  )
}

export default Sidebar;
