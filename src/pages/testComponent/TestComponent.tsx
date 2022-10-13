import React, { ReactElement } from 'react';

import {
  SuperButton,
  SuperCheckbox,
  SuperEditableSpan,
  SuperInputText,
  SuperRadio,
  SuperRange,
  SuperSelect,
} from '../../components';

export const TestComponent = (): ReactElement => {
  return (
    <div>
      <SuperSelect />
      <SuperButton />
      <SuperInputText />
      <SuperCheckbox />
      <SuperRange />
      <SuperEditableSpan />
      <SuperRadio />
    </div>
  );
};
