import React from 'react'
import fs from 'fs'
import Markdown from 'react-markdown'
import matter from 'gray-matter'
import Classes from "./slug.module.css"
const getBlogsMetadata = (slug:string) => {
    const folderPath = `blogs/`
    const filePath = `${folderPath}${slug}.md`
    const fileContents = fs.readFileSync(filePath, 'utf8')
    // console.log(fileContents)
    return fileContents
    }
    
const page = (props: any) => {
    const slug = props.params.slug
    const blogs = getBlogsMetadata(slug)
    console.log(blogs)
  return (
    <>
    <h1>Blog about {slug}</h1>
   <Markdown className={Classes.markdown}>{blogs}</Markdown>

    </>
  )
}

export default page