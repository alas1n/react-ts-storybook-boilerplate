import { addDecorator } from '@storybook/react'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Route, NavLink, Routes, BrowserRouter } from 'react-router-dom'

// import { lightTheme } from '../src/styles/theme'

addDecorator(story => (
  // <ThemeProvider theme={lightTheme}>
  <StyledEngineProvider injectFirst>
    <BrowserRouter>
      <CssBaseline />
      {story()}
    </BrowserRouter>
  </StyledEngineProvider>
  // </ThemeProvider>
))
