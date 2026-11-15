import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
export default function App(){const [active,setActive]=useState('home'),[tab,setTab]=useState('Projects');useEffect(()=>{const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)setActive(entry.target.id);});},{rootMargin:'-25% 0px -55% 0px',threshold:0});document.querySelectorAll('main > section').forEach(section=>observer.observe(section));return()=>observer.disconnect();},[]);function openCollection(name){setTab(name);document.getElementById('portfolio').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}return <MotionConfig reducedMotion="user"><a href="#main" className="skip-link">Skip to content</a><Navbar active={active}/><main id="main"><Home/><About openCollection={openCollection}/><Portfolio tab={tab} setTab={setTab}/><Contact/></main></MotionConfig>;}
