import React from 'react';
import 'src/components/ShowPlayer/style.css';
import { useAppDispatch, useAppSelector, actions, selectShowSecondPlayer } from 'src/store';

const ShowPlayer: React.FC = () => {
  const dispatch = useAppDispatch();
  const showSecondPlayer = useAppSelector(selectShowSecondPlayer);

  if (showSecondPlayer)
  {
    return null;
  }

  return (
    <button className="show-player" type="button" onClick = { () => dispatch(actions.visibilitySecondPlayerChanged(true)) }>
      Show player 2
    </button>
  )
}

export default ShowPlayer;
