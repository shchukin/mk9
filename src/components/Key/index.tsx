import React from 'react';
import styled from 'styled-components';
import { mkContext, PlayerContextClass, playerContext } from 'src/context';
import { KeyVariant } from 'src/types';
import 'src/components/Key/style.css';

const contentMap: Record<KeyVariant, string> = {
  [KeyVariant.Backward]: '←',
  [KeyVariant.Down]: '↓',
  [KeyVariant.Forward]: '→',
  [KeyVariant.Up]: '↑',
}

type KeyProps = {
  variant: KeyVariant;
}
const Key: React.FC<KeyProps> = ({ variant }) => {
  const context = React.useContext(mkContext);
  const contextP = React.useContext<PlayerContextClass>(playerContext);
  const content = contentMap[variant];

  const notation = contextP.playerNumber === 1 ? context.playerOneNotation : context.playerTwoNotation;

  return (
    <>
      <i className = {`key key--${variant}`}>{ content }</i>
      <div>{ notation }</div>
    </>
  )
}

export default Key;