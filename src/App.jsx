import { useEffect, useState } from "react";
import {
  profile, nav, education, skills, leadProject, projects,
} from "./data.js";

/* ---------- small helpers ---------- */

function Tags({ items }) {
  return items.map((t) => <span className="tag" key={t}>{t}</span>);
}

function Points({ items }) {
  return (
    <ul className="points">
      {items.map((p) => <li key={p}>{p}</li>)}
    </ul>
  );
}

function Sheet({ id, title, children }) {
  return (
    <section className="sheet wrap" id={id} aria-labelledby={`${id}-title`}>
      <header className="sheet-head"><h2 id={`${id}-title`}>{title}</h2></header>
      <div className="sheet-body">{children}</div>
    </section>
  );
}

/* highlights the nav link of the section in view */
function useActiveSection(ids) {
  const [active, setActive] = useState("");
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

const navIds = nav.map(([id]) => id);

function Header() {
  const active = useActiveSection(navIds);
  return (
    <header className="site-header no-print">
      <div className="wrap header-inner">
        <a className="brand" href="#top">{profile.name}</a>
        <nav aria-label="Main">
          <ul className="nav-list">
            {nav.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} aria-current={active === id ? "true" : undefined}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

/* ---------- hero with self-drawing truss ---------- */

const members = [
  ["M40 230 H480", 0], ["M40 230 L150 120", 0.3], ["M480 230 L370 120", 0.3],
  ["M150 120 H370", 0.6], ["M150 120 V230", 0.8], ["M260 120 V230", 0.9],
  ["M370 120 V230", 0.8], ["M150 120 L260 230", 1.1], ["M370 120 L260 230", 1.1],
];
const joints = [[40, 230], [150, 230], [260, 230], [370, 230], [480, 230], [150, 120], [260, 120], [370, 120]];
const trussLabels = [[150, "Client", 2.1], [260, "API", 2.2], [370, "Database", 2.3]];

function Truss() {
  return (
    <svg className="truss" viewBox="0 0 520 330" role="img" aria-labelledby="truss-title truss-desc">
      <title id="truss-title">A steel truss labelled with the layers of a web application</title>
      <desc id="truss-desc">
        A truss bridge drawing. The three top joints are labelled Client, API and Database,
        showing how load travels through each layer of a full-stack application.
      </desc>

      <g className="support">
        <path className="draw" pathLength="1" style={{ "--d": "1.6s" }} d="M40 237 L22 268 H58 Z" />
        <path className="draw" pathLength="1" style={{ "--d": "1.7s" }} d="M8 268 H72" />
        <circle className="draw" pathLength="1" style={{ "--d": "1.6s" }} cx="480" cy="248" r="11" />
        <path className="draw" pathLength="1" style={{ "--d": "1.7s" }} d="M448 268 H512" />
      </g>

      <g className="member">
        {members.map(([d, delay]) => (
          <path key={d} className="draw" pathLength="1" style={{ "--d": `${delay}s` }} d={d} />
        ))}
      </g>

      <g className="joint">
        {joints.map(([x, y]) => (
          <circle key={`${x}-${y}`} className="pop" style={{ "--d": "1.9s" }} cx={x} cy={y} r="7" />
        ))}
      </g>

      <g className="truss-label">
        {trussLabels.map(([x, label, delay]) => (
          <text key={label} className="pop" style={{ "--d": `${delay}s` }} x={x} y="98" textAnchor="middle">
            {label}
          </text>
        ))}
      </g>

      <g className="dimension">
        <path className="pop" style={{ "--d": "2.4s" }} d="M40 296 H480 M40 288 V304 M480 288 V304" />
        <text className="pop" style={{ "--d": "2.5s" }} x="260" y="322" textAnchor="middle">
          Load path, from click to stored data
        </text>
      </g>
    </svg>
  );
}

function Hero() {
  return (
    <section className="hero wrap" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          <span className="h1-line">Andrew</span>
          <span className="h1-line">Evboifo</span>
        </h1>
        <p className="lede">
          Full-stack developer with a civil engineering background. I design software
          the way engineers design structures: understand the load, plan the path it
          takes, and test before it ships.
        </p>
        <div className="button-row">
          <a className="btn btn-primary" href="#projects">See my projects</a>
          <a className="btn btn-secondary" href="#contact">Get in touch</a>
        </div>
      </div>
      <figure className="hero-figure"><Truss /></figure>
    </section>
  );
}

/* ---------- sections ---------- */

function Summary() {
  return (
    <Sheet id="summary" title="Summary">
      <p className="prose lead-prose">
        I'm a full-stack developer in the Software Development co-op program at
        Mohawk College, graduating in 2027. I build production web apps with
        Next.js, TypeScript and Supabase, and I'm currently designing a
        multi-tenant property management platform on ASP.NET Core.
      </p>
      <p className="prose">
        I came to software from civil engineering, where the habits that matter
        most (checking assumptions, documenting decisions, planning for failure)
        transfer directly to code. I've shipped a live ordering platform for a
        real client, completed internships at Digitate and Tap N' Care, and take
        on freelance web projects for local businesses.
      </p>
      <p className="prose">
        I'm looking for a co-op, internship or junior developer role where I can
        keep shipping and keep learning from a team.
      </p>
      <dl className="facts">
        <div><dt>Based in</dt><dd>Hamilton and St. Catharines, Ontario</dd></div>
        <div><dt>Graduating</dt><dd>2027, Mohawk College</dd></div>
        <div><dt>Looking for</dt><dd>Co-op, internship and junior developer roles</dd></div>
      </dl>
    </Sheet>
  );
}

function Education() {
  return (
    <Sheet id="education" title="Education">
      {education.map((e) => (
        <article className="entry" key={e.title}>
          <h3>{e.title}</h3>
          <p className="entry-meta">{e.meta}</p>
          <p className="prose">{e.text}</p>
        </article>
      ))}
    </Sheet>
  );
}

function Skills() {
  return (
    <Sheet id="skills" title="Skills">
      <table className="schedule">
        <caption className="sr-only">Technical skills grouped by layer of the stack</caption>
        <thead>
          <tr><th scope="col">Layer</th><th scope="col">What I work with</th></tr>
        </thead>
        <tbody>
          {skills.map(([layer, items]) => (
            <tr key={layer}>
              <th scope="row">{layer}</th>
              <td><Tags items={items} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="prose small-note">
        Working practices: I write the schema and API contract before the
        screens, keep decisions documented in the repo, and add tests where a
        failure would be expensive.
      </p>
    </Sheet>
  );
}

const filters = ["All", "Full-stack", "Mobile", "Web"];

function ProjectLinks({ live, repo, title }) {
  if (!live && !repo) return null;
  return (
    <div className="links">
      {live && (
        <a className="btn btn-primary btn-small" href={live} target="_blank" rel="noopener noreferrer">
          Live site<span className="sr-only"> for {title}</span>
        </a>
      )}
      {repo && (
        <a className="btn btn-secondary btn-small" href={repo} target="_blank" rel="noopener noreferrer">
          Source code<span className="sr-only"> for {title}</span>
        </a>
      )}
    </div>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const show = (p) => filter === "All" || p.category === filter;

  return (
    <Sheet id="projects" title="Projects">
      <div className="filters no-print" role="group" aria-label="Filter projects by type">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className="filter"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {show(leadProject) && (
        <article className="project-lead">
          <span className="status">{leadProject.status}</span>
          <h3>{leadProject.title}</h3>
          <p className="prose">{leadProject.text}</p>

          <ol className="flow" aria-label="How an order moves through the system">
            {leadProject.flow.map(([name, note]) => (
              <li key={name}>
                <strong>{name}</strong>
                <span>{note}</span>
              </li>
            ))}
          </ol>

          <Points items={leadProject.points} />
          <div className="tags"><Tags items={leadProject.tags} /></div>
          <ProjectLinks live={leadProject.live} repo={leadProject.repo} title={leadProject.title} />
        </article>
      )}

      <div className="project-grid">
        {projects.filter(show).map((p) => (
          <article className="project" key={p.title}>
            <span className="status status-plain">{p.status}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <Points items={p.points} />
            <div className="tags"><Tags items={p.tags} /></div>
            <ProjectLinks repo={p.repo} title={p.title} />
          </article>
        ))}
      </div>
    </Sheet>
  );
}

function Resume() {
  return (
    <Sheet id="resume" title="Resume">
      <div className="resume-actions no-print">
        <button className="btn btn-primary" type="button" onClick={() => window.print()}>
          Print or save as PDF
        </button>
      </div>

      <div className="resume-paper">
        <div className="resume-top">
          <h3 className="resume-name">{profile.name}</h3>
          <p className="resume-contact">
            Hamilton and St. Catharines, Ontario<br />
            {profile.email}<br />
            github.com/stat3m3nt | linkedin.com/in/andrew-evboifo-78a655187
          </p>
        </div>

        <h4>Profile</h4>
        <p>
          Full-stack developer and Mohawk College co-op student with a civil
          engineering background. Experienced in Next.js, TypeScript, Supabase
          and ASP.NET Core, with a live client project in production.
        </p>

        <h4>Education</h4>
        <div className="resume-item">
          <p className="resume-role">Computer Systems Technology, Software Development (co-op)</p>
          <p className="resume-where">Mohawk College. Expected 2027</p>
        </div>
        <div className="resume-item">
          <p className="resume-role">Microsoft Azure Fundamentals</p>
          <p className="resume-where">Exam in progress</p>
        </div>

        <h4>Experience</h4>
        <div className="resume-item">
          <p className="resume-role">Freelance Web Developer</p>
          <p className="resume-where">Self-employed</p>
          <ul>
            <li>Designed and built a production food delivery platform for a London food business using Next.js, Sanity CMS, Supabase, Stripe and Resend, so the owner updates the menu without code changes.</li>
            <li>Propose and deliver website redesigns for local Hamilton businesses.</li>
          </ul>
        </div>
        {/* TODO: add dates and 1-2 specific bullets for each internship below */}
        <div className="resume-item">
          <p className="resume-role">Intern</p>
          <p className="resume-where">Digitate</p>
        </div>
        <div className="resume-item">
          <p className="resume-role">Intern</p>
          <p className="resume-where">Tap N' Care</p>
        </div>

        <h4>Selected projects</h4>
        <ul>
          <li><strong>MFG (Mac's Fried Goods):</strong> live full-stack ordering platform with a Sanity CMS menu, Stripe webhooks, PostgreSQL and Resend emails.</li>
          <li><strong>PropertyOS:</strong> multi-tenant property management SaaS with a 62-table PostgreSQL schema and ASP.NET Core 9 API.</li>
          <li><strong>CityFix:</strong> React Native and Expo app for reporting municipal infrastructure issues with GPS, photos and a live map.</li>
        </ul>

        <h4>Technical skills</h4>
        <p>
          Next.js, React, TypeScript, React Native, Expo, ASP.NET Core, C#, Java, Python,
          PostgreSQL, MySQL, SQL Server, Supabase, Stripe, Sanity CMS, Git, Vercel.
        </p>
      </div>
    </Sheet>
  );
}

function Contact() {
  const [copied, setCopied] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied("Copied");
    } catch {
      setCopied("Copy failed");
    }
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <Sheet id="contact" title="Contact">
      <p className="prose lead-prose">
        Email is the fastest way to reach me. I reply to every message about
        co-op, internship and junior developer roles.
      </p>

      <div className="titleblock">
        <div className="cell cell-2"><p className="cell-label">Drawn by</p><p className="cell-value">{profile.name}</p></div>
        <div className="cell cell-2"><p className="cell-label">Location</p><p className="cell-value">Hamilton and St. Catharines, Ontario</p></div>
        <div className="cell cell-2"><p className="cell-label">Revision</p><p className="cell-value">October 2026</p></div>

        <div className="cell cell-3">
          <p className="cell-label">Email</p>
          <p className="cell-value"><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <button className="copy-btn no-print" type="button" onClick={copyEmail}>
            {copied || "Copy address"}
          </button>
          <span className="sr-only" role="status" aria-live="polite">
            {copied === "Copied" ? "Email address copied to clipboard" : ""}
          </span>
        </div>
        <div className="cell cell-3">
          <p className="cell-label">GitHub</p>
          <p className="cell-value">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">github.com/stat3m3nt</a>
          </p>
        </div>

        <div className="cell cell-3">
          <p className="cell-label">LinkedIn</p>
          <p className="cell-value">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/andrew-evboifo</a>
          </p>
        </div>
        <div className="cell cell-3">
          <p className="cell-label">Portfolio</p>
          <p className="cell-value">
            <a href={profile.oldPortfolio} target="_blank" rel="noopener noreferrer">stat3m3nts-portfolio.netlify.app</a>
          </p>
        </div>

        <div className="cell cell-6 cell-status">
          <p className="cell-label">Status</p>
          <p className="cell-value">Open to co-op, internship and junior developer roles</p>
        </div>
      </div>
    </Sheet>
  );
}

function Footer() {
  return (
    <footer className="site-footer no-print">
      <div className="wrap footer-inner">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
        <ul className="footer-links">
          <li><a href={`mailto:${profile.email}`}>Email</a></li>
          <li><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Summary />
        <Education />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
