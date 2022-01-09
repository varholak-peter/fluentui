import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { DialogFooterProps, DialogFooterSlots, DialogFooterState } from './DialogFooter.types';

/**
 * Array of all shorthand properties listed in DialogFooterSlots
 */
export const dialogFooterShorthandProps: (keyof DialogFooterSlots)[] = [
  'root',
  // TODO add shorthand property names
];

/**
 * Create the state required to render DialogFooter.
 *
 * The returned state can be modified with hooks such as useDialogFooterStyles,
 * before being passed to renderDialogFooter.
 *
 * @param props - props from this instance of DialogFooter
 * @param ref - reference to root HTMLElement of DialogFooter
 */
export const useDialogFooter = (props: DialogFooterProps, ref: React.Ref<HTMLElement>): DialogFooterState => {
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
