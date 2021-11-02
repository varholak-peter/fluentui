import * as React from 'react';
import { Label, LabelProps } from '@fluentui/react-label';
import {
  getNativeElementProps,
  resolveShorthand,
  useControllableState,
  useEventCallback,
  useMergedRefs,
} from '@fluentui/react-utilities';
import type { RadioItemProps, RadioItemSlots, RadioItemState } from './RadioItem.types';

/**
 * Array of all shorthand properties listed in RadioItemSlots
 */
export const radioItemShorthandProps: (keyof RadioItemSlots)[] = ['root', 'indicator', 'input', 'label'];

/**
 * Create the state required to render RadioItem.
 *
 * The returned state can be modified with hooks such as useRadioItemStyles,
 * before being passed to renderRadioItem.
 *
 * @param props - props from this instance of RadioItem
 * @param ref - reference to root HTMLElement of RadioItem
 */
export const useRadioItem = (props: RadioItemProps, ref: React.Ref<HTMLElement>): RadioItemState => {
  const [checked, setChecked] = useControllableState({
    defaultState: props.defaultChecked,
    state: props.checked,
    initialState: false,
  });

  const inputInternalRef = React.useRef<HTMLInputElement>(null);
  const inputShorthand = resolveShorthand(props.input, {
    required: true,
    defaultProps: {
      disabled: props.disabled ?? false,
      type: 'radio',
      required: props.required ?? false,
    },
  });

  const onChange = useEventCallback<[React.ChangeEvent<HTMLInputElement>], void>(ev => {
    ev.stopPropagation();

    const { checked: isChecked } = ev.currentTarget;

    props.onChange?.(ev);
    setChecked(isChecked);
  });

  // TODO(Peter): Add ID logic.
  return {
    checked,
    components: {
      root: 'span',
      indicator: 'div',
      input: 'input',
      label: Label as React.ComponentType<LabelProps>,
    },
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
    input: {
      ...inputShorthand,
      ref: useMergedRefs(inputShorthand.ref, inputInternalRef),
      checked,
      onChange,
    },
    indicator: resolveShorthand(props.indicator, {
      required: true,
    }),
    label: resolveShorthand(props.label, {
      required: true,
    }),
  };
};
