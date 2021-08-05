import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import CancelIcon from '@material-ui/icons/Cancel';
import PersonIcon from '@material-ui/icons/Person';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { AddProducts, EditProduct, EditStoreProfile, Login, Register, StoreProducts, StoreProfile } from '../../pages';
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
      {value === index && <Box p={3}>{children}</Box>}
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

function LoggedMenu() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // TODO https://stackoverflow.com/questions/41638688/material-uis-tabs-integration-with-react-router-4
  return (
    <Router>
      <div className={classes.root}>
        <Route
          path='/'
          render={({ location }) => (
            <Tabs
              orientation='vertical'
              variant='scrollable'
              value={value}
              onChange={handleChange}
              aria-label='Opcoes do menu'
              className={classes.tabs}
            >
              <Tab
                icon={
                  <StorefrontIcon
                    fontSize='large'
                    className={classes.svgIcon}
                  />
                }
                {...a11yProps(0)}
                className={classes.tab}
                component={Link}
                to='/store'
              />
              <Tab
                icon={<PersonIcon fontSize='large' className={classes.tab} />}
                {...a11yProps(1)}
                component={Link}
                to='/user'
              />
              <Tab
                icon={<CancelIcon fontSize='large' className={classes.tab} />}
                {...a11yProps(2)}
                component={Link}
                to='/logout'
              />
              <Tab
                icon={<CancelIcon fontSize='large' className={classes.tab} />}
                {...a11yProps(3)}
              />
              <Tab
                icon={<CancelIcon fontSize='large' className={classes.tab} />}
                {...a11yProps(4)}
              />
              <Tab
                icon={<CancelIcon fontSize='large' className={classes.tab} />}
                {...a11yProps(5)}
              />
              <Tab
                icon={<CancelIcon fontSize='large' className={classes.tab} />}
                {...a11yProps(6)}
              />
            </Tabs>
          )}
        />
        <TabPanel value={value} index={0}>
          <AddProducts />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <EditProduct />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Login />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Register />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <StoreProducts />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <StoreProfile />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <EditStoreProfile />
        </TabPanel>
      </div>
    </Router>
  );
}
export default LoggedMenu;
