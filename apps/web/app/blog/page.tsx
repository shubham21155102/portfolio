import React from 'react'
import getBlogsMetadata from '../../lib/mdx'
import Link from 'next/link'
type Props = {}

const Blog = (props: Props) => {
  const blogs = getBlogsMetadata()
  console.log(blogs)
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog}>
            <Link href={`/blog/${blog}`}>{blog}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Blog