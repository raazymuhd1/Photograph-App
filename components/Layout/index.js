import React from 'react'
import Head from "next/head"
import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ children }) => {
  return (
    <div>
        <Header />
        <Head>
            <meta name="photograph app" content="creating a photograph application using nextjs" />
            <title> Photograph App </title>
        </Head>
        { children }
        <Footer />
    </div>
  )
}

export default Layout