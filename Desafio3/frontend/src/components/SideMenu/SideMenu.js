import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { elevatedTabsStylesHook } from '@mui-treasury/styles/tabs';
import React from 'react';

function SideMenu() {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabsStyles = elevatedTabsStylesHook.useTabs();
  const tabItemStyles = elevatedTabsStylesHook.useTabItem();
  return (
    <Tabs
      classes={tabsStyles}
      value={tabIndex}
      onChange={(e, index) => setTabIndex(index)}
    >
      <Tab classes={tabItemStyles} label={'Data'} />
      <Tab classes={tabItemStyles} label={'Rule'} />
      <Tab classes={tabItemStyles} label={'Indexes'} />
      <Tab classes={tabItemStyles} label={'Usage'} />
    </Tabs>
  );
}

export default SideMenu;
