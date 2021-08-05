import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    minHeight: '100vh',
  },

  tabs: {
    maxWidth: 140,
    borderRight: `1px solid ${theme.palette.divider}`,
    borderRadius: '0 0 40px 0',
    backgroundColor: theme.palette.background.barBackground,
    display: 'flex',
    alignItems: 'center',
    paddingTop: 110,
    color: theme.palette.text.secondary,
  },
  tab: {
    boxSizing: 'content-box',
  },
  svgIcon: { padding: 20 },
  '&:active': { color: 'red' },
}));

export default useStyles;
