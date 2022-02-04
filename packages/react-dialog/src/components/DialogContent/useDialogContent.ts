import * as React from 'react';
import { useModalAttributes, useFocusFinders } from '@fluentui/react-tabster';
import { getNativeElementProps, useMergedRefs } from '@fluentui/react-utilities';
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
  const contentRef = React.useRef();
  const { modalAttributes } = useModalAttributes({ trapFocus: true });
  const { findFirstFocusable } = useFocusFinders();

  React.useEffect(() => {
    if (contentRef.current) {
      const firstFocusable = findFirstFocusable(contentRef.current);
      firstFocusable?.focus();
    }
  }, [contentRef, findFirstFocusable]);

  return {
    // TODO add appropriate props/defaults
    components: {
      // TODO add slot types here if needed (div is the default)
      root: 'div',
    },
    // TODO add appropriate slots, for example:
    // mySlot: resolveShorthand(props.mySlot),
    root: getNativeElementProps('div', {
      ref: useMergedRefs(ref, contentRef),
      // 'aria-label': 'todo',
      role: 'dialog',
      ...modalAttributes,
      ...props,
    }),
  };
};
