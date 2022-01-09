import * as React from 'react';

type UseDialogInstanceOptions = {
  isModal: boolean;
  isOpen: boolean;
  shouldAutoFocus: boolean;
};

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
    isOpen,
    open,
  };
};
