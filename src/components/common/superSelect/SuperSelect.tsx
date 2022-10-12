import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react';

import s from './SuperSelect.module.css';

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[];
  onChangeOption?: (option: any) => void;
};

export const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  onChange,
  onChangeOption,
  className,
  ...restProps
}) => {
  const mappedOptions: any[] = options
    ? options.map((option, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <option className={s.option} key={`${option}-${index}`} value={option}>
          {option}
        </option>
      ))
    : []; // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>): void => {
    if (onChange) onChange(e);
    if (onChangeOption) onChangeOption(e.currentTarget.value);
  };
  const finalSelectClassName = s.select + (className ? ` ${className}` : '');

  return (
    <select className={finalSelectClassName} onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  );
};
