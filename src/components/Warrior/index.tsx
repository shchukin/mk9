import React from 'react';
import 'src/components/Warrior/style.css';

type Warrior = {
  // data: data[]; /* В каком виде дата? */
}

const Warrior: React.FC<Warrior> = (/* data */) => {
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
