import React from 'react';
import 'src/components/Warrior/style.css';


const Warrior: React.FC = () => {
  return (
    <div className="warrior">
      <h2 className="warrior__name">
        Scorpion
      </h2>
      <div className="warrior__moves">
        Здесь MoveSet
      </div>
    </div>
  )
}

export default Warrior;
