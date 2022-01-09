import type { ComponentProps, ComponentState, IntrinsicShorthandProps } from '@fluentui/react-utilities';

export type DialogOverlaySlots = {
  // TODO Add slots here and to dialogOverlayShorthandProps in useDialogOverlay.ts
  root: IntrinsicShorthandProps<'div'>;
};

export type DialogOverlayCommons = {
  // TODO Add things shared between props and state here
};

/**
 * DialogOverlay Props
 */
export type DialogOverlayProps = ComponentProps<DialogOverlaySlots> & DialogOverlayCommons;

/**
 * State used in rendering DialogOverlay
 */
export type DialogOverlayState = ComponentState<DialogOverlaySlots> & DialogOverlayCommons;
