/* eslint-disable no-unused-vars */
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Layout from './components/Layout'
import Grid from './components/Grid'
import Hero from './components/Hero'

function App() {

  return (
    <Layout>
      <main>
        <Hero/>
        <Grid/>
      </main>
    </Layout>
  )
}

export default App
