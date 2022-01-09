import type { ComponentProps, ComponentState, IntrinsicShorthandProps } from '@fluentui/react-utilities';

export type DialogFooterSlots = {
  // TODO Add slots here and to dialogFooterShorthandProps in useDialogFooter.ts
  root: IntrinsicShorthandProps<'div'>;
};

export type DialogFooterCommons = {
  // TODO Add things shared between props and state here
};

/**
 * DialogFooter Props
 */
export type DialogFooterProps = ComponentProps<DialogFooterSlots> & DialogFooterCommons;

/**
 * State used in rendering DialogFooter
 */
export type DialogFooterState = ComponentState<DialogFooterSlots> & DialogFooterCommons;
