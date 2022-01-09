import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import type { DialogOverlayState } from './DialogOverlay.types';

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
 * Apply styling to the DialogOverlay slots based on the state
 */
export const useDialogOverlayStyles = (state: DialogOverlayState): DialogOverlayState => {
  const styles = useStyles();
  state.root.className = mergeClasses(styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
