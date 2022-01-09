import * as React from 'react';
import { useDialogBody } from './useDialogBody';
import { renderDialogBody } from './renderDialogBody';
import { useDialogBodyStyles } from './useDialogBodyStyles';
import type { DialogBodyProps } from './DialogBody.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * DialogBody component
 */
export const DialogBody: ForwardRefComponent<DialogBodyProps> = React.forwardRef((props, ref) => {
  const state = useDialogBody(props, ref);

  useDialogBodyStyles(state);
  return renderDialogBody(state);
});

DialogBody.displayName = 'DialogBody';
