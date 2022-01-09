import * as React from 'react';
import { useDialogContent } from './useDialogContent';
import { renderDialogContent } from './renderDialogContent';
import { useDialogContentStyles } from './useDialogContentStyles';
import type { DialogContentProps } from './DialogContent.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * DialogContent component
 */
export const DialogContent: ForwardRefComponent<DialogContentProps> = React.forwardRef((props, ref) => {
  const state = useDialogContent(props, ref);

  useDialogContentStyles(state);
  return renderDialogContent(state);
});

DialogContent.displayName = 'DialogContent';
