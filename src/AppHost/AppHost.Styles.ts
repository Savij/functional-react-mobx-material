import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.light,
    padding: 0
  }
}));
