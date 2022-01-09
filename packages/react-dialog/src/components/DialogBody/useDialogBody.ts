import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { DialogBodyProps, DialogBodySlots, DialogBodyState } from './DialogBody.types';

/**
 * Array of all shorthand properties listed in DialogBodySlots
 */
export const dialogBodyShorthandProps: (keyof DialogBodySlots)[] = [
  'root',
  // TODO add shorthand property names
];

/**
 * Create the state required to render DialogBody.
 *
 * The returned state can be modified with hooks such as useDialogBodyStyles,
 * before being passed to renderDialogBody.
 *
 * @param props - props from this instance of DialogBody
 * @param ref - reference to root HTMLElement of DialogBody
 */
export const useDialogBody = (props: DialogBodyProps, ref: React.Ref<HTMLElement>): DialogBodyState => {
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
