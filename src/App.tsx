import CssBaseline from '@mui/material/CssBaseline';
import {
  createTheme,
  darken,
  styled,
  ThemeProvider,
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import Map from './Map';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  const StyledMapContainer = styled('div')(({ theme }) => ({
    height: `calc(100vh - ${theme.spacing(8)})`,
    margin: theme.spacing(4),
    borderRadius: theme.spacing(3),
    background: darken(theme.palette.background.paper, 0.4),
  }));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledMapContainer>
        <Map prefersDark={prefersDarkMode} />
      </StyledMapContainer>
    </ThemeProvider>
  );
}

export default App;
