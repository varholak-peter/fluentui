import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { dialogHeaderShorthandProps } from './useDialogHeader';
import type { DialogHeaderState, DialogHeaderSlots } from './DialogHeader.types';

/**
 * Render the final JSX of DialogHeader
 */
export const renderDialogHeader = (state: DialogHeaderState) => {
  const { slots, slotProps } = getSlots<DialogHeaderSlots>(state, dialogHeaderShorthandProps);

  // TODO Add additional slots in the appropriate place
  return (
    <slots.root {...slotProps.root}>
      <h1>{state.root.children}</h1>
    </slots.root>
  );
};
