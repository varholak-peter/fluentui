import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import type { DialogHeaderState } from './DialogHeader.types';

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: theme => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start', // TODO: close icon exception
    paddingBottom: '8px',
    width: '100%',

    // TODO: This is temp.
    '& > h1': {
      margin: 0,
      fontSize: theme.fontSizeBase500,
      fontWeight: theme.fontWeightMedium,
    },
  }),
});

/**
 * Apply styling to the DialogHeader slots based on the state
 */
export const useDialogHeaderStyles = (state: DialogHeaderState): DialogHeaderState => {
  const styles = useStyles();
  state.root.className = mergeClasses(styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
