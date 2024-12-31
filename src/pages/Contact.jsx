import React from 'react'
import SplitScreen from '../components/FlexBox/SplitScreen'

function Contact() {
  return (
    <>
    {/* Here we can add map and input for the blog and contact card*/}
    <SplitScreen left={<Blog/>} right={<Blog/>}/>
  </>
  )
}

export default Contact