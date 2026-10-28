import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, ArrowUpRight, ChevronUp, Clock3, CircuitBoard, Mail, Menu, Network, PanelsTopLeft, Phone, X } from 'lucide-react';
import { AboutPage, ServicesPage, CareersPage, ContactPage, SparePartsPage, ImprintPage, PrivacyPage } from './SubPages.jsx';
import useScrollReveal, { revealTarget } from './useScrollReveal.js';
import CableMotif from './CableMotif.jsx';
import './styles.css';

const ASSETS = '/assets/';
const services = [
  { icon: Network, name: 'Telekommunikation', href: '/leistungen/', image: 'DSC04803.jpg', description: 'Breites und tiefes Know-how, Zuverlässigkeit und Schnelligkeit machen uns bei großen Providern als auch im B-to-B-Bereich zum gefragten Partner für Komplettlösungen aus einer Hand.' },
  { icon: PanelsTopLeft, name: 'Schaltschrankbau', href: '/leistungen/#plans', image: 'DSC04794.jpg', description: 'Wir entwickeln, fertigen und montieren Ihren maßgeschneiderten Schaltschrank für einen reibungslosen Dauerbetrieb. So individuell wie möglich, so fix wie nötig.' },
  { icon: CircuitBoard, name: 'Automotive', href: '/leistungen/#Automotive', image: 'DSC04800.jpg', description: 'Wir übernehmen komplexe Mess- und Überwachungslösungen für den Sondermaschinenbau – von der Entwicklung bis hin zur Umsetzung.' },
];

function Header({ path }) {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  const headerRef = useRef(null);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    const close = event => {
      if (event.key === 'Escape' && open) { setOpen(false); menuButton.current?.focus(); }
      if (event.type === 'pointerdown' && !headerRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('keydown', close);
    document.addEventListener('pointerdown', close);
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('pointerdown', close); };
  }, [open]);
  return <div className="header-shell">
    <div className="utility-bar"><a href="tel:+4971414884380"><Phone size={13} fill="currentColor" aria-hidden="true" />Immer für Sie da: +49 7141 488 438-0</a></div>
    <header ref={headerRef} className={`site-header${open ? ' menu-open' : ''}`}>
      <div className="navigation">
        <a className="brand" href="/" aria-label="Herterkom – Startseite"><img className="logo-white" src={`${ASSETS}herterkom_logo_final_web_weiss.png`} width="406" height="144" alt="Herterkom"/><img className="logo-blue" src={`${ASSETS}herterkom_logo_final_web.png`} width="406" height="144" alt="" aria-hidden="true"/></a>
        <button ref={menuButton} className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Menü schließen' : 'Menü öffnen'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
        <nav className={`main-navigation${open ? ' is-open' : ''}`} id="main-navigation" aria-label="Hauptnavigation">{[['/','Home'],['/ueberuns/','Über uns'],['/leistungen/','Leistungen'],['/karriere/','Karriere'],['/kontakt/','Kontakt']].map(([href,label])=><a key={href} href={href} className={href === '/kontakt/' ? 'nav-contact' : undefined} aria-current={path===href?'page':undefined} onClick={()=>setOpen(false)}>{label}</a>)}</nav>
      </div>
    </header>
  </div>;
}

function HomePage() {
  return <main id="main-content" className="home-page">
    <section className="hero container" aria-labelledby="hero-heading">
      <div className="hero-copy"><p className="eyebrow" data-reveal="">Ihr perfekter Servicepartner</p><h1 id="hero-heading" data-reveal="80">Unsere Stärke:<br/><span>zeitkritische<br/>Fehlerbeseitigungen.</span></h1><p className="hero-description" data-reveal="160">an sensiblen Übertragungsnetzen<br/>im <strong>24/7 Modus.</strong></p><div className="hero-actions" data-reveal="240"><a href="/leistungen/" className="button button-primary">Unsere Leistungen <ArrowUpRight size={18}/></a><a className="text-link" href="/ueberuns/">Über uns <ArrowRight size={18}/></a></div></div>
      <figure className="hero-visual cable-entrance" data-reveal="" data-reveal-motion="from-left"><CableMotif/><figcaption className="hero-visual-footer"><div className="service-badge"><span className="badge-icon" aria-hidden="true"><Clock3 size={24} strokeWidth={1.5}/></span><div className="service-badge-copy"><strong>24/7</strong><span>Immer für Sie da.</span></div></div><span className="hero-image-caption">Optische Übertragungsnetze</span></figcaption></figure>
    </section>
    <div className="expertise-strip container" aria-label="Unsere drei Kernbereiche">{services.map((service,index)=><a href={service.href} key={service.name} data-reveal={index * 80}><service.icon size={25} strokeWidth={1.5}/><span>{service.name}</span><ArrowUpRight size={18}/></a>)}</div>
    <section className="intro-section container" aria-labelledby="intro-heading"><div className="intro-heading" data-reveal=""><p className="eyebrow">Herterkom GmbH</p><h2 id="intro-heading">Ihr perfekter<br/>Servicepartner.</h2><p className="intro-subtitle">rund um optische Übertragungsnetze,<br/>im Schaltschrankbau und Automotive</p></div><div className="intro-copy" data-reveal="80"><p>Seit unserer Gründung im Jahr 1997 ist die Herterkom GmbH der zuverlässige Servicepartner bei komplexen Aufgabenstellungen im Bereich optische Übertragungsnetze. Weltweit analysieren und lösen wir im 24/7-Modus zeitkritische Probleme an sensiblen Netzinfrastrukturen. Darüber hinaus liefern wir individuelle, kundenspezifische Schaltschranklösungen und entwickeln Soft- und Hardwarelösungen im Automotivebereich.</p><a className="text-link" href="/ueberuns/">Mehr über uns erfahren <ArrowUpRight size={18}/></a></div></section>
    <section className="services-section" id="plans" aria-labelledby="services-heading"><div className="container"><div className="section-heading" data-reveal=""><h2 id="services-heading">Breites und tiefes Know-how<br/>plus Schnelligkeit machen uns</h2><p>zum zuverlässigen Problemlöser mit hoher Servicequalität in unseren drei Kernbereichen</p></div><div className="service-grid">{services.map((service,index)=><article className="service-card" key={service.name} data-reveal={index * 80}><a href={service.href} className="service-card-image" aria-label={`${service.name} – mehr erfahren`}><img src={`${ASSETS}${service.image}`} alt={service.name} width="1234" height="823" loading="lazy"/></a><div className="service-card-inner"><h3><service.icon size={23} strokeWidth={1.5}/><a href={service.href}>{service.name}</a></h3><p>{service.description}</p><a className="card-link" href={service.href}>Mehr erfahren <ArrowUpRight size={18}/></a></div></article>)}</div><div className="principle-row" data-reveal=""><h3>Das Herterkom Prinzip:<br/>Bereichsübergreifendes Know-How</h3><img src={`${ASSETS}Herterkom_Prinzip-01-800x200.png`} alt="Netzelemente + Netzwerkmanagement = schnellere Problemlösung" width="800" height="200" loading="lazy"/></div></div></section>
    <section className="all-in-one"><div className="container all-in-one-inner"><div className="all-in-one-image cable-entrance" data-reveal="" data-reveal-motion="from-right"><CableMotif variant="connector"/></div><div className="all-in-one-copy"><h2 data-reveal="80">Alles unter einem Dach –<br/> ein Ansprechpartner</h2><div className="process-grid">{[['Entwicklung','Entwicklung.png'],['Dokumentation','Dokumentation-01.png'],['Fertigung','Fertigung-01.png']].map(([label,image],index)=><div key={label} data-reveal={index * 80}><img src={`${ASSETS}${image}`} alt="" width="626" height="626" loading="lazy"/><h3>{label}</h3></div>)}</div></div></div></section>
    <ContactBanner/>
  </main>;
}

function ContactBanner() {
  return <section className="contact-banner"><div className="container contact-banner-inner"><h2 data-reveal="">Sie wollen mit uns ins Gespräch kommen oder interessieren sich für ein Angebot?</h2><a href="/kontakt/" className="button button-white" data-reveal="80">Kontakt</a></div></section>;
}

function Footer() {
  const [backTopVisible, setBackTopVisible] = useState(() => window.scrollY > 400);
  useEffect(() => {
    const update = () => setBackTopVisible(window.scrollY > 400);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <><footer className="site-footer"><div className="container footer-grid">
    <div className="footer-about" data-reveal=""><h2>Über uns</h2><p>Ihr perfekter Servicepartner rund um optische Übertragungsnetze, im Schaltschrankbau und Automotive.</p></div>
    <div data-reveal="60"><h2>Sitemap</h2><ul>{[['/','Home'],['/ueberuns/','Über uns'],['/karriere/','Karriere'],['/kontakt/','Kontakt'],['/impressum/','Impressum'],['/datenschutzerklaerung/','Datenschutzerklärung']].map(([href,label])=><li key={href}><a href={href}>{label}</a></li>)}</ul></div>
    <div data-reveal="120"><h2>Leistungen</h2><ul><li><a href="/leistungen/">Telekommunikation</a><ul><li><a href="/ersatzteillager/">Ersatzteile</a></li></ul></li><li><a href="/leistungen/#plans">Schaltschranbau</a></li><li><a href="/leistungen/#Automotive">Automotive</a></li></ul></div>
    <div className="footer-contact" data-reveal="180"><h2>Kontakt</h2><p className="footer-contact-links"><a href="tel:+4971414884380"><Phone size={18} strokeWidth={1.75} aria-hidden="true"/><span>+49 7141 488 438-0</span></a><a href="mailto:info@herterkom.de"><Mail size={18} strokeWidth={1.75} aria-hidden="true"/><span>E-Mail</span></a></p><p>Herterkom GmbH<br/>Zeppelinstraße 5/1<br/>71679 Asperg</p></div>
  </div></footer><div className="copyright">© Copyright 2025 Herterkom GmbH</div>{backTopVisible && <a href="#top" className="back-top" aria-label="Nach oben"><ChevronUp size={18}/></a>}</>;
}
const routes = { '/': [HomePage, 'Ihr perfekter Servicepartner'], '/ueberuns/': [AboutPage, 'Über uns'], '/leistungen/': [ServicesPage, 'Leistungen'], '/karriere/': [CareersPage, 'Karriere'], '/kontakt/': [ContactPage, 'Kontakt'], '/ersatzteillager/': [SparePartsPage, 'Ersatzteile'], '/impressum/': [ImprintPage, 'Impressum'], '/datenschutzerklaerung/': [PrivacyPage, 'Datenschutzerklärung'] };

function App() {
  const [location, setLocation] = useState(() => ({ pathname: window.location.pathname, hash: window.location.hash }));
  const normalizedPath = location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`;
  const route = routes[normalizedPath];
  useScrollReveal(normalizedPath);
  useEffect(() => {
    const update = () => setLocation({ pathname: window.location.pathname, hash: window.location.hash });
    const click = event => {
      const link = event.target.closest('a');
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target || link.hasAttribute('download')) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      event.preventDefault();
      window.history.pushState({ navigated: true }, '', url.pathname + url.search + url.hash);
      update();
    };
    document.addEventListener('click', click);
    window.addEventListener('popstate', update);
    return () => { document.removeEventListener('click', click); window.removeEventListener('popstate', update); };
  }, []);
  useEffect(() => {
    document.title = `${route?.[1] || 'Seite nicht gefunden'} | Herterkom`;
    if (location.hash) {
      requestAnimationFrame(() => {
        let id;
        try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
        const target = document.getElementById(id);
        if (!target) return;
        const section = target.classList.contains('anchor-alias') ? target.closest('section') : target;
        revealTarget(section, true);
        const focusTarget = target.getAttribute('aria-hidden') === 'true' ? section.querySelector('h2, h3') || section : target;
        if (!focusTarget.hasAttribute('tabindex')) focusTarget.setAttribute('tabindex', '-1');
        focusTarget.focus({ preventScroll: true });
        target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
      if (window.history.state?.navigated) {
        const heading = document.querySelector('main h1');
        if (heading) revealTarget(heading);
        heading?.setAttribute('tabindex', '-1');
        heading?.focus({ preventScroll: true });
      }
    }
  }, [location, route]);
  const Page = route?.[0];
  return <><a href="#main-content" className="skip-link">Zum Inhalt springen</a><div id="top"/><Header path={normalizedPath}/>{Page ? <Page/> : <main id="main-content" className="container not-found"><div className="eyebrow">404</div><h1>Seite nicht gefunden.</h1><a className="button button-primary" href="/">Zur Startseite <ArrowRight size={18}/></a></main>}<Footer/></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
