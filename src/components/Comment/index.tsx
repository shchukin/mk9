import React from 'react';
import 'src/components/Comment/style.css';

type CommentProps = {
  children: React.ReactNode;
}
const Comment: React.FC<CommentProps> = ({ children }) => {
  return (
    <div className="comment">{ children }</div>
  )
}

export default Comment;
