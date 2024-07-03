import * as React from 'react';
import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppAppBar from './home/components/AppAppBar';
import Hero from './home/components/Hero';
import LogoCollection from './home/components/LogoCollection';
import Highlights from './home/components/Highlights';
import Pricing from './home/components/Pricing';
import Features from './home/components/Features';
import Testimonials from './home/components/Testimonials';
import FAQ from './home/components/FAQ';
import Footer from './home/components/Footer';
import getLPTheme from './getLPTheme';
import useThemeMode from '../hooks/themeMode';
import { Cookies } from '@/app/utils/cookies';

 

export default function LandingPage() {
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
 
  const { mode, setMode } = useThemeMode();

  return (
    <React.Fragment>
      <AppAppBar />
      <Hero />
      {/* <Box sx={{ bgcolor: 'background.default' }}>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
      </Box> */}

    </React.Fragment>
  );
}
