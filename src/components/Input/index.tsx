import React from 'react';
import 'src/components/Input/style.css';
import { PlayerIndex, Notation } from 'src/types';

import { useAppDispatch, useAppSelector, actions, selectPlayerOneNotation, selectPlayerTwoNotation } from 'src/store';

type InputProps = {
  playerIndex: PlayerIndex;
}
const Input: React.FC<InputProps> = ({ playerIndex }) => {
  const dispatch = useAppDispatch();
  const playerOneNotation = useAppSelector(selectPlayerOneNotation);
  const playerTwoNotation = useAppSelector(selectPlayerTwoNotation);


  const selectedNotation = playerIndex === 'one' ? playerOneNotation : playerTwoNotation;

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (playerIndex === 'one')
    {
      dispatch(actions.playerOneNotationChanged(event.target.value as Notation));
    }
    else
    {
      dispatch(actions.playerTwoNotationChanged(event.target.value as Notation));
    }
  }

  return (
    <div className="input input--select">
      <select className="input__widget" onChange={onChangeHandler}>
        <option value={Notation.Classic} selected = { selectedNotation === Notation.Classic }>Classic: FP/BP/FK/BK</option>
        <option value={Notation.Playstation} selected = { selectedNotation === Notation.Playstation }>PlayStation 3</option>
        <option value={Notation.Xbox} selected = { selectedNotation === Notation.Xbox }>Xbox 360</option>
      </select>
    </div>
  )
}

export default Input;
