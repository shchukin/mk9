import React from 'react';
import 'src/components/Sequence/style.css';

type MoveSet = {
  // data: data[]; /* В каком виде дата? */
}

const MoveSet: React.FC<MoveSet> = (/* data */) => {
  return (
    <div className="move-set">
      <div className="move-set__column">
        {
          // Группы с groupid:
          // 1 Basic attacks
          //   Опционально: 9 Dragon stance
          //               10 Leg Lift
          //               11 Military Stance
          //               12 Nightmare Stance
          // 2 Kombo attacks
          // 3 Fast tags
          // 4 Tag kombos
        }
      </div>
      <div className="move-set__column">
        {
          // Группы с groupid:
          // 5 Special attacks
          // 6 Enhanced attacks
          // 7 X-ray attack
          // 8 Finishing moves
        }
      </div>
    </div>
  )
}

export default MoveSet;
