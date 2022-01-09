import type { ComponentProps, ComponentState, IntrinsicShorthandProps } from '@fluentui/react-utilities';

export type DialogContentSlots = {
  // TODO Add slots here and to dialogContentShorthandProps in useDialogContent.ts
  root: IntrinsicShorthandProps<'div'>;
};

export type DialogContentCommons = {
  // TODO Add things shared between props and state here
};

/**
 * DialogContent Props
 */
export type DialogContentProps = ComponentProps<DialogContentSlots> & DialogContentCommons;

/**
 * State used in rendering DialogContent
 */
export type DialogContentState = ComponentState<DialogContentSlots> & DialogContentCommons;
