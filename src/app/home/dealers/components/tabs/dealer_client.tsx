import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { MarkChatReadOutlined, MarkChatUnreadOutlined, Shop2Outlined, ShopTwo, Store, StoreOutlined } from '@mui/icons-material';
import { Grid } from '@mui/material';
import DealerProductCard from '../product_card';
import RequestList from '../list/request_list';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ClientDealerTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<StoreOutlined />} label="Inventory" {...a11yProps(0)} />
          <Tab icon={<MarkChatUnreadOutlined />} label="Requests" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid container >
          <Grid p={.5} item md={4} sm={3} >
          <DealerProductCard />
          </Grid>
          <Grid p={.5} item md={4} sm={3} >
          <DealerProductCard />
          </Grid>
          <Grid p={.5} item md={4} sm={3} >
          <DealerProductCard />
          </Grid>
          
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <RequestList />
      </CustomTabPanel>
      {/* <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel> */}
    </Box>
  );
}