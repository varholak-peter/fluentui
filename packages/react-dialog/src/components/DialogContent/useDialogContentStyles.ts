import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import type { DialogContentState } from './DialogContent.types';

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: theme => ({
    backgroundColor: theme.colorNeutralBackground1,
    borderRadius: '8px',
    boxShadow: theme.shadow64,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    left: '50%',
    margin: 'auto',
    maxHeight: '100vh',
    maxWidth: '600px',
    padding: '32px',
    pointerEvents: 'auto',
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    zIndex: 505, // @varholak-peter #refactor This is temp only

    '@media screen and (max-width: 620px)': {
      padding: '16px',
    },
  }),
});

/**
 * Apply styling to the DialogContent slots based on the state
 */
export const useDialogContentStyles = (state: DialogContentState): DialogContentState => {
  const styles = useStyles();
  state.root.className = mergeClasses(styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
