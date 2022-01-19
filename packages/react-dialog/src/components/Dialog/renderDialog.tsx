import * as React from 'react';
import { Portal } from '@fluentui/react-portal';
import { getSlots } from '@fluentui/react-utilities';
import { dialogShorthandProps } from './useDialog';
import type { DialogState, DialogSlots } from './Dialog.types';

/**
 * Render the final JSX of Dialog
 */
export const renderDialog = (state: DialogState) => {
  const { slots, slotProps } = getSlots<DialogSlots>(state, dialogShorthandProps);

  // TODO Add additional slots in the appropriate place
  return state.isOpen ? (
    <Portal>
      <slots.root {...slotProps.root} />
    </Portal>
  ) : null;
};
