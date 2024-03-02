"use client"
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Header from '../Header'

const Blog = () => {
  useEffect(() => {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const embedContainer = document.getElementById('embedContainer');
    if (embedContainer) {
      embedContainer.style.width = `${screenWidth}px`;
      embedContainer.style.height = `${screenHeight}px`;
    }
  }, []);
  return (
    <>
      <div className='bg-black'>
        <Header /></div>
      <div id="embedContainer">
        <embed src='https://learn.shubhamiitbhu.in/' width='100%' height='100%' style={{backgroundColor:"wheat"}}/>
      </div>
    </>
  )
}
const BlogCSR = dynamic(() => Promise.resolve(Blog), { ssr: false })
export default BlogCSR