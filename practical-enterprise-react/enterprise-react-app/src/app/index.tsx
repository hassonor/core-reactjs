import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { GlobalStyle } from 'styles/global-styles'
import Home from './views/pages/Home'

export function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate='%s - React Boilerplate'
        defaultTitle='React Boilerplate'
      >
        <meta name='description' content='A React Boilerplate application' />
      </Helmet>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  )
}