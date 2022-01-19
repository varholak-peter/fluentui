import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { dialogContentShorthandProps } from './useDialogContent';
import type { DialogContentState, DialogContentSlots } from './DialogContent.types';

/**
 * Render the final JSX of DialogContent
 */
export const renderDialogContent = (state: DialogContentState) => {
  const { slots, slotProps } = getSlots<DialogContentSlots>(state, dialogContentShorthandProps);

  // TODO Add additional slots in the appropriate place
  return <slots.root aria-modal={true} role="dialog" {...slotProps.root} />;
};
