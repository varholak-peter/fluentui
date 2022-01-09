import * as React from 'react';
import { useDialogOverlay } from './useDialogOverlay';
import { renderDialogOverlay } from './renderDialogOverlay';
import { useDialogOverlayStyles } from './useDialogOverlayStyles';
import type { DialogOverlayProps } from './DialogOverlay.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * DialogOverlay component
 */
export const DialogOverlay: ForwardRefComponent<DialogOverlayProps> = React.forwardRef((props, ref) => {
  const state = useDialogOverlay(props, ref);

  useDialogOverlayStyles(state);
  return renderDialogOverlay(state);
});

DialogOverlay.displayName = 'DialogOverlay';
