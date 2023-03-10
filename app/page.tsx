'use client'

import { useRef, useEffect } from 'react';

// styles
import styles from '../styles/index';

// /section
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import Skills from '../sections/Skills';
import Tryit from '../sections/Tryit';

export default function Home() {
  const lightVersionRef1 = useRef<HTMLDivElement>(null);
  const lightVersionRef2 = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent | TouchEvent) => {
    const clientX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
    if (lightVersionRef1.current) lightVersionRef1.current.style.width = `${clientX / window.innerWidth * 100}%`;
    if (lightVersionRef2.current) lightVersionRef2.current.style.width = `${clientX / window.innerWidth * 100}%`;
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
        window.addEventListener('mousemove', handleMove);
        window.addEventListener('touchmove', handleMove);
        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('touchmove', handleMove);
        }
    }
  }, [lightVersionRef1, lightVersionRef2]);

  return (
    <div className={` ${styles.flexStart} flex-col w-full min-h-[90vh] gap-28 overflow-hidden text-secondary-color dark:text-primary-color-4 p-0`}>
      
      <div className={` relative flex-col h-full gap-28 w-full 2xl:max-w-[1440px] bg-primary-color-4`}>
        <div className='w-full h-full inset-0 overflow-hidden z-0'>
          <Hero mode={'light'}/>
        </div>
        <div ref={lightVersionRef1} className='w-full h-full absolute inset-0 overflow-hidden z-10'>
          <Hero mode={'dark'}/>
        </div>
      </div>

      <Features />
      <Skills />
      <Tryit />
      

    </div>
  )
}