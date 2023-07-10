import React from 'react';
import { mkContext, mkContextValue, playerContext, playerOneContextValue, playerTwoContextValue } from 'src/context';

import { KeyVariant } from './types';

import Key from 'src/components/Key';

const App: React.FC = () => {
  return (
    <mkContext.Provider value = { mkContextValue }>

      <playerContext.Provider value = { playerOneContextValue }>
        <Key variant = { KeyVariant.Backward }></Key>
        <Key variant = { KeyVariant.Up }></Key>
        <Key variant = { KeyVariant.Forward }></Key>
        <Key variant = { KeyVariant.Down }></Key>
      </playerContext.Provider>

      <playerContext.Provider value = { playerTwoContextValue }>
          <Key variant={KeyVariant.Backward}></Key>
          <Key variant={KeyVariant.Up}></Key>
          <Key variant={KeyVariant.Forward}></Key>
          <Key variant={KeyVariant.Down}></Key>
      </playerContext.Provider>

    </mkContext.Provider>
  );
}

export default App;
