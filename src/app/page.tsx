'use client';
import { AboutSection } from './section/about-section';
import SkillsSection from './section/skills-section';

export default function Home() {
  return (
    <div className='flex flex-col gap-10 px-8 py-10'>
      <AboutSection />
      <SkillsSection />
    </div>
  );
}
