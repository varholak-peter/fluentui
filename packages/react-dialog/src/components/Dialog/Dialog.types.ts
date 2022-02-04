import type { ComponentProps, ComponentState, IntrinsicShorthandProps } from '@fluentui/react-utilities';

export type DialogSlots = {
  // TODO Add slots here and to dialogShorthandProps in useDialog.ts
  root: IntrinsicShorthandProps<'div'>;
};

export type DialogCommons = {
  isOpen: boolean;
  onClose?: Function;
  onOpen?: Function;
  shouldAutoFocus: boolean;
};

/**
 * Dialog Props
 */
export type DialogProps = ComponentProps<DialogSlots> & DialogCommons;

/**
 * State used in rendering Dialog
 */
export type DialogState = ComponentState<DialogSlots> & DialogCommons;
