import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import type { DialogBodyState } from './DialogBody.types';

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: theme => ({
    paddingBottom: '8px',
  }),
});

/**
 * Apply styling to the DialogBody slots based on the state
 */
export const useDialogBodyStyles = (state: DialogBodyState): DialogBodyState => {
  const styles = useStyles();
  state.root.className = mergeClasses(styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
