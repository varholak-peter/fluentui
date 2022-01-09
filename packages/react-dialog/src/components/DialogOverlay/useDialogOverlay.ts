import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { DialogOverlayProps, DialogOverlaySlots, DialogOverlayState } from './DialogOverlay.types';

/**
 * Array of all shorthand properties listed in DialogOverlaySlots
 */
export const dialogOverlayShorthandProps: (keyof DialogOverlaySlots)[] = [
  'root',
  // TODO add shorthand property names
];

/**
 * Create the state required to render DialogOverlay.
 *
 * The returned state can be modified with hooks such as useDialogOverlayStyles,
 * before being passed to renderDialogOverlay.
 *
 * @param props - props from this instance of DialogOverlay
 * @param ref - reference to root HTMLElement of DialogOverlay
 */
export const useDialogOverlay = (props: DialogOverlayProps, ref: React.Ref<HTMLElement>): DialogOverlayState => {
  return {
    // TODO add appropriate props/defaults
    components: {
      // TODO add slot types here if needed (div is the default)
      root: 'div',
    },
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
  };
};
