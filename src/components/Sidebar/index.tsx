import React from 'react';
import 'src/components/Logo/style.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__head">
        <div className="sidebar__actions">
          Здесь либо логотипа либо Hide player 2
        </div>
        <div className="sidebar__platform">
          Здесь Input типе Select для выбора платформы
        </div>
      </div>
      <div className="sidebar__body">
        здесь Tower
      </div>
    </div>
  )
}

export default Sidebar;
