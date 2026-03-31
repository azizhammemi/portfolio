import { useState } from "react";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`pf ${isDark ? "dark" : ""}`}>

      {/* ── NAVIGATION ── */}
      <nav className="pf-nav">
        <a className="pf-nav-logo">A<span>.</span>bdelaziz</a>
        <div className="pf-nav-right">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#internship">Internships</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button
            className="pf-theme-btn"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pf-hero">
        <div>
          <div className="pf-tag">Available for opportunities</div>
          <h1 className="pf-name">
            Abdel<span className="it">aziz.</span>
          </h1>
          <p className="pf-subtitle">Software Engineer · Tunis, Tunisia</p>
          <p className="pf-phrase">
            I build <em>full-spectrum software</em> — from pixel-perfect frontends
            and robust backends to AI integrations and smooth operational workflows,
            delivering solutions that scale and perform.
          </p>
          <div className="pf-cta">
            <a href="#contact" className="btn-d">Let's Connect</a>
            <a href="#projects" className="btn-o">View Work</a>
          </div>
        </div>

        <div className="pf-img-box">
          <div className="pf-img-inner">
            <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="24" r="14" stroke="#6c63ff" strokeWidth="1.5" />
              <path d="M8 56c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke="#6c63ff" strokeWidth="1.5" />
            </svg>
            <p>Your Photo Here</p>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="pf-about" id="about">
        <div className="pf-lbl">About</div>
        <h2 className="pf-h2">Who I <em>am</em></h2>
        <div className="pf-about-grid">
          <div className="pf-about-text">
            <p>Hi, I'm <strong>Abdelaziz</strong> — a software engineer based in <em>Tunis, Tunisia</em> who loves building complete, end-to-end solutions across the full stack.</p>
            <p>With <strong>1 year of professional experience</strong> at Society X, I've worked across <em>frontend, backend, AI, and operations</em> — taking products from concept to production and keeping them running smoothly.</p>
            <p>I thrive at the intersection of engineering domains. Whether it's crafting a responsive UI, designing an API, wiring up an AI model, or automating an ops pipeline — I believe <em>great software is a system</em>, and every layer matters.</p>
          </div>
          <div>
            <div className="pf-stats">
              <div className="pf-stat">
                <span className="pf-stat-n">1+</span>
                <span className="pf-stat-l">Years Exp.</span>
              </div>
              <div className="pf-stat">
                <span className="pf-stat-n">7</span>
                <span className="pf-stat-l">Internships</span>
              </div>
              <div className="pf-stat">
                <span className="pf-stat-n">∞</span>
                <span className="pf-stat-l">Passion</span>
              </div>
            </div>
            <div className="pf-skills">
              {[
                ["React / Next.js", "88%"],
                ["Node.js / Express", "84%"],
                ["Python / AI / ML", "78%"],
                ["REST API / GraphQL", "82%"],
                ["SQL / MongoDB", "75%"],
                ["DevOps / CI-CD", "70%"],
              ].map(([label, pct]) => (
                <div className="pf-skill" key={label}>
                  <div className="pf-skill-nm">{label} <span>{pct}</span></div>
                  <div className="pf-skill-bar">
                    <div className="pf-skill-fill" style={{ width: pct }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="pf-sec" id="experience">
        <div className="pf-lbl">Journey</div>
        <h2 className="pf-h2">My <em>Experience</em></h2>
        <div className="pf-card">
          <div className="pf-card-type"><div className="pf-card-dot"></div>Full-Time · Work</div>
          <div className="pf-card-title">Software Engineer</div>
          <div className="pf-card-co">Society X</div>
          <div className="pf-card-period">Jan 2024 — Present · 1 Year</div>
          <div className="pf-card-desc" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p>During my experience, I led the migration of my internship project and built two new applications:</p>
            <ul style={{ paddingLeft: '20px' }}>
              <li style={{ marginBottom: '6px' }}><strong>Final Project Migration (Core System & Security):</strong> Migrated the aforementioned internship platform's backend from JS to TS by adopting a Layered Architecture. Integrated Redux, optimized API responses, enforced OWASP Top 10 security standards, and implemented cookie-based authentication with role-based access control.</li>
              <li style={{ marginBottom: '6px' }}>
                <strong>Fleet Management:</strong> Built a comprehensive platform to track company vehicles — covering availability, maintenance, accidents, and administrative paperwork. Key capabilities include:
                <ul style={{ paddingLeft: '18px', marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <li>🚗 <strong>Vehicle Tracking Dashboard:</strong> Real-time status (available / in-maintenance / in-use) with full lifecycle history per vehicle.</li>
                  <li>⛽ <strong>Fuel Cost Automation:</strong> Automated cost-per-litre calculations by parsing Total fuel invoices — zero manual entry.</li>
                  <li>🗺️ <strong>GPS & Mileage Integration:</strong> Live location and odometer sync via <em>Google Maps API</em> and <em>mycomtrace1 API</em>, with automated alerts for upcoming technical controls and maintenance deadlines.</li>
                  <li>📄 <strong>Carte Grise Scanner (.exe):</strong> Built a standalone Windows desktop app (Python → .exe via PyInstaller) that scans vehicle registration cards (carte grise) using OCR, extracts structured data, and pushes it directly to the platform via a secured REST API — eliminating manual data entry.</li>
                  <li>🏗️ <strong>Architecture:</strong> Frontend in <em>React + Redux</em> following a strict <em>Feature-Based Architecture</em> (features/, store/, shared/). Backend split between <em>Python</em> (OCR service & automation scripts) and <em>Laravel</em> (core REST API, authentication, database management).</li>
                </ul>
              </li>
              <li><strong>Asset Tracking:</strong> Created an app to monitor corporate phones and SIM card assignments, featuring electronic signature validation for external group rules and XLSX data export capabilities.</li>
            </ul>
          </div>
          <div className="pf-tags" style={{ marginTop: '16px' }}>
            {["React", "Redux", "TypeScript", "Python", "Laravel", "PyInstaller", "OCR", "Google Maps API", "mycomtrace1 API", "OWASP", "REST API"].map(t => (
              <span className="pf-tag2" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNSHIPS ── */}
      <section className="pf-sec alt" id="internship">
        <div className="pf-lbl">Training</div>
        <h2 className="pf-h2">My <em>Internships</em></h2>

        <div className="pf-timeline">

          {/* 1 */}
          <div className="pf-tl-item">
            <div className="pf-tl-meta">
              <span className="pf-tl-date">Feb 2025 — Jul 2025</span>
              <span className="pf-tl-dur">6 months</span>
            </div>
            <div className="pf-tl-spine">
              <div className="pf-tl-dot pf-tl-dot--gold"></div>
              <div className="pf-tl-line"></div>
            </div>
            <div className="pf-tl-card">
              <div className="pf-tl-badge">Final Year Project</div>
              <div className="pf-tl-title">Software Engineering Intern</div>
              <div className="pf-tl-co">SCPC-Comptoir Hammami</div>
              <p className="pf-tl-desc">Designed and developed a digital platform for internal corporate communication — implementing user management, publications, projects, tasks, and real-time messaging. Built WebRTC-powered meeting services, crafted the full frontend, and deployed on an OVH server.</p>
              <div className="pf-tags">
                {["React.js", "Node.js", "WebRTC", "REST API", "OVH Deploy"].map(t => <span className="pf-tag2" key={t}>{t}</span>)}
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="pf-tl-item">
            <div className="pf-tl-meta">
              <span className="pf-tl-date">Aug — Sep 2024</span>
              <span className="pf-tl-dur">2 months</span>
            </div>
            <div className="pf-tl-spine">
              <div className="pf-tl-dot"></div>
              <div className="pf-tl-line"></div>
            </div>
            <div className="pf-tl-card">
              <div className="pf-tl-badge pf-tl-badge--muted">Internship</div>
              <div className="pf-tl-title">Software Engineering Intern</div>
              <div className="pf-tl-co">Yessmine Triko</div>
              <p className="pf-tl-desc">Built a stock management application — auto-generating barcodes for incoming products, handling batch ticket printing, managing dispatch via scanner, generating PDF delivery notes, and integrating analytics to visualise stock movements and shortages.</p>
              <div className="pf-tags">
                {["PHP", "Excel / CSV", "Barcode", "PDF"].map(t => <span className="pf-tag2" key={t}>{t}</span>)}
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="pf-tl-item">
            <div className="pf-tl-meta">
              <span className="pf-tl-date">Jun — Jul 2024</span>
              <span className="pf-tl-dur">2 months</span>
            </div>
            <div className="pf-tl-spine">
              <div className="pf-tl-dot"></div>
              <div className="pf-tl-line"></div>
            </div>
            <div className="pf-tl-card">
              <div className="pf-tl-badge pf-tl-badge--muted">Internship</div>
              <div className="pf-tl-title">Software Engineering Intern</div>
              <div className="pf-tl-co">Primatec Engineering</div>
              <p className="pf-tl-desc">Designed and implemented a multithreaded C++ web server for JSON file management with a GUI. Developed a frontend for end-user API consumption and integrated admin-side log file management tools.</p>
              <div className="pf-tags">
                {["C++", "JavaScript", "Multithreading", "WSL"].map(t => <span className="pf-tag2" key={t}>{t}</span>)}
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="pf-tl-item">
            <div className="pf-tl-meta">
              <span className="pf-tl-date">Mar — Jun 2024</span>
              <span className="pf-tl-dur">4 months</span>
            </div>
            <div className="pf-tl-spine">
              <div className="pf-tl-dot"></div>
              <div className="pf-tl-line"></div>
            </div>
            <div className="pf-tl-card">
              <div className="pf-tl-badge pf-tl-badge--muted">Internship</div>
              <div className="pf-tl-title">Software Engineering Intern</div>
              <div className="pf-tl-co">Rec-inov</div>
              <p className="pf-tl-desc">Developed a resume evaluation platform aligned with global, Canadian, and European standards — covering CV scoring, job-match scoring, resume creation, standardised PDF generation, and full user authentication.</p>
              <div className="pf-tags">
                {["React.js", "MongoDB", "PDF Gen", "Auth"].map(t => <span className="pf-tag2" key={t}>{t}</span>)}
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="pf-tl-item">
            <div className="pf-tl-meta">
              <span className="pf-tl-date">Jul — Aug 2023</span>
              <span className="pf-tl-dur">2 months</span>
            </div>
            <div className="pf-tl-spine">
              <div className="pf-tl-dot"></div>
              <div className="pf-tl-line"></div>
            </div>
            <div className="pf-tl-card">
              <div className="pf-tl-badge pf-tl-badge--muted">Internship</div>
              <div className="pf-tl-title">Web &amp; Embedded Intern</div>
              <div className="pf-tl-co">Ingénierie Des Systèmes Embarqués</div>
              <p className="pf-tl-desc">Created and hosted the company's official website on Z-Hosting, and developed digital pharmacy display panels driven by Arduino boards.</p>
              <div className="pf-tags">
                {["JavaScript", "PHP", "Arduino", "Z-Hosting"].map(t => <span className="pf-tag2" key={t}>{t}</span>)}
              </div>
            </div>
          </div>

          {/* 6 */}
          <div className="pf-tl-item">
            <div className="pf-tl-meta">
              <span className="pf-tl-date">Feb — May 2022</span>
              <span className="pf-tl-dur">4 months</span>
            </div>
            <div className="pf-tl-spine">
              <div className="pf-tl-dot"></div>
              <div className="pf-tl-line"></div>
            </div>
            <div className="pf-tl-card">
              <div className="pf-tl-badge pf-tl-badge--muted">Internship</div>
              <div className="pf-tl-title">Embedded Systems Intern</div>
              <div className="pf-tl-co">Ingénierie Des Systèmes Embarqués</div>
              <p className="pf-tl-desc">Designed an intelligent queue management solution — configuring the LinkIt Smart 7688 Duo board, building a website hosted directly on the board, and programming hardware–web communication layers plus a working prototype.</p>
              <div className="pf-tags">
                {["JavaScript", "Embedded", "LinkIt 7688", "IoT"].map(t => <span className="pf-tag2" key={t}>{t}</span>)}
              </div>
            </div>
          </div>

          {/* 7 */}
          <div className="pf-tl-item pf-tl-item--last">
            <div className="pf-tl-meta">
              <span className="pf-tl-date">Aug 2021</span>
              <span className="pf-tl-dur">1 month</span>
            </div>
            <div className="pf-tl-spine">
              <div className="pf-tl-dot"></div>
            </div>
            <div className="pf-tl-card">
              <div className="pf-tl-badge pf-tl-badge--muted">Internship</div>
              <div className="pf-tl-title">IoT &amp; Mobile Intern</div>
              <div className="pf-tl-co">Electric and Technology Solutions</div>
              <p className="pf-tl-desc">Built a mobile application to control light signals over IoT — programming an ESP8266 microcontroller to communicate with a remote database, bridged by PHP scripts hosted on 000webhost.</p>
              <div className="pf-tags">
                {["ESP8266", "PHP", "IoT", "Mobile App"].map(t => <span className="pf-tag2" key={t}>{t}</span>)}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="pf-sec" id="projects">
        <div className="pf-lbl">Work</div>
        <h2 className="pf-h2">Personal <em>Projects</em></h2>
        <div className="pf-proj-grid">

          <div className="pf-proj-card">
            <div className="pf-proj-num">01</div>
            <div className="pf-proj-name">MeetSpace — Video Conferencing</div>
            <p className="pf-proj-desc">
              A Google Meet–style video conferencing application built from scratch with authentication
              and email verification. Features real-time multi-participant video and audio, screen sharing,
              in-call chat, room creation with shareable links, and mute/camera controls — powered by WebRTC and Socket.io.
            </p>
            <div className="pf-tags" style={{ marginBottom: "16px" }}>
              {["React", "Node.js", "WebRTC", "Socket.io", "Express"].map(t => <span className="pf-tag2" key={t}>{t}</span>)}
            </div>
            <a href="#" className="pf-proj-link">View Project <span>→</span></a>
          </div>

          <div className="pf-proj-card">
            <div className="pf-proj-num">02</div>
            <div className="pf-proj-name">2D Video Game — Unity</div>
            <p className="pf-proj-desc">
              A fully playable 2D video game developed in Unity using C#. Includes custom character movement,
              physics-based collisions, enemy AI with state machines, level progression, animations,
              sound effects, and a polished UI — built entirely from scratch.
            </p>
            <div className="pf-tags" style={{ marginBottom: "16px" }}>
              {["Unity 2D", "C#", "Game Physics", "Enemy AI", "Animations"].map(t => <span className="pf-tag2" key={t}>{t}</span>)}
            </div>
            <a href="#" className="pf-proj-link">View Project <span>→</span></a>
          </div>

          <div className="pf-proj-card">
            <div className="pf-proj-num">03</div>
            <div className="pf-proj-name">Hand Gesture Robot Control</div>
            <p className="pf-proj-desc">
              A robot built using an Arduino board and controlled through hand gestures.
              The system detects hand movements via computer vision and translates them into real-time
              motor commands — moving the robot in the direction of the detected gesture.
            </p>
            <div className="pf-tags" style={{ marginBottom: "16px" }}>
              {["Arduino", "Computer Vision", "Embedded Systems"].map(t => <span className="pf-tag2" key={t}>{t}</span>)}
            </div>
            <a href="#" className="pf-proj-link">View Project <span>→</span></a>
          </div>

          <div className="pf-proj-card">
            <div className="pf-proj-num">04</div>
            <div className="pf-proj-name">Instagram Automation Bot</div>
            <p className="pf-proj-desc">
              A desktop automation bot built with Python and Selenium that can follow and unfollow
              Instagram users automatically. Simulates real user actions, manages follow/unfollow limits,
              and includes safety delays. Packaged as a standalone .exe for use without a Python environment.
            </p>
            <div className="pf-tags" style={{ marginBottom: "16px" }}>
              {["Python", "Selenium", "Automation", "Desktop App (.exe)"].map(t => <span className="pf-tag2" key={t}>{t}</span>)}
            </div>
            <a href="#" className="pf-proj-link">View Project <span>→</span></a>
          </div>

        </div>
      </section>

      {/* ── CONTACT ── */}
      <div className="pf-contact" id="contact">
        <div className="pf-contact-inner">
          <div>
            <div className="pf-lbl pf-lbl-dark">Contact</div>
            <h2 className="pf-contact-big">Let's build<em>together.</em></h2>
            <p className="pf-contact-sub">Open to new opportunities, collaborations, and interesting conversations. Don't hesitate — just reach out.</p>
            <a href="mailto:abdelaziz@email.com" className="btn-d">Send a Message</a>
          </div>
          <div className="pf-contact-items">
            <a href="mailto:abdelaziz@email.com" className="pf-ci">
              <div className="pf-ci-left">
                <div className="pf-ci-icon">✉</div>
                <div>
                  <span className="pf-ci-lbl">Email</span>
                  <span className="pf-ci-val">abdelaziz@email.com</span>
                </div>
              </div>
              <span className="pf-ci-arrow">→</span>
            </a>
            <a href="https://linkedin.com/in/abdelaziz" target="_blank" rel="noreferrer" className="pf-ci">
              <div className="pf-ci-left">
                <div className="pf-ci-icon">in</div>
                <div>
                  <span className="pf-ci-lbl">LinkedIn</span>
                  <span className="pf-ci-val">linkedin.com/in/abdelaziz</span>
                </div>
              </div>
              <span className="pf-ci-arrow">→</span>
            </a>
            <a href="https://github.com/abdelaziz" target="_blank" rel="noreferrer" className="pf-ci">
              <div className="pf-ci-left">
                <div className="pf-ci-icon">⌥</div>
                <div>
                  <span className="pf-ci-lbl">GitHub</span>
                  <span className="pf-ci-val">github.com/abdelaziz</span>
                </div>
              </div>
              <span className="pf-ci-arrow">→</span>
            </a>
            <a href="tel:+216XXXXXXXX" className="pf-ci">
              <div className="pf-ci-left">
                <div className="pf-ci-icon">☎</div>
                <div>
                  <span className="pf-ci-lbl">Phone</span>
                  <span className="pf-ci-val">+216 XX XXX XXX</span>
                </div>
              </div>
              <span className="pf-ci-arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="pf-footer">
        <p>© 2025 <span>Abdelaziz</span> · Designed &amp; Built with passion</p>
        <p>Tunis, <span>Tunisia</span></p>
      </footer>

    </div>
  );
}

export default App;