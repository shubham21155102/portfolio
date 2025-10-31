import React from "react";
import Image from "next/image";
import Classes from "./page.module.css";

export const metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <div className={Classes.container}>
      <div className={Classes.backgroundGradient}></div>
      
      <div className={Classes.contactWrapper}>
        {/* Main Card */}
        <div className={Classes.contactCard}>
          {/* Profile Section */}
          <div className={Classes.profileSection}>
            <div className={Classes.profileImageWrapper}>
              <div className={Classes.profileGlow}></div>
              <Image
                src={"/shubham.jpg"}
                alt="Shubham Patel"
                width={200}
                height={200}
                className={Classes.profileImage}
              />
              <span className={Classes.statusIndicator}></span>
            </div>
            
            <div className={Classes.profileInfo}>
              <h1 className={Classes.profileName}>Shubham Patel</h1>
              <p className={Classes.profileTitle}>Full Stack Developer</p>
              <p className={Classes.profileTagline}>
                Building digital experiences with passion & precision
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className={Classes.divider}></div>

          {/* Social Links */}
          <div className={Classes.socialSection}>
            <h3 className={Classes.sectionTitle}>Connect With Me</h3>
            <div className={Classes.socialGrid}>
              <a
                href="https://www.linkedin.com/in/shubham-kumar-9a6a13232/"
                target="_blank"
                rel="noopener noreferrer"
                className={Classes.socialCard}
              >
                <div className={Classes.socialIconWrapper}>
                  <Image
                    src={"/linkedin.svg"}
                    alt="LinkedIn"
                    width={32}
                    height={32}
                    className={Classes.socialIcon}
                  />
                </div>
                <div className={Classes.socialInfo}>
                  <h4>LinkedIn</h4>
                  <p>Professional Network</p>
                </div>
              </a>

              <a
                href="https://github.com/shubham21155102"
                target="_blank"
                rel="noopener noreferrer"
                className={Classes.socialCard}
              >
                <div className={Classes.socialIconWrapper}>
                  <Image
                    src={"/github.svg"}
                    alt="GitHub"
                    width={32}
                    height={32}
                    className={Classes.socialIcon}
                  />
                </div>
                <div className={Classes.socialInfo}>
                  <h4>GitHub</h4>
                  <p>Code Repository</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/shubh_am.patel/"
                target="_blank"
                rel="noopener noreferrer"
                className={Classes.socialCard}
              >
                <div className={Classes.socialIconWrapper}>
                  <Image
                    src={"/instagram.svg"}
                    alt="Instagram"
                    width={32}
                    height={32}
                    className={Classes.socialIcon}
                  />
                </div>
                <div className={Classes.socialInfo}>
                  <h4>Instagram</h4>
                  <p>Visual Stories</p>
                </div>
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className={Classes.ctaSection}>
            <button className={Classes.ctaButton}>
              <svg 
                className={Classes.ctaIcon}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                />
              </svg>
              <span>Send a Message</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
