import React from 'react';
import 'src/components/Player/style.css';

const Player: React.FC = (/* data */) => {
  return (
    <div className="player">здесь или player--one или player--two
      <div className="player__sidebar">
        Здесь будет больше компонентов из сайдбара
      </div>
      <div className="player__list">
        Здесь будет текущий Warrior
      </div>
    </div>
  )
}

export default Player;
