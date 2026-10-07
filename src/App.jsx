import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Browser, FileText, Sparkle, List, X } from '@phosphor-icons/react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
const upwork = 'https://www.upwork.com/freelancers/~010171087b71c00bbb';
const services = [
  { Icon: Browser, title: 'Web applications', text: 'Responsive web apps with modern React interfaces.' },
  { Icon: FileText, title: 'Frappe business tools', text: 'Custom apps and business tools built on Frappe for real workflows.' },
  { Icon: Sparkle, title: 'AI integrations', text: 'Connect AI APIs to useful features in your products.' },
];
function Brand() { return <a className="brand" href="#top" aria-label="Praveen Singh, home"><span className="monogram">P<span>S</span></span><span>Praveen Singh</span></a>; }
function UpworkLink({ children = 'Connect on Upwork', className = 'button primary' }) { return <a className={className} href={upwork} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={19} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>; }
export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="site-shell" id="top">
      <header className="header"><Brand />
        <nav aria-label="Main navigation" className={menuOpen ? 'navigation open' : 'navigation'} id="main-nav">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><UpworkLink>Let's talk</UpworkLink>
        </nav>
        <button className="menu-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <List size={24} />}</button>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy"><p className="eyebrow">Full-stack developer</p><h1 id="hero-title">Useful software.<br />Built with care.</h1><p className="intro">I build web apps and business tools with React, Frappe, and AI integrations.</p><div className="hero-actions"><a className="button primary" href="#work">Explore my work<ArrowRight size={20} aria-hidden="true" /></a><UpworkLink className="button secondary" /></div></div>
          <div className="stack" aria-label="Technologies and capabilities">
            {[['Modern web apps','React',['Components','UI/UX','Scalable apps']],['Business platforms','Frappe',['Custom apps','Business tools','Workflows']],['Intelligent solutions','AI APIs',['LLM integrations','Automation','API connections']]].map(([label,title,items]) => <div className="stack-item" key={title}><p className="stack-label">{label}</p><div className="stack-row"><span className="stack-title">{title}<span className="accent">_</span></span><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></div></div>)}
          </div>
        </section>
        <section className="work-section" id="work" aria-labelledby="work-title"><div className="section-heading"><h2 id="work-title">Development experience</h2><span className="heading-rule" /><span className="section-label">Selected work</span></div><article className="project-card"><div className="project-copy"><p className="eyebrow">Featured project</p><h3>Healthcare application</h3><p className="project-stack">React frontend · Frappe backend</p><p className="project-description">Contributing to a doctor-facing app for patient records and clinical workflows.</p><span className="image-label">Illustrative interface</span></div><picture><source media="(max-width: 700px)" srcSet="/assets/healthcare-mobile.webp" /><img src="/assets/healthcare-preview.webp" alt="Illustrative healthcare dashboard with synthetic sample appointments; not a client screenshot." width="603" height="252" /></picture></article></section>
        <section className="services-section" id="services" aria-labelledby="services-title"><div className="section-heading"><h2 id="services-title">What I can help you build</h2><span className="heading-rule" /><span className="section-label">Services</span></div><div className="services-grid">{services.map(({Icon,title,text}) => <a className="service-card" href="#contact" key={title}><Icon size={32} weight="light" className="service-icon" aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div><ArrowRight className="service-arrow" size={18} aria-hidden="true" /></a>)}</div></section>
        <section className="about-section" id="about" aria-labelledby="about-title"><h2 id="about-title">A little about me</h2><p>I'm Praveen Singh, a developer working with React and Frappe. My experience includes contributing to healthcare software and turning business workflows into usable web applications.</p></section>
        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div><h2 id="contact-title">Have a project in mind?</h2><p>Let's discuss your idea and turn it into useful software.</p></div><UpworkLink /></section>
      </main><footer><Brand /><span>React · Frappe · AI APIs</span></footer>
    </div>
  </>;
}
