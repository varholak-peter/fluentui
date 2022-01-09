import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import type { DialogFooterState } from './DialogFooter.types';

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: theme => ({
    // TODO Add default styles for the root element
  }),

  // TODO add additional classes for different states and/or slots
});

/**
 * Apply styling to the DialogFooter slots based on the state
 */
export const useDialogFooterStyles = (state: DialogFooterState): DialogFooterState => {
  const styles = useStyles();
  state.root.className = mergeClasses(styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
