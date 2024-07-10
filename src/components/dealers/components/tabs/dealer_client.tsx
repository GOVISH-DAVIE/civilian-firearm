import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { MarkChatReadOutlined, MarkChatUnreadOutlined, Shop2Outlined, ShopTwo, Store, StoreOutlined } from '@mui/icons-material';
import { Grid } from '@mui/material';  
import DealerProductCard from '@/app/home/dealers/components/product_card';
import RequestList from '@/app/home/dealers/components/list/request_list';

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

      {[
        {
          "name": "Glock 17 Gen 4",
          "desc": "The Glock 17 Gen 4 is a popular semi-automatic pistol known for its reliability, durability, and ease of use. Widely used by law enforcement and military, it features a 17-round magazine, modular back strap design, and a safe action system. The Gen 4 is lightweight and highly accurate.",
          "qty": 10,
          "image": "1.jpeg"
        },
        {
          "name": "Glock 17 Gen 5",
          "desc": "The Glock 17 Gen 5 includes several enhancements over its predecessors, including a more durable finish, improved barrel design, and no finger grooves on the grip. It remains a top choice for law enforcement and military use, known for its reliability and precision.",
          "qty": 15,
          "image": "2.jpeg"
        },
        {
          "name": "Glock 17 MOS",
          "desc": "The Glock 17 MOS (Modular Optic System) allows for easy mounting of reflex sights, making it a versatile choice for competitive shooting and personal defense. It features the same reliability and performance as the standard Glock 17.",
          "qty": 8,
          "image": "g17.jpg"
        },
        {
          "name": "Glock 17C",
          "desc": "The Glock 17C is a compensated version of the Glock 17, designed to reduce muzzle flip and recoil. It features integrated compensator ports on the slide and barrel, making it ideal for quick, accurate follow-up shots.",
          "qty": 12,
          "image": "1.jpeg"
        },
        {
          "name": "Glock 17L",
          "desc": "The Glock 17L features an extended barrel and slide for increased accuracy and performance. This model is favored by competition shooters for its superior handling and precision. It retains the reliability and ease of use characteristic of the Glock 17 series.",
          "qty": 5,
          "image": "g17.jpg"
        }
      ]
        .map((item, index) => <Grid key={index} p={.5} item md={4} sm={3} >
          <DealerProductCard name={item.name} qty={item.qty} desc={item.desc} image={item.image} />
        </Grid>
        )}
          
          
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <RequestList />
      </CustomTabPanel>
    </Box>
  );
}