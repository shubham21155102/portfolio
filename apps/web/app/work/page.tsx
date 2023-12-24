import React from 'react';
import dynamic from 'next/dynamic';
import Header from '../Header';
import Link from 'next/link';

const Projects = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className='my-32 mx-10 text-white'>
        <ul style={{ listStyle: 'none', padding: '0px', margin: '20px 0px' }}>
          <li style={{ marginBottom: '20px' }}>
            <div style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}>
              <Link href='/work/1' className='bg-gray'>
               E-Commerce Full Stack WebApp Next JS and Spring Boot
              </Link>
            </div>
          </li>
          <li style={{ marginBottom: '20px' }}>
            <div style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}>
              <Link href='/work/2' className='bg-gray'>
               FMC Weekend IIT BHU
              </Link>
            </div>
          </li>
          <li style={{ marginBottom: '20px' }}>
            <div style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}>
              <Link href='/work/3' className='bg-gray'>
               Full Stack Chat App
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

const ProjectCSR = dynamic(() => Promise.resolve(Projects), { ssr: false });

export default Projects;
