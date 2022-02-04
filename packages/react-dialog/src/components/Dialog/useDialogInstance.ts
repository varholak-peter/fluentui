import * as React from 'react';
import { DialogProps } from './Dialog.types';

type UseDialogInstanceOptions = Pick<DialogProps, 'isOpen' | 'onClose' | 'onOpen' | 'shouldAutoFocus'>;

const noop = () => undefined;

const defaultOptions = {
  isOpen: false,
  onClose: noop,
  onOpen: noop,
  shouldAutoFocus: true,
};

export type DialogInstance = {
  close: () => void;
  isOpen: boolean;
  onClose: Function;
  onOpen: Function;
  open: () => void;
  shouldAutoFocus: boolean;
};

export const useDialogInstance = (options?: Partial<UseDialogInstanceOptions>): DialogInstance => {
  const fullOptions = { ...defaultOptions, ...options };

  const [isOpen, setIsOpen] = React.useState(fullOptions.isOpen);

  const close = () => {
    setIsOpen(false);
    // @varholak-peter #TODO: ensure this is called once the state is updated.
    fullOptions.onClose?.();
  };

  const open = () => {
    setIsOpen(true);
    // @varholak-peter #TODO: ensure this is called once the state is updated.
    fullOptions.onOpen?.();
  };

  return {
    close,
    isOpen,
    onClose: fullOptions.onClose,
    onOpen: fullOptions.onOpen,
    open,
    shouldAutoFocus: fullOptions.shouldAutoFocus,
  };
};
