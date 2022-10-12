import React, { ReactElement } from 'react';

import {
  SuperButton,
  SuperCheckbox,
  SuperEditableSpan,
  SuperInputText,
  SuperRadio,
  SuperRange,
  SuperSelect,
} from '../common';

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
