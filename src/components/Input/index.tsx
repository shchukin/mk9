import React from 'react';
import 'src/components/Input/style.css';

type InputProps = {
  type: string;
  placeholder?: string;
  selectOptions?: string[];
}
const Input: React.FC<InputProps> = () => {
  return (
    <>
      Если type пришёл "text":
      <div className="input">
        <input className="input__widget" type="text" placeholder="Lorem Ipsum"/>
      </div>

      Если type пришёл "select":
      <div className="input input--select">
        <select className="input__widget">
          <option value="classic">Classic: FP/BP/FK/BK</option>
          <option value="playstation" selected={true}>PlayStation 3</option>
          <option value="xbox">Xbox 360</option>
        </select>
      </div>
    </>
  )
}

export default Input;
