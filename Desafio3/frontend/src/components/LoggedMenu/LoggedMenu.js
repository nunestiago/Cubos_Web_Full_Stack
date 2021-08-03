import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import CancelIcon from '@material-ui/icons/Cancel';
import PersonIcon from '@material-ui/icons/Person';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { AddProducts, Store } from '../../pages';
import useStyles from './styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function LoggedMenu() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        aria-label='Opcoes do menu'
        className={classes.tabs}
      >
        <Tab
          icon={<StorefrontIcon fontSize='large' />}
          {...a11yProps(0)}
          className={classes.tab}
        />
        <Tab
          icon={<PersonIcon fontSize='large' className={classes.tab} />}
          {...a11yProps(1)}
        />
        <Tab
          icon={<CancelIcon fontSize='large' className={classes.tab} />}
          {...a11yProps(2)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Store />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddProducts />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
