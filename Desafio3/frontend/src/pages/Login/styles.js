import { makeStyles } from '@material-ui/core/styles';

/* eslint-disable no-unused-vars */
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 560,
    width: 390,
    margin: 'auto',
    marginTop: 160,
    padding: 80,
    borderRadius: 16,
  },
  form: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },

  alert: {
    fontWeight: 500,
    width: 220,
  },
}));

export default useStyles;
