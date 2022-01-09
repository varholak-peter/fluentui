import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { DialogContentProps, DialogContentSlots, DialogContentState } from './DialogContent.types';

/**
 * Array of all shorthand properties listed in DialogContentSlots
 */
export const dialogContentShorthandProps: (keyof DialogContentSlots)[] = [
  'root',
  // TODO add shorthand property names
];

/**
 * Create the state required to render DialogContent.
 *
 * The returned state can be modified with hooks such as useDialogContentStyles,
 * before being passed to renderDialogContent.
 *
 * @param props - props from this instance of DialogContent
 * @param ref - reference to root HTMLElement of DialogContent
 */
export const useDialogContent = (props: DialogContentProps, ref: React.Ref<HTMLElement>): DialogContentState => {
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
