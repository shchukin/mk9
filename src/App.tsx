import React from 'react';
import { playerContext, playerOneContextValue, playerTwoContextValue } from 'src/context';
import Player from 'src/components/Player';
import { getDataAsync, selectWarriorsData, selectShowSecondPlayer, useAppSelector, useAppDispatch } from 'src/store';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const warriorsData = useAppSelector(selectWarriorsData);
  const showSecondPlayer = useAppSelector(selectShowSecondPlayer);

  React.useEffect(() => {
    dispatch(getDataAsync())
  }, [dispatch]);

  if (warriorsData.length === 0)
  {
    return <div className="loading">
      Loading
      <span className="loading__hellip">
        <span className="loading__dot">.</span>
        <span className="loading__dot">.</span>
        <span className="loading__dot">.</span>
      </span>
    </div>;
  }

  return (
    <div className = { `page ${showSecondPlayer ? 'page--player-2-active' : ''}` }>
      <playerContext.Provider value = { playerOneContextValue }>
        <Player playerIndex='one' />
      </playerContext.Provider>
      <playerContext.Provider value = { playerTwoContextValue }>
        <Player playerIndex='two' />
      </playerContext.Provider>
    </div>
  );
}

export default App;
