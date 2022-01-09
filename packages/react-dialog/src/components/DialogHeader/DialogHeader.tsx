import * as React from 'react';
import { useDialogHeader } from './useDialogHeader';
import { renderDialogHeader } from './renderDialogHeader';
import { useDialogHeaderStyles } from './useDialogHeaderStyles';
import type { DialogHeaderProps } from './DialogHeader.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * DialogHeader component
 */
export const DialogHeader: ForwardRefComponent<DialogHeaderProps> = React.forwardRef((props, ref) => {
  const state = useDialogHeader(props, ref);

  useDialogHeaderStyles(state);
  return renderDialogHeader(state);
});

DialogHeader.displayName = 'DialogHeader';
