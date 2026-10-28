import React from 'react';
import PageHeader from './PageHeader.jsx';

const upload = '/assets/';

function ServiceImage({ image, title }) {
  return <figure className="service-figure" data-reveal=""><img src={upload + image} alt={title} width="2500" height={image === 'Telekommunikation_2500.jpg' ? 700 : 701} loading="lazy" /><figcaption><h2>{title}</h2></figcaption></figure>;
}

function ServiceGroup({ image, title, children }) {
  return <section className="original-service-group" data-reveal=""><img className="original-icon" src={upload + image} alt="" width="75" height="75" loading="lazy" /><h3>{title}</h3>{children}</section>;
}

export function ServicesPage() {
  return <main id="main-content">
    <PageHeader title="Leistungen" />

    <section className="page-section container service-detail" id="telekommunikation">
      <span id="Telekommunikation" className="anchor-alias" aria-hidden="true" />
      <ServiceImage image="Telekommunikation_2500.jpg" title="Telekommunikation" />
      <div className="prose">
          <h3 className="service-intro-heading" data-reveal="">Grenzenloser Support auf allen Gebieten</h3>
          <p data-reveal="80">Dank unseres breiten und tiefen Know-hows, Zuverlässigkeit und Schnelligkeit sind wir bei vielen namhaften Providern im Telekommunikationsbereich ein gefragter Partner. Mit unseren bereichsübergreifenden Serviceleistungen und Angeboten bieten wir unseren Kunden Komplettlösungen aus einer Hand. Nur so lässt sich unserer Meinung nach Zuverlässigkeit und Schnelligkeit sicher realisieren. Unsere bisherigen Leistungen im Bereich Telekommunikation sind:</p>
        <ServiceGroup image="Optische_uebertragungsnetze1-01-75x75.png" title="Service, Installation und Inbetriebnahme sowie Erweiterung von Netzknoten in großen optischen Übertragungsnetzen">
        <ul className="checklist">
          <li>Installation vor Ort</li>
          <li>Remote Unterstützung von Field Engineers und Monteuren</li>
          <li>Software- und Hardware Konfigurierungen</li>
          <li>Inbetriebnahme inkl. Messungen</li>
          <li>In-Service Upgrades in großem Umfang</li>
          <li>Erweitern bzw. Ersetzen von Hardware durch Geräte der nächsten Generation im laufenden Betrieb</li>
        </ul>
        </ServiceGroup>
        <ServiceGroup image="wartung_1-01-75x75.png" title="Überwachung und Wartung von optischen Übertragungsnetzen">
        <h4>Präventive Maintenance</h4>
        <ul className="checklist"><li>eine proaktive Überwachung sensibler Systeme minimiert das Auftreten kritischer Probleme</li></ul>
        <h4>Fehlersuche, Fehleranalyse und Fehlerbeseitigung</h4>
        <ul className="checklist">
          <li>Schnelle remote Entstörung im 24/7 Modus</li>
          <li>Fehleranalyse und Fehlerreproduktion im Labor</li>
          <li>Testen und Vorbereiten von Ersatzteilen und Austauschgeräten inkl. deren Komponenten im Labor</li>
          <li>Notfall vor Ort Service</li>
        </ul>
        </ServiceGroup>
        <ServiceGroup image="Netz1-01-75x75.png" title="Netzerweiterungen und Netztransformationen">
        <ul className="checklist">
          <li>Netzplanung</li>
          <li>Beratung, Begleitung und Durchführung von Netzerweiterungen und Netztransformationen</li>
        </ul>
        </ServiceGroup>
        <ServiceGroup image="netzwerk_2-01-75x75.png" title="Support von Legacy Geräten">
        <p>Durch unser eigenes Labor mit Testumgebung und <a href="/ersatzteillager/">Ersatzteillager</a> können wir für Legacy Geräte von Nokia (ehemals Alcatel-Lucent) mit exklusiven Laborarbeiten und einem Ersatzteildienst auch nach Ablauf der Gewährleistung einen umfassenden Service für Hard- und Software bieten.</p>
        </ServiceGroup>
        <h3 className="service-intro-heading" data-reveal="">Know-How</h3>
        <p data-reveal="80">Seit unserer Firmengründung arbeiten wir eng mit Nokia (ehemals Alcatel-Lucent) zusammen und haben seitdem gemeinsam zahlreiche komplexe Projekte realisiert - sowohl remote als auch vor Ort an Standorten weltweit. Hierbei waren wir in den Netzen vieler namhafter Provider tätig.</p>
        <p data-reveal="160">Unser umfassendes Know-how beinhaltet unter anderem folgende technologische Themen und Bereiche.</p>
      </div>
    </section>

    <section className="page-section container service-detail" id="schaltschrankbau">
      <span id="plans" className="anchor-alias" aria-hidden="true" />
      <ServiceImage image="schaltschrankbau.jpg" title="Schaltschrankbau" />
      <div className="prose">
          <h3 className="service-intro-heading" data-reveal="">Maßgeschneidert für den reibungslosen Dauerbetrieb</h3>
          <p data-reveal="80">Gemeinsam mit unserem Kooperationspartner – die Elektro Lillich GmbH – entwickeln und fertigen wir seit 2020 kundenspezifische Schaltschränke.</p>
          <p data-reveal="160">Wie die Entwicklung und Fertigung erfolgt die anschließende Montage und Inbetriebnahme gemeinsam mit Ingenieuren, Handwerksmeistern und Monteuren der Herterkom und der Elektro Lillich GmbH. Für einen sicheren Transport werden die Schaltschränke mit Erschütterungssensoren ausgestattet und in luftgefederten Fahrzeugen zum jeweiligen Standort geliefert.</p>
        <div className="service-example" data-reveal="">
        <h3>Ein Beispiel aus unserer gegenwärtigen Schaltschrankentwicklung</h3>
        <p>Im Rahmen langfristiger Lieferverträge entwickeln und fertigen wir gegenwärtig mehrere Schaltschränke unter anderem mit folgenden Merkmalen:</p>
        <ul className="checklist">
          <li>Anbindung an ein optisches Übertragungsnetz mit SDH STM-4 / STM-16 sowie optional DWDM</li>
          <li>Optisches Patching mit APS E2000 Patchpanel</li>
          <li>Multiredundante Stromversorgung mit 220AC, 220DC, 48DC</li>
          <li>Bis zu drei 24xRJ45 Patchpanel pro Schrank im Schwenkrahmen</li>
          <li>Zentrale Zusammenführung aller Alarme/Sensoren von allen Schränken über Schwachstromverbindungen und deren Anbindung ins optische Übertragungsnetz</li>
          <li>Bis zu 32 Kanalumsetzer inkl. 2 Schnellschaltgeräten zur Fernschaltung von Hochspannungsverbindungen</li>
          <li>umfangreiche kundenspezifische USV Systeme</li>
        </ul>
        </div>
        <div className="service-process" data-reveal=""><h3>Alles aus einer Hand:</h3>
        <img src={`${upload}allesauseinerhand_weiss_3-01-3-761x264.png`} alt="Alles aus einer Hand" loading="lazy" width="761" height="264" /></div>
      </div>
    </section>

    <section className="page-section container service-detail" id="automotive">
      <span id="Automotive" className="anchor-alias" aria-hidden="true" />
      <ServiceImage image="automotive.jpg" title="Automotive" />
      <div className="prose">
          <h3 className="service-intro-heading" data-reveal="">Flexibler Support für hohe Qualitätsansprüche</h3>
          <p data-reveal="80">Mit unseren jungen Ingenieuren übernehmen wir projektweise bei namhaften Unternehmen die Entwicklung, Projektierung, Umsetzung und Inbetriebnahme komplexer Mess- und Überwachungslösungen für den Sondermaschinenbau. Mit unserem breiten Erfahrungsschatz können wir Sie in folgenden Bereichen unterstützen:</p>
          <ul className="checklist" data-reveal="160">
            <li>Digitale Bildverarbeitung</li>
            <li>Gasemissionsprüfungen</li>
            <li>Druckmessungen</li>
            <li>Elektrische Prüfungen</li>
          </ul>
          <p data-reveal="0">Je nach Komplexität, Auftragszeitraum und -umfang ist eine Zusammenarbeit auch mit Personal- und Arbeitnehmerüberlassung möglich.</p>
      </div>
    </section>
  </main>;
}
