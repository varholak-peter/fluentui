import * as React from 'react';
import { useDialogFooter } from './useDialogFooter';
import { renderDialogFooter } from './renderDialogFooter';
import { useDialogFooterStyles } from './useDialogFooterStyles';
import type { DialogFooterProps } from './DialogFooter.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * DialogFooter component
 */
export const DialogFooter: ForwardRefComponent<DialogFooterProps> = React.forwardRef((props, ref) => {
  const state = useDialogFooter(props, ref);

  useDialogFooterStyles(state);
  return renderDialogFooter(state);
});

DialogFooter.displayName = 'DialogFooter';
