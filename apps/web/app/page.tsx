"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import Link from "next/link";

interface Internship {
  id: number;
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string;
  skills: string[];
  image: string;
}

interface Experience {
  id: number;
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string;
  skills: string[];
  image: string;
}

export default function Page(): JSX.Element {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    const internshipData = [
      {
        id: 1,
        company: "DivineTalk",
        position: "Software Development Intern",
        description: "Worked on a team to develop a web application using React and Node.js",
        startDate: "2020-05-01",
        endDate: "2020-08-31",
        skills: ["React", "Node.js", "JavaScript"],
        image: "https://media.licdn.com/dms/image/v2/D4D0BAQEMi_iL1AX2OA/company-logo_100_100/company-logo_100_100/0/1705392209325/divinetalk_logo?e=1746662400&v=beta&t=9wEKzpYoks5yFn6Xz3KRtSxqTfwHndTU0dDB0iop9YQ",
      },
      {
        id: 2,
        company: "Company B",
        position: "Data Science Intern",
        description: "Worked on a team to develop a machine learning model using Python and TensorFlow",
        startDate: "2021-06-01",
        endDate: "2021-09-30",
        skills: ["Python", "TensorFlow", "Machine Learning"],
        image: "https://picsum.photos/id/201/200/200",
      },
      {
        id: 3,
        company: "Company C",
        position: "Cybersecurity Intern",
        description: "Worked on a team to develop a security system using C++ and Linux",
        startDate: "2022-01-01",
        endDate: "2022-04-30",
        skills: ["C++", "Linux", "Cybersecurity"],
        image: "https://picsum.photos/id/301/200/200",
      },
    ];

    const experienceData = [
      {
        id: 1,
        company: "DivineTalk Astrology",
        position: "Software Engineer",
        description: "Worked on various projects and contributed to software development.",
        startDate: "Dec 2024",
        endDate: "Present",
        skills: ["Amazon Web Services (AWS)", "Express.js", "Kibana", "Elasticsearch", "MySQL", "Elastic Stack (ELK)"],
        image: "https://media.licdn.com/dms/image/v2/D4D0BAQEMi_iL1AX2OA/company-logo_100_100/company-logo_100_100/0/1705392209325/divinetalk_logo?e=1746662400&v=beta&t=9wEKzpYoks5yFn6Xz3KRtSxqTfwHndTU0dDB0iop9YQ",
      },
      {
        id: 2,
        company: "FMC Weekend",
        position: "Senior Advisor",
        description: "Oversaw technical operations and led event participation.",
        startDate: "Jan 2024",
        endDate: "Oct 2024",
        skills: ["Leadership", "Event Management"],
        image: "https://media.licdn.com/dms/image/v2/D560BAQH86tUgFign6Q/img-crop_100/img-crop_100/0/1723556307899?e=1746662400&v=beta&t=utKewCX3wl_PKxOslwBAiBDXuKW3cVuwFhzh96QDQYg",
      },
      {
        id: 3,
        company: "FMC Weekend",
        position: "Tech Head",
        description: "Led technical operations, increasing event participation by 30%.",
        startDate: "May 2023",
        endDate: "Dec 2023",
        skills: ["Leadership", "Technical Operations"],
        image: "https://media.licdn.com/dms/image/v2/D560BAQH86tUgFign6Q/img-crop_100/img-crop_100/0/1723556307899?e=1746662400&v=beta&t=utKewCX3wl_PKxOslwBAiBDXuKW3cVuwFhzh96QDQYg",
      },
      {
        id: 4,
        company: "FMC Weekend",
        position: "Technical Executive",
        description: "Contributed to various technical projects.",
        startDate: "Nov 2022",
        endDate: "Jun 2023",
        skills: ["Node.js", "Front-End Development", "Back-End Development"],
        image: "https://media.licdn.com/dms/image/v2/D560BAQH86tUgFign6Q/img-crop_100/img-crop_100/0/1723556307899?e=1746662400&v=beta&t=utKewCX3wl_PKxOslwBAiBDXuKW3cVuwFhzh96QDQYg",
      },
      {
        id: 5,
        company: "Jindal Steel & Power Ltd.",
        position: "Technology Integration Intern",
        description: "Worked on multiple projects including volume calculations and automation.",
        startDate: "May 2024",
        endDate: "Jul 2024",
        skills: ["Python", "JavaScript", "Data Visualization", "3D Modeling"],
        image: "https://media.licdn.com/dms/image/v2/C4E0BAQEq60t16uDOWw/company-logo_100_100/company-logo_100_100/0/1630628425888/jindal_steel__power_ltd__logo?e=1746662400&v=beta&t=M55XVbTsiC_Wn85PjHABEROsP8aXxCJU3sYhYclEcFk",
      },
      {
        id: 6,
        company: "Rejoy Health",
        position: "Back End Developer Intern",
        description: "Contributed to backend development.",
        startDate: "May 2024",
        endDate: "May 2024",
        skills: ["AWS Fargate", "Amazon SQS", "Celery"],
        image: "https://media.licdn.com/dms/image/v2/C560BAQHlwA6rRf8OrA/company-logo_100_100/company-logo_100_100/0/1660842587536/rejoyhealthusa_logo?e=1746662400&v=beta&t=WyASMsiRUwrhf8JysgZhG-uHJKP6MY1kOTOFieOX5EQ",
      },
      {
        id: 7,
        company: "One Inc Cooperative",
        position: "Software Engineer Intern",
        description: "Worked on software engineering projects.",
        startDate: "Apr 2024",
        endDate: "May 2024",
        skills: ["AWS Fargate", "Amazon SQS", "Celery"],
        image: "https://media.licdn.com/dms/image/v2/C4E0BAQEOxz-UbEqY0g/company-logo_100_100/company-logo_100_100/0/1630638304030/citizensofone_logo?e=1746662400&v=beta&t=xkSA47SsSC-D5aOUnostW7TfHU0uu1Waic7wfU2hEBQ",
      },
      {
        id: 8,
        company: "JS Tigers",
        position: "Software Developer Intern",
        description: "Worked on various software development projects.",
        startDate: "Apr 2024",
        endDate: "May 2024",
        skills: ["APIless Full Stack Website", "tRPC", "Material-UI", "Tailwind CSS", "React Native"],
        image: "https://media.licdn.com/dms/image/v2/D560BAQFWw6cuyDYnbw/company-logo_100_100/company-logo_100_100/0/1711082676203/jstigers_logo?e=1746662400&v=beta&t=7766R82PmUJ5zVSNN-L2IcPGI-hbcJ6oppIJ8uNN10U",
      },
      {
        id: 9,
        company: "Acencore",
        position: "Full Stack Developer Intern",
        description: "Led CI/CD implementation and backend development.",
        startDate: "Mar 2024",
        endDate: "Apr 2024",
        skills: ["Docker", "GitHub Actions", "NestJS", "FastAPI"],
        image: "https://media.licdn.com/dms/image/v2/D4D0BAQE1ShqDr0dkLg/company-logo_100_100/company-logo_100_100/0/1710004323468/acencoreai_logo?e=1746662400&v=beta&t=Iv8xlNLpZFf_g2Y4kn9NiEZ2tRSsGHTMZcuj7Lv9WCQ",
      },
      {
        id: 10,
        company: "Ostello AI",
        position: "DevOps and Backend Engineer",
        description: "Contributed to backend development and DevOps initiatives.",
        startDate: "Jan 2024",
        endDate: "Feb 2024",
        skills: ["NestJS", "PostgreSQL", "Redis", "Elastic Beanstalk"],
        image: "https://media.licdn.com/dms/image/v2/C4D0BAQEUOe5VKZ0Hhw/company-logo_100_100/company-logo_100_100/0/1659072964018/ostello_india_logo?e=1746662400&v=beta&t=-Asu_6cT8o6vbZy8gNvPAREv5ZeGJGCowuLRB-GqpYo",
      },
      {
        id: 11,
        company: "Techies Gateway",
        position: "Frontend Developer Intern",
        description: "Worked on frontend development projects.",
        startDate: "Dec 2023",
        endDate: "Dec 2023",
        skills: ["Front-End Development"],
        image: "https://media.licdn.com/dms/image/v2/D560BAQGewu5KVZWVPg/company-logo_100_100/company-logo_100_100/0/1711037280811/techies_gateway_logo?e=1746662400&v=beta&t=XC7b2jzIbpW8CKcvkacAW1MoJOhqsnH4lKLp7as-w3s",
      },
      {
        id: 12,
        company: "TryAndes",
        position: "Software Engineer Intern",
        description: "Contributed to frontend and backend development.",
        startDate: "Jul 2023",
        endDate: "Oct 2023",
        skills: ["Next.js", "Flask", "Typescript", "MySQL"],
        image: "https://picsum.photos/id/1125/200/200",
      },
      {
        id: 13,
        company: "Club of Programmers, IIT BHU",
        position: "Software Development Group Member",
        description: "Worked on various software development projects.",
        startDate: "Dec 2022",
        endDate: "Jul 2023",
        skills: ["Node.js", "Front-End Development", "Back-End Development"],
        image: "https://media.licdn.com/dms/image/v2/C4E0BAQFWyeIkMecCww/company-logo_100_100/company-logo_100_100/0/1630654066846/cops_iitbhu_logo?e=1746662400&v=beta&t=-ku2G86sz3Ebj7n7iK-N6eKWPLHtFr9e9QW7PAK-6f0",
      },
      {
        id: 14,
        company: "Science and Technology Council, IIT BHU",
        position: "Technical Executive",
        description: "Contributed to various technical projects.",
        startDate: "Nov 2022",
        endDate: "Mar 2023",
        skills: ["Node.js", "Front-End Development", "Back-End Development"],
        image: "https://media.licdn.com/dms/image/v2/D560BAQH_WyK-qBHGFA/company-logo_100_100/company-logo_100_100/0/1711644358016?e=1746662400&v=beta&t=Q2u-UmBWdF_BV4MtpKG1qd26XZtK-6YWzmPCaCq9NAA",
      },
      {
        id: 15,
        company: "Filo",
        position: "Doubt Expert",
        description: "Provided assistance and support.",
        startDate: "Feb 2022",
        endDate: "May 2022",
        skills: ["Communication", "Problem Solving"],
        image: "https://media.licdn.com/dms/image/v2/C4D0BAQFw5QXPmupPsQ/company-logo_100_100/company-logo_100_100/0/1667979005637/filoedtech_logo?e=1746662400&v=beta&t=SoYO0Dn0Uzih5CVHL5mMjue09UN2rsXDENIGnDCelCM",
      },
    ];

    setInternships(internshipData);
    setExperiences(experienceData);
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-row justify-center items-center my-20 sm:my-60">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/shubham.jpg"}
            alt="Picture of the author"
            width={200}
            height={200}
            className="rounded-full"
          />
          <div className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Shubham Patel
          </div>
          <div className="text-lg sm:text-2xl font-bold tracking-tight text-white">
            Upcoming Associate Software Engineer @<Link href="https://www.linkedin.com/company/quantumstreetai" className="text-blue-500 hover:underline"> Quantum Stream AI</Link>
          </div>
        </div>
      </div>

      {/* Internship Section */}
      {/* <h2 className="text-4xl font-bold text-center text-white mb-12">Internships</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-full">
        {internships.map((internship) => (
          <motion.div
            key={internship.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20 w-full min-h-[300px] flex flex-col"
          >
            <div className="flex items-center space-x-4 mb-4">
              {internship.image && (
                <motion.div whileHover={{ rotate: 15 }}>
                  <Image
                    src={internship.image}
                    alt={internship.company}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-white bg-white/10 p-1"
                  />
                </motion.div>
              )}
              <div className="w-full">
                <h3 className="text-xl font-bold text-white">{internship.company}</h3>
                <p className="text-blue-200 font-medium">{internship.position}</p>
              </div>
            </div>
            <p className="text-gray-200 text-sm flex-grow">{internship.description}</p>
            <div className="flex justify-between text-sm text-blue-100 mt-4">
              <span>{internship.startDate}</span>
              <span>{internship.endDate}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {internship.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: skillIndex * 0.1 }}
                  className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div> */}

      {/* Experience Section */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-8 mt-10">Experiences</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-full">
        {experiences.map((experience) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-4 sm:p-6 shadow-xl border border-white/20 w-full min-h-[300px] flex flex-col"
          >
            <div className="flex items-center space-x-3 mb-4">
              {experience.image && (
                <motion.div whileHover={{ rotate: 15 }}>
                  <Image
                    src={experience.image}
                    alt={experience.company}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-white bg-white/10 p-1"
                  />
                </motion.div>
              )}
              <div className="w-full">
                <h3 className="text-lg sm:text-xl font-bold text-white">{experience.company}</h3>
                <p className="text-blue-200 font-medium">{experience.position}</p>
              </div>
            </div>
            <p className="text-gray-200 text-sm flex-grow">{experience.description}</p>
            <div className="flex justify-between text-sm text-blue-100 mt-4">
              <span>{experience.startDate}</span>
              <span>{experience.endDate}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {experience.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: skillIndex * 0.1 }}
                  className="px-2 py-1 bg-blue-500/20 text-blue-200 rounded-full text-xs"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
