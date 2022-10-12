import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  HTMLAttributes,
  useState,
} from 'react';

import s from './SuperEditableSpan.module.css';

import { SuperInputText } from './index';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsType & {
  // и + ещё пропсы которых нет в стандартном инпуте
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: string;
  spanClassName?: string;

  spanProps?: DefaultSpanPropsType; // пропсы для спана
};

export const SuperEditableSpan: React.FC<SuperEditableSpanType> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  autoFocus, // игнорировать изменение этого пропса
  onBlur,
  onEnter,
  spanProps,

  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const { children, onDoubleClick, className, ...restSpanProps } = spanProps || {};

  const onEnterCallback = (): void => {
    setEditMode(false); // выключить editMode при нажатии Enter

    if (onEnter) onEnter();
  };
  const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>): void => {
    setEditMode(false); // выключить editMode при нажатии за пределами инпута

    if (onBlur) onBlur(e);
  };
  const onDoubleClickCallBack = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  ): void => {
    setEditMode(true); // включить editMode при двойном клике

    if (onDoubleClick) onDoubleClick(e);
  };

  const spanClassName = `${s.span} ${className}`;

  return (
    <div>
      {editMode ? (
        <SuperInputText
          autoFocus // пропсу с булевым значением не обязательно указывать true
          onBlur={onBlurCallback}
          onEnter={onEnterCallback}
          {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
        />
      ) : (
        <span
          onDoubleClick={onDoubleClickCallBack}
          className={spanClassName}
          {...restSpanProps}
        >
          {/* если нет захардкодженного текста для спана, то значение инпута */}
          {children || restProps.value}
        </span>
      )}
    </div>
  );
};
