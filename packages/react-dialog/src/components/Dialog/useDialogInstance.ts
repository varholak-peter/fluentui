import * as React from 'react';
import { DialogProps } from './Dialog.types';

type UseDialogInstanceOptions = Pick<DialogProps, 'isModal' | 'isOpen' | 'shouldAutoFocus'>;

const defaultOptions = {
  isModal: true,
  isOpen: false,
  shouldAutoFocus: true,
};

export const useDialogInstance = (options?: Partial<UseDialogInstanceOptions>) => {
  const fullOptions = { ...defaultOptions, ...options };

  const [isOpen, setIsOpen] = React.useState(fullOptions.isOpen);

  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(true);
  };

  return {
    close,
    isModal: fullOptions.isModal,
    isOpen,
    open,
    shouldAutoFocus: fullOptions.shouldAutoFocus,
  };
};
