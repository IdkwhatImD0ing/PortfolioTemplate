import React, {useState, useEffect} from 'react'
import {ThemeProvider} from '@mui/material'
import {themeOptions} from '../Components/theme'
import './App.scss'
import Matrix from '../Components/HomePage/Matrix'
import Topbar from '../Components/Topbar/Topbar'
import Botbar from '../Components/Botbar'
import {WidthContextProvider} from '../Components/page'
import {Analytics} from '@vercel/analytics/react'

function MyApp({Component, pageProps}) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  }, [])
  return loading ? (
    <div className="Loader-wrapper">
      <div className="Loader" />
    </div>
  ) : (
    <ThemeProvider theme={themeOptions}>
      <WidthContextProvider>
        <Matrix fullscreen={true} speed={1} color="#9D00FF" />
        <Component {...pageProps} />
        <Topbar />
        <Botbar />
      </WidthContextProvider>
      <Analytics />
    </ThemeProvider>
  )
}

export default MyApp
