import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { dialogOverlayShorthandProps } from './useDialogOverlay';
import type { DialogOverlayState, DialogOverlaySlots } from './DialogOverlay.types';

/**
 * Render the final JSX of DialogOverlay
 */
export const renderDialogOverlay = (state: DialogOverlayState) => {
  const { slots, slotProps } = getSlots<DialogOverlaySlots>(state, dialogOverlayShorthandProps);

  // TODO Add additional slots in the appropriate place
  return <slots.root {...slotProps.root} />;
};
