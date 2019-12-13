import { makeStyles } from '@material-ui/styles';
import { theme } from './Theme';

export const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: 0,
    height: '100%',
    fontFamily: 'Ubuntu'
  }
}));
