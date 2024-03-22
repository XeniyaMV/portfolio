import { InputHTMLAttributes, useState } from 'react';
import getFullClassName from '../../utils/getFullClassName';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface Props<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  registeredName: Path<T>;
  helperText?: string;
  hasError?: boolean;
  register?: UseFormRegister<T>;
}

const InputField = <T extends FieldValues>({
  id,
  className,
  type,
  placeholder,
  registeredName,
  helperText,
  hasError,
  register,
}: Props<T>): JSX.Element => {
  const [isFocused, setIsFocused] = useState(false);
  const fullClassName = getFullClassName('field', className);

  return (
    <div className={fullClassName}>
      <label className={`field__label${isFocused ? ' field__label_visible' : ''}`} htmlFor={registeredName}>
        {placeholder}
      </label>
      <input
        className={`field__input${hasError ? ' field__input_error' : ''}`}
        type={type}
        id={id}
        {...(register && register(registeredName))}
        placeholder={placeholder}
        onFocus={(): void => setIsFocused(true)}
        onBlur={(): void => setIsFocused(false)}
      />
      {helperText && <p className="field__helper-text">{helperText}</p>}
    </div>
  );
};

export default InputField;
