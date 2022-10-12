import React, { ChangeEvent, InputHTMLAttributes, DetailedHTMLProps } from 'react';

import s from './SuperRadio.module.css';

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SuperRadioPropsType = DefaultRadioPropsType & {
  options?: any[];
  onChangeOption?: (option: any) => void;
};

export const SuperRadio: React.FC<SuperRadioPropsType> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type,
  name,
  options,
  value,
  className,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) onChange(e);
    if (onChangeOption) onChangeOption(e.currentTarget.value);
  };
  const finalRadioClassName = s.radio + (className ? ` ${className}` : '');

  const mappedOptions: any[] = options
    ? options.map((option, i) => (
        // eslint-disable-next-line react/no-array-index-key,jsx-a11y/label-has-associated-control
        <label className={s.label} key={`${name}-${i}`}>
          <input
            className={finalRadioClassName}
            type="radio"
            name={name}
            value={option}
            onChange={onChangeCallback}
            checked={option === value}
            {...restProps}
          />
          {option}
        </label>
      ))
    : [];

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{mappedOptions}</>;
};
