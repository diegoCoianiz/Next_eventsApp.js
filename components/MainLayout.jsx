//_app.js

import React, { Children } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

const MainLayout = ({Children}) => {
  return (
    <div>
      <Header />
      <main>{Children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout