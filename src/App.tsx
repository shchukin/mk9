import React from 'react';
import { mkContext, mkContextValue, playerContext, playerOneContextValue, playerTwoContextValue } from 'src/context';

import { KeyVariant } from './types';

import Key from 'src/components/Key';
import Sequence from "./components/Sequence";
import Comment from "./components/Comment";
import Action from "./components/Action";
import Move from "./components/Move";
import Group from "./components/Group";

const App: React.FC = () => {
  return (

    <mkContext.Provider value = { mkContextValue }>

      <playerContext.Provider value = { playerOneContextValue }>


        <h2>Key</h2>
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

        <br/>
        <br/>
        <br/>
        <h2>Sequence</h2>
        <p>
          Любая последовательность нажатий заворачивается в <b>Sequence</b>
          -- это просто обёрточный <b>div</b>, в который пробрасывается несколько кнопок.
        </p>
        <Sequence keyVariants = {[KeyVariant.Fp, KeyVariant.Bp, KeyVariant.Fk]} />

        <br/>
        <br/>
        <h2>Action</h2>
        <p>
          Название
        </p>
        <p>
          Один удар -- это <b>Action</b>
          В него нужно пробросить название и последовательность нажатий
        </p>

        <Action label = 'Heel Kicks' keyVariants = {[KeyVariant.Fp, KeyVariant.Bp, KeyVariant.Fk]} />

        <br/>
        <br/>
        <h2>Comment</h2>
        <p>
          Под ударом (ниже по HTML) может быть комментарий <b>Comment</b>:
        </p>
        <Comment>Can be done in the air</Comment>


        <br/>
        <br/>
        <h2>Move</h2>
        <p>
          <b>Action</b> и <b>Comment</b> собираются в <b>Move</b>:
        </p>

        <Move
          label = 'Heel Kicks'
          keyVariants = {[KeyVariant.Fp, KeyVariant.Bp, KeyVariant.Fk]}
          comment = 'Can be done in the air'
        />

        <p>
          <b>Move</b> -- главная сущность в проекте. Она берётся из БД в виде:
          <ul>
            <li>Название удара</li>
            <li>Последовательность нажатий</li>
            <li>Опциональный комментарий</li>
          </ul>
        </p>


        <br/>
        <br/>
        <h2>Group</h2>
      Basic attack
        Doom Slice     [forward][plus][bp]
        Blade Overhead [backward][plus][bp]
        Heel Kicks     [forward][plus][fk]
        Shin Blast     [forward][plus][bk]

      Combo attacks
        Torment     [fp][comma][fp][comma][fp]
        Damnation   [fp][comma][fp][comma][bk]
        Brimstone   [bp][comma][fp][comma][bp]
        Gravedigger [bp][comma][fp][plus][bp]
        Doom Blade  [forward][plus][bp][comma][fp][comma][bk]


        {/*<Group title='KOMBO ATTACKS' movesList={}></Group>*/}

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
