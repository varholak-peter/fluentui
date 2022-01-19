import { makeStyles, mergeClasses } from '@fluentui/react-make-styles';
import type { DialogFooterState } from './DialogFooter.types';

/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: theme => ({
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',

    '& > *:not(:last-child)': {
      marginRight: '8px',
    },
  }),
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
