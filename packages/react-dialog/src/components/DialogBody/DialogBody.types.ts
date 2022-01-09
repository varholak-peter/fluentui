import type { ComponentProps, ComponentState, IntrinsicShorthandProps } from '@fluentui/react-utilities';

export type DialogBodySlots = {
  // TODO Add slots here and to dialogBodyShorthandProps in useDialogBody.ts
  root: IntrinsicShorthandProps<'div'>;
};

export type DialogBodyCommons = {
  // TODO Add things shared between props and state here
};

/**
 * DialogBody Props
 */
export type DialogBodyProps = ComponentProps<DialogBodySlots> & DialogBodyCommons;

/**
 * State used in rendering DialogBody
 */
export type DialogBodyState = ComponentState<DialogBodySlots> & DialogBodyCommons;
