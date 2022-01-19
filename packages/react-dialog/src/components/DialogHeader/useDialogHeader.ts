import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { DialogHeaderProps, DialogHeaderSlots, DialogHeaderState } from './DialogHeader.types';

/**
 * Array of all shorthand properties listed in DialogHeaderSlots
 */
export const dialogHeaderShorthandProps: (keyof DialogHeaderSlots)[] = [
  'root',
  // TODO add shorthand property names
];

/**
 * Create the state required to render DialogHeader.
 *
 * The returned state can be modified with hooks such as useDialogHeaderStyles,
 * before being passed to renderDialogHeader.
 *
 * @param props - props from this instance of DialogHeader
 * @param ref - reference to root HTMLElement of DialogHeader
 */
export const useDialogHeader = (props: DialogHeaderProps, ref: React.Ref<HTMLElement>): DialogHeaderState => {
  return {
    // TODO add appropriate props/defaults
    components: {
      root: 'header',
    },
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
  };
};
