import React from 'react'
import { ChakraProvider,theme,ColorModeScript } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import ColorModeSwitcher from './ColorModeSwitcher';
import ColorModeSwitcher from './components/ColorModeSwitcher';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
    <App />
    </ChakraProvider>
  </React.StrictMode>
)

