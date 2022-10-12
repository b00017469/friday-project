import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

import s from './SuperCheckbox.module.css';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperCheckboxPropsType = DefaultInputPropsType & {
  onChangeChecked?: (checked: boolean) => void;
  spanClassName?: string;
};

export const SuperCheckbox: React.FC<SuperCheckboxPropsType> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
  onChange,
  onChangeChecked,
  className,
  spanClassName,
  children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) onChange(e);

    if (onChangeChecked) onChangeChecked(e.currentTarget.checked);
  };

  const finalInputClassName = `${s.checkbox} ${className || ''}`;

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label>
      <input
        type="checkbox"
        onChange={onChangeCallback}
        className={finalInputClassName}
        {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
      />
      {children && (
        <span className={`${s.spanClassName} ${spanClassName || ''}`}>{children}</span>
      )}
    </label> // благодаря label нажатие на спан передастся в инпут
  );
};
