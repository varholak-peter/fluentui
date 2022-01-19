import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import type { DialogOverlayState } from './DialogOverlay.types';

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: theme => ({
    backgroundColor: 'pink', // @varholak-peter #refactor This is temp only
    height: '100vh',
    left: 0,
    maxHeight: '100vh',
    maxWidth: '100vw',
    overflow: 'hidden',
    position: 'fixed',
    top: 0,
    width: '100vw',
    zIndex: 500, // @varholak-peter #refactor This is temp only
  }),
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
