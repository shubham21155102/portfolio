"use client"
import React, { useEffect } from 'react'
type Props = {}
const webSites = [
    {
        title: "E-Commerce Full Stack WebApp Next JS and Spring Boot",
        link: "https://ecommerce.shubhamiitbhu.in/"
    },
    {
        title: "FMC Weekend",
        link: "https://sk.shubhamiitbhu.in/"
    },
    {
        title: "Full Stack Chat App",
        link: "https://chat.shubhamiitbhu.in/"

    },
    {
        title:"Testing Amazon",
        link:"https://www.flipkart.com/"
    }

]
const WorksIndividual = (props: any) => {
    const slug = props.params.slug
    const x = parseInt(slug)
    console.log(slug)
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
                <embed src={webSites[x - 1]?.link} width='100%' height='100%' style={{ backgroundColor: "wheat" }} />
            </div>
        </>
    )
}

export default WorksIndividual