import { InputHTMLAttributes, useState } from 'react';
import getFullClassName from '../../utils/getFullClassName';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const InputField = ({ id, className, type, placeholder }: Props): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);
  const fullClassName = getFullClassName('field', className);

  return (
    <div className={fullClassName}>
      <label className={`field__label${isFocused ? ' field__label_visible' : ''}`} htmlFor={id}>
        {placeholder}
      </label>
      <input
        className="field__input"
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        onFocus={(): void => setIsFocused(true)}
        onBlur={(): void => setIsFocused(false)}
      />
    </div>
  );
};

export default InputField;
