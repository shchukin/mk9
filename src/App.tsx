import React from 'react';
import { mkContext, mkContextValue, playerContext, playerOneContextValue, playerTwoContextValue } from 'src/context';

import { KeyVariant } from './types';

import Key from 'src/components/Key';
import Sequence from "./components/Sequence";

const App: React.FC = () => {
  return (

    <mkContext.Provider value = { mkContextValue }>

        <Sequence></Sequence>

      <playerContext.Provider value = { playerOneContextValue }>
        <Key variant = { KeyVariant.Backward }></Key>
        <Key variant = { KeyVariant.Up }></Key>
        <Key variant = { KeyVariant.Forward }></Key>
        <Key variant = { KeyVariant.Down }></Key>
        <br/>
        <Key variant = { KeyVariant.Plus }></Key>
        <Key variant = { KeyVariant.Comma }></Key>
        <br/>
        <Key variant = { KeyVariant.Fp }></Key>
        <Key variant = { KeyVariant.Bp }></Key>
        <Key variant = { KeyVariant.Fk }></Key>
        <Key variant = { KeyVariant.Bk }></Key>
        <br/>
        <Key variant = { KeyVariant.Throw }></Key>
        <Key variant = { KeyVariant.Tag }></Key>
        <Key variant = { KeyVariant.Stance }></Key>
        <Key variant = { KeyVariant.Block }></Key>
      </playerContext.Provider>

      <br/>
      <br/>
      <br/>
      <br/>

      <playerContext.Provider value = { playerTwoContextValue }>
          <Key variant={KeyVariant.Backward}></Key>
          <Key variant={KeyVariant.Up}></Key>
          <Key variant={KeyVariant.Forward}></Key>
          <Key variant={KeyVariant.Down}></Key>
          <br/>
          <Key variant={KeyVariant.Plus}></Key>
          <Key variant={KeyVariant.Comma}></Key>
          <br/>
          <Key variant={KeyVariant.Fp}></Key>
          <Key variant={KeyVariant.Bp}></Key>
          <Key variant={KeyVariant.Fk}></Key>
          <Key variant={KeyVariant.Bk}></Key>
          <br/>
          <Key variant={KeyVariant.Throw}></Key>
          <Key variant={KeyVariant.Tag}></Key>
          <Key variant={KeyVariant.Stance}></Key>
          <Key variant={KeyVariant.Block}></Key>
      </playerContext.Provider>

    </mkContext.Provider>
  );
}

export default App;
