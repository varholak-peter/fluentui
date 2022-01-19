import type { ComponentProps, ComponentState, IntrinsicShorthandProps } from '@fluentui/react-utilities';

export type DialogHeaderSlots = {
  // TODO Add slots here and to dialogHeaderShorthandProps in useDialogHeader.ts
  root: IntrinsicShorthandProps<'header'>;
};

export type DialogHeaderCommons = {
  // TODO Add things shared between props and state here
};

/**
 * DialogHeader Props
 */
export type DialogHeaderProps = ComponentProps<DialogHeaderSlots> & DialogHeaderCommons;

/**
 * State used in rendering DialogHeader
 */
export type DialogHeaderState = ComponentState<DialogHeaderSlots> & DialogHeaderCommons;
