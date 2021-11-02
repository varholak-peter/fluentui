import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { radioItemShorthandProps } from './useRadioItem';
import type { RadioItemState, RadioItemSlots } from './RadioItem.types';

/**
 * Render the final JSX of RadioItem
 */
export const renderRadioItem = (state: RadioItemState) => {
  const { slots, slotProps } = getSlots<RadioItemSlots>(state, radioItemShorthandProps);

  return (
    <slots.root {...slotProps.root}>
      <div className={state.containerClassName}>
        <slots.indicator {...slotProps.indicator} />
        <slots.input {...slotProps.input} />
      </div>
      <slots.label {...slotProps.label} />
    </slots.root>
  );
};
