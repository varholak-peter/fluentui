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

    '& > .fui-Button:not(:last-child)': {
      marginRight: '8px',
    },

    '@media screen and (max-width: 620px)': {
      alignItems: 'stretch',
      flexDirection: 'column',

      '& > .fui-Button': {
        margin: 0,
        maxWidth: 'none',

        '&:not(:last-child)': {
          marginBottom: '8px',
          marginRight: 0,
        },
      },
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
