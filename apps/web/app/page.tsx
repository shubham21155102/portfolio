import Header from "./Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Projects from "./components/Projects";
import EducationSection from "./components/EducationSection";
import ContactCTA from "./components/ContactCTA";
import FloatingChat from "./components/FloatingChat";

export default function Page(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <ExperienceTimeline />
        <Projects />
        <EducationSection />
        <ContactCTA />
      </main>
      <FloatingChat />
    </>
  );
}
