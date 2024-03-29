import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 230,
    height: 430,
    position: 'relative',
    borderRadius: 24,
  },
  deleteFlyButton: {
    position: 'absolute',
    top: 22,
    left: 22,
    width: 48,
    height: 48,
    background: theme.palette.secondary.main,
  },
  cardBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 11,
  },
  cardTitle: {
    color: '#575757',
  },
  deleteSweepIcon: {
    color: 'rgba(0, 0, 0, 0.7)',
    width: 24,
    height: 24,
  },
}));

export default useStyles;
