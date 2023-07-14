import React from 'react';
import 'src/components/HidePlayer/style.css';

import { useAppDispatch, actions } from 'src/store';

const HidePlayer: React.FC = () => {
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(actions.visibilitySecondPlayerChanged(false));
  }

  return (
    <button className="hide-player" type="button" onClick = {onClickHandler}>
      Hide player 2
    </button>
  )
}

export default HidePlayer;
