import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import { dialogFooterShorthandProps } from './useDialogFooter';
import type { DialogFooterState, DialogFooterSlots } from './DialogFooter.types';

/**
 * Render the final JSX of DialogFooter
 */
export const renderDialogFooter = (state: DialogFooterState) => {
  const { slots, slotProps } = getSlots<DialogFooterSlots>(state, dialogFooterShorthandProps);

  // TODO Add additional slots in the appropriate place
  return <slots.root {...slotProps.root} />;
};
