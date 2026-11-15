import { useEffect, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Mountain } from 'lucide-react';
import ForestForeground from '../components/ForestForeground';
import { profile } from '../data/profile';
import './Home.css';

export default function Home() {
  const [ready, setReady] = useState(false);
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 900], [0, 180]);

  useEffect(() => {
    if (!ready) return;
    const timeout = window.setTimeout(() => {
      const about = document.getElementById('about');
      about?.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' });
      const heading = about?.querySelector('.about-section-title');
      heading?.setAttribute('tabindex', '-1');
      heading?.focus({ preventScroll: true });
    }, reduced ? 0 : 2800);
    return () => window.clearTimeout(timeout);
  }, [ready, reduced]);

  return <section id="home" className={`hero cinematic-opening ${ready ? 'scene-ready' : ''}`}>
    <motion.div className="hero-landscape" style={{ y: reduced ? 0 : y }} />
    <div className="hero-shade" />
    <div className="hero-grain" />
    <ForestForeground />
    <div className="hero-content">
      <motion.div initial={false} animate={ready ? { opacity: 0, scale: 1.15, y: -20 } : { opacity: 1, scale: 1, y: 0 }} transition={{ duration: reduced ? 0 : .8, ease: [.16, 1, .3, 1] }}>
        <p className="summit-eyebrow"><span/> PERSONAL PORTFOLIO / ADITHYA</p>
        <h1>Welcome to<br/><span>my portfolio.</span></h1>
        <p className="hero-description">Information Systems Student <span> / </span> Web Developer<br className="mobile-break"/><span> / </span> Technology Enthusiast</p>
        <div className="hero-actions"><button type="button" className="button hero-button" disabled={ready} onClick={() => setReady(true)}>Explore My Profile <ArrowUpRight size={18}/></button><a className="hero-work-link" href="#portfolio" tabIndex={ready ? -1 : 0}>View my work <ArrowUpRight size={16}/></a></div>
        <div className="hero-signature"><span className="hero-signature-rule"/><span>{profile.name}<small>Information Systems · Telkom University Surabaya</small></span></div>
      </motion.div>
    </div>
    <div className="hero-bottom"><span><Mountain size={17}/> BUILT WITH CURIOSITY</span><a href="#about">SCROLL TO DISCOVER <ArrowDown size={15}/></a><span>IDEAS HAVE NO ALTITUDE LIMIT.</span></div>
    <div className="hero-photo-credit">Gunung Raung · <a href="https://commons.wikimedia.org/wiki/File:Raung_-_view_from_Kawah_Ijen,_East_Java,_Indonesia,_20220821_0643_9778.jpg" target="_blank" rel="noreferrer">Jakub Hałun</a> / <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0</a></div>
  </section>;
}
