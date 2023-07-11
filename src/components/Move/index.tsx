import React from 'react';
import 'src/components/Move/style.css';
import { KeyVariant } from 'src/types';
import Action from 'src/components/Action';
import Comment from 'src/components/Comment';

type MoveProps = {
  label: string;
  comment?: string;
  keyVariants: KeyVariant[];
}
const Move: React.FC<MoveProps> = ({ label, comment, keyVariants }) => {
  return (
    <div className="move">
      <Action label = { label } keyVariants = { keyVariants } />
      { comment !== undefined ? <Comment>{ comment }</Comment> : null }
    </div>
  )
}

export default Move;
