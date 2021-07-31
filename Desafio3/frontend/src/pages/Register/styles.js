const { makeStyles } = require('@material-ui/core');

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    maxHeight: 850,
    margin: `160px auto`,
    padding: 75,
    textAlign: 'center',
  },
}));

export default useStyles;
