"use client"

import React from 'react'
import TopBar from './components/TopBar'
import MyNav from './components/MyNav'
import Footer from './components/Footer'
import BottomfixLinks from './components/BottomfixLinks'
import { usePathname } from 'next/navigation'

const NextLayout = ({children}) => {
    const path =usePathname()
    console.log(path)
  return (
    <>
    
   {!path.includes("admin") ? <><TopBar />
          <MyNav />
          {children}
          <Footer />
          <BottomfixLinks />
          </>
          :
          <>{
            children
          }</>
          }
    
    </>
  )
}

export default NextLayout