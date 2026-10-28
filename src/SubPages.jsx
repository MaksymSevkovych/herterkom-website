import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import PageHeader from './PageHeader.jsx';

const upload = '/assets/';

export { ServicesPage } from './ServicesPage.jsx';
export { ImprintPage, PrivacyPage } from './LegalPages.jsx';

function ContactCallout() {
  return <section className="contact-banner about-contact-banner"><div className="container contact-banner-inner">
    <div><h2 data-reveal="">Sie wollen mit uns ins Gespräch kommen oder interessieren sich für ein Angebot?</h2></div>
    <a href="/kontakt/" className="button button-white" data-reveal="80">Kontakt</a>
  </div></section>;
}

const values = [
  {
    title: 'Maximale Qualität', image: 'Qualitaet.png',
    text: 'Wir wollen jede Aufgabe bestmöglich erledigen. Dazu übernehmen wir Eigenverantwortung, entwickeln Lösungen, die über die Erwartungen unserer Kunden hinausgehen und streben permanent nach Verbesserungen, die auch unser breit angelegtes Know-how stetig erweitert.',
  },
  {
    title: 'Partnerschaft', image: 'Partnerschaft.png',
    text: 'Wir setzen auf langfristige Partnerschaften mit unseren Kunden, Lieferanten und Arbeitnehmern. So lassen sich Qualitäten langfristig halten und ausbauen und letztendlich für alle Seiten gewinnbringende Vorteile erzielen.',
  },
  {
    title: 'Vertrauen', image: 'Vertrauen.png',
    text: 'Kundenvertrauen ist die beste Voraussetzung, um Qualität, Lösungen, Dienstleistungen, Schnelligkeit und Verantwortlichkeit zu stärken. Die langfristige Vertrauensbasis unserer Kunden und innerhalb unseres Teams spüren wir in unserer täglichen Zusammenarbeit und im freundlichen Umgang mit Partnern und Kunden.',
  },
  {
    title: 'Verantwortung', image: 'Verantwortung.png',
    text: 'Wir handeln fair, respektvoll und in persönlicher Verantwortung. Damit pflegen wir die Treue und das tiefe Vertrauen unserer Kunden.',
  },
];

export function AboutPage() {
  return <main id="main-content">
    <PageHeader title="Über uns" />
    <section className="page-section container">
      <div className="content-grid about-history">
        <img data-reveal="" className="content-image" src={upload + 'Ueberuns.jpg'} alt="Herterkom – Über uns" width="678" height="452" loading="lazy" />
        <div className="prose" data-reveal="80">
          <h2>Von der Studentenbetreuung zum Komponenten übergreifenden Problemlöser.</h2>
          <p>Prof. Eberhard Herter hatte 1997 die Idee, Studenten an die Installation von Großknoten im optischen Übertragungsnetzwerk heranzuführen. Schnell wurden aus den jungen Studenten Netzwerkspezialisten, deren Know-how bei vielen Providern gefragt war. Die Herterkom GmbH war geboren und entwickelte sich zum Spezialisten für optische Übertragungsnetze.</p>
          <p>Im Jahr 2006 übernahm Dr. Ulrich Konzelmann das Unternehmen und baute es weiter aus. Er etablierte den Automotive-Bereich als zweite Säule des Unternehmens. Mit Entwicklungs-leistungen arbeiten wir hierbei mit den großen Automobil Herstellern, deren Zulieferern und Maschinenbauunternehmen. Spezialität: komplexe Systeme für Mess-, Prüf- und Überwachungslösungen im Sondermaschinenbau.</p>
          <p>Seit 2015 ist Andre Schulz Geschäftsführer und Gesellschafter der Herterkom GmbH. Er baut seither die Kerngeschäftsbereiche Telekommunikation und Automotive weiter aus. 2020 wurde das Herterkom-Portfolio mit Komplettlösungen im Schaltschrankbau erweitert.</p>
        </div>
      </div>
    </section>
    <ContactCallout />
    <section className="page-section values-section"><div className="container values-grid">
      {values.map(({ title, text, image }, index) => <article key={title} className="value-card" data-reveal={index * 80}><img src={upload + image} alt="" width="1744" height="1724" loading="lazy" /><h3>{title}</h3><p>{text}</p></article>)}
    </div></section>
  </main>;
}

const benefits = [
  'eine sehr lockere und freundliche Arbeitsatmosphäre, in der Wertschätzung zählt',
  'Ständiges Lernen und Weiterentwicklungsmöglichkeiten',
  'Abwechslungsreiche und spannende Aufgaben',
  'eigenverantwortliches und selbständiges Arbeiten',
  'Kurze Entscheidungswege, schnelle Umsetzung',
  'ein unbefristeter Arbeitsvertrag mit dem Ziel einer langfristigen und vertrauensvollen Zusammenarbeit',
];
const qualifications = [
  'gerade Ihr Studium abgeschlossen haben oder schon etwas Berufserfahrung haben',
  'aus den Bereichen Kommunikationstechnologie oder Softwareentwicklung kommen',
  'Leidenschaft und Engagement für neue und bessere Lösungen mitbringen',
  'Eigeninitiativ arbeiten wollen und dennoch ein Teamplayer sind',
];

export function CareersPage() {
  return <main id="main-content">
    <PageHeader title="Karriere" />
    <div data-reveal="" className="career-banner" aria-hidden="true" />
    <section className="page-section container career-content">
      <div className="prose" data-reveal=""><h2 className="section-title">Karriere</h2>
        <p>Wir sind spezialisiert auf die komplette Durchführung von Projekten auf den Gebieten optische Übertragungsnetze, Schaltschrankbau und Automotive weltweit. Wenn Sie in einem jungen und innovativen Team arbeiten und sich weiterentwickeln wollen, dann könnten wir für Sie ein interessanter Arbeitgeber sein.</p>
      </div>
      <div className="prose career-lists">
        <section className="career-list" data-reveal=""><h3>Wir bieten Ihnen</h3><ul className="checklist">{benefits.map(text => <li key={text}>{text}</li>)}</ul></section>
        <section className="career-list" data-reveal="80"><h3>Sie passen zu uns, wenn Sie</h3><ul className="checklist">{qualifications.map(text => <li key={text}>{text}</li>)}</ul></section>
      </div>
    </section>
    <section className="page-section container career-content"><div className="prose" data-reveal="">
      <hr /><img className="original-icon" src={upload + 'Mitarbeiter-01-75x75.png'} alt="" width="75" height="75" loading="lazy" /><h3>Unsere aktuellen Stellenangebote</h3>
      <p>Aktuell haben wir keine offenen Stellen zu besetzen. Gerne können Sie sich unter <a href="mailto:info@herterkom.de">info@herterkom.de</a> initiativ bewerben.</p>
    </div></section>
  </main>;
}

const contactFields = [
  { name: 'title', label: 'Titel', autoComplete: 'honorific-prefix' },
  { name: 'position', label: 'Position', autoComplete: 'organization-title' },
  { name: 'name', label: 'Name', autoComplete: 'name', required: true },
  { name: 'organization', label: 'Organisation/Firma', autoComplete: 'organization', required: true },
  { name: 'country', label: 'Land', autoComplete: 'country-name' },
  { name: 'email', label: 'Email', autoComplete: 'email', type: 'email', required: true },
  { name: 'phone', label: 'Telefon', autoComplete: 'tel', type: 'tel', required: true },
];

export function ContactPage() {
  const [draft, setDraft] = useState('');
  function prepareEmail(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = contactFields.map(field => `${field.label}: ${data.get(field.name) || ''}`).join('\n') + `\n\nIhre Nachricht:\n${data.get('message')}`;
    const uri = `mailto:info@herterkom.de?subject=${encodeURIComponent(`Kontaktanfrage – ${data.get('name')}`)}&body=${encodeURIComponent(body)}`;
    setDraft(uri);
    window.location.href = uri;
  }
  return <main id="main-content">
    <PageHeader title="Kontakt" />
    <section className="page-section container contact-content">
      <p className="contact-intro" data-reveal="">Wir setzen auf langfristige Partnerschaften mit unseren Kunden, Lieferanten und Arbeitnehmern. So lassen sich Qualitäten langfristig halten und ausbauen und letztendlich für alle Seiten gewinnbringende Vorteile erzielen.</p>
      <form data-reveal="80" className="contact-form" onSubmit={prepareEmail} onReset={() => setDraft('')} aria-label="Kontaktformular" aria-describedby="contact-delivery-note">
        {contactFields.map(field => <label key={field.name} className={['email', 'phone'].includes(field.name) ? 'contact-half-width' : 'full-width'} htmlFor={`contact-${field.name}`}><span>{field.label}{field.required && <span className="required-mark" aria-hidden="true">*</span>}</span><span className="contact-input-wrap"><input id={`contact-${field.name}`} name={field.name} type={field.type || 'text'} autoComplete={field.autoComplete} placeholder={field.name === 'position' ? 'Position' : undefined} required={field.required} />{field.name === 'email' && <Mail className="form-input-icon" size={18} aria-hidden="true" />}{field.name === 'phone' && <Phone className="form-input-icon" size={18} aria-hidden="true" />}</span></label>)}
        <label className="full-width" htmlFor="contact-message"><span>Ihre Nachricht <span className="required-mark" aria-hidden="true">*</span></span><textarea name="message" id="contact-message" required rows={7} /></label>
        <p className="form-hint" id="contact-delivery-note">* Pflichtfelder. Das Formular bereitet eine E-Mail an info@herterkom.de vor. Sie versenden diese anschließend in Ihrem E-Mail-Programm. <a href="/datenschutzerklaerung/">Datenschutzerklärung</a></p>
        <div className="form-actions"><button className="button button-primary" type="submit">Senden</button><button className="button button-outline" type="reset">Entfernen</button></div>
        {draft && <div className="form-status" role="status">Ihr E-Mail-Entwurf ist vorbereitet. Bitte senden Sie die Nachricht über Ihr E-Mail-Programm. <a href={draft}>E-Mail-Entwurf öffnen</a></div>}
      </form>
    </section>
  </main>;
}

export function SparePartsPage() {
  return <main id="main-content">
    <PageHeader title="Ersatzteile" />
    <section className="page-section container prose spare-parts-content" data-reveal="">
      <h2>ERSATZTEILE, UPDATES, REPARATUREN</h2>
      <p><strong>Bewährtes am Laufen halten</strong><br />Viele Legacy Produkte werden vom Originalhersteller nicht mehr in vollem Umfang unterstützt. In diesen Fälle stehen wir mit unserem Know-how und umfangreich ausgestatteten Labor mit Rat und Tat zur Seite und bieten Reparaturen, Dauertests, Konfigurationen, Updates, Datenbankreparaturen u.v.m.</p>
      <p>Außerdem führen wir in unserem Lager eine Vielzahl an Hard- &amp; Software für die unten aufgeführten Netzelemente. Bei Bedarf nennen Sie uns bitte Bezeichnung und Nummer der benötigten Produkte. Wir erstellen Ihnen dann ein individuelles Angebot.</p>
    </section>
  </main>;
}
