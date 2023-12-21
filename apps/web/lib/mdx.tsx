import fs from 'fs';
import matter from 'gray-matter'
const getBlogsMetadata=()=>{
    const folderPath="blogs/";
    const files=fs.readdirSync(folderPath);
    const markdownFiles=files.filter((file)=>file.endsWith(".md"));
    // const slugs=markdownFiles.map((file)=>file.replace(".md",""));
    // return slugs;
    const blogs=markdownFiles.map((fileName)=>{
        const filePath=`${folderPath}${fileName}.md`;
        const fileContents=fs.readFileSync(filePath,'utf8');
        const matterResult=matter(fileContents);
        return {
            title:matterResult.data.title,
            date:matterResult.data.date,
            tags:matterResult.data.tags,
            summary:matterResult.data.summary,
            slug:fileName.replace(".md","")
        }
    });
}
export default getBlogsMetadata;