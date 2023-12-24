"use client"
import React, { useEffect } from 'react'
import getBlogsMetadata from '../../lib/mdx'
import Link from 'next/link'
import dynamic from 'next/dynamic'
type Props = {}

const Blog = (props: Props) => {
  // const blogs = getBlogsMetadata()
  // console.log(blogs)
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
      <div id="embedContainer">
        <embed src='https://learn.shubhamiitbhu.in/' width='100%' height='100%' />
      </div>
      {/* <h1>Blog</h1> */}
      {/* <ul>
        {blogs.map((blog) => (
          <li key={blog}>
            <Link href={`/blog/${blog}`}>{blog}</Link>
          </li>
        ))}
      </ul> */}
    </>
  )
}
const BlogCSR = dynamic(() => Promise.resolve(Blog), { ssr: false })
export default BlogCSR
// export default Blog