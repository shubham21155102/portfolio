import fs from 'fs';
const getBlogsMetadata=()=>{
    const folderPath="blogs/";
    const files=fs.readdirSync(folderPath);
    const markdownFiles=files.filter((file)=>file.endsWith(".md"));
    const slugs=markdownFiles.map((file)=>file.replace(".md",""));
    return slugs;
}
export default getBlogsMetadata;