import React from 'react'
import reportWebVitals from './reportWebVitals'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'sanitize.css/sanitize.css'

// Import root app
import { App } from 'app'

import { HelmetProvider } from 'react-helmet-async'

import { configureAppStore } from 'store/configureStore'

// Initialize languages
import './locales/i18n'

const store = configureAppStore()
const MOUNT_NODE = document.getElementById('root') as HTMLElement
const root = createRoot(MOUNT_NODE!)

interface Props {
  Component: typeof App;
}

const ConnectedApp = ({ Component }: Props) => (
  <Provider store={store}>
    <HelmetProvider>
      <Component />
    </HelmetProvider>
  </Provider>
)
const render = (Component: typeof App) => {
  root.render(<ConnectedApp Component={Component} />)
}

if (module.hot) {
  // Hot reloadable translation json files and app
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./app', './locales/i18n'], () => {
    root.unmount()
    const App = require('./app').App
    render(App)
  })
}

render(App)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
