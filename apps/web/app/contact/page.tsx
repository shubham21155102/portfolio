import React from 'react'
import Image from 'next/image'
import Classes from "./page.module.css"
type Props = {}
export const metadata = {
  title: 'Contact'
}

const Contact = (props: Props) => {
  return (
    <>
      <div className={Classes.container}>
         <article className={Classes.card__article}>
            <div className={Classes.card__profile}>
            <Image
            src={'/shubham.jpg'}
            alt="Picture of the author"
            width={200}
            height={200}
            className="rounded-full"
          />
            </div>
            
            <div className={Classes.card__tooltip}>
               <div className={Classes.card__content}>
                  <header className={Classes.card__header}>
                      {/* <span>Social</span> */}
                     
                     <div className={Classes.card__social}> 
                        <a href="https://www.linkedin.com/in/shubham-kumar-9a6a13232/" target="_blank">
            <Image
            style={{backgroundColor: 'skyblue'}}
            src={'/linkedin.svg'}
            alt="Picture of the author"
            width={50}
            height={50}
            className="rounded-full"
          />
                        </a>
   
                        <a href="https://github.com/shubham21155102" target="_blank">
                        <Image
            style={{backgroundColor: 'white'}}
            src={'/github.svg'}
            alt="Picture of the author"
            width={50}
            height={50}
            className="rounded-full"
          />
                        </a>
   
                        <a href="https://www.instagram.com/shubh_am.patel/" target="_blank">
                        <Image
            style={{backgroundColor: 'lightpink'}}
            src={'/instagram.svg'}
            alt="Picture of the author"
            width={50}
            height={50}
            className="rounded-full"
          />
                        </a>
                     </div>
                  </header>
   
                  <div className={Classes.card__data}>
                     <div className={Classes.card__image}>
                        <div className={Classes.card__mask}>
                        <Image
            src={'/shubham.jpg'}
            alt="Picture of the author"
            width={200}
            height={200}
            className="rounded-full"
          />
                        </div>
                        
                        <span className={Classes.card__status}></span>
                     </div>
   
                     <h2 className={Classes.card__name}>Shubham Patel</h2>
                     <h3 className={Classes.card__profession}>Full Stack Developer</h3>
   
                     <a href="#" className={Classes.card__button}>
                        <i className={Classes.ri_chat_3_line}></i> <span>Send Message</span>
                     </a>
                  </div>
               </div>
            </div>
         </article>
      </div>
       </>

  )
}

export default Contact