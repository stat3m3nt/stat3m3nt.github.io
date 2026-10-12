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
        I'm a full-stack developer graduating from the Software Development
        co-op program at Mohawk College in December 2026. I build production web
        apps with Next.js, TypeScript and Supabase, and I'm currently designing a
        multi-tenant property management platform on ASP.NET Core.
      </p>
      <p className="prose">
        I came to software from civil engineering, where the habits that matter
        most (checking assumptions, documenting decisions, planning for failure)
        transfer directly to code. I've shipped a live ordering platform for a
        paying client, worked as a software developer intern on Digitate's ignio
        AIOps platform, and built production React interfaces as a contract
        frontend developer at Tap N' Care.
      </p>
      <p className="prose">
        I'm looking for a junior or full-time software developer role where I
        can contribute production-ready code and keep learning from a team.
      </p>
      <dl className="facts">
        <div><dt>Based in</dt><dd>Hamilton and St. Catharines, Ontario</dd></div>
        <div><dt>Graduating</dt><dd>December 2026, Mohawk College</dd></div>
        <div><dt>Looking for</dt><dd>Junior and full-time software developer roles</dd></div>
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

const experience = [
  {
    role: "MFG Food Delivery Platform",
    org: "Full-Stack Client Project",
    dates: "May 2026 – Present",
    bullets: [
      "Built a full production food delivery platform solo for a paying client using Next.js, TypeScript, Supabase (PostgreSQL), Sanity.io CMS and Stripe, deployed on Vercel.",
      "Integrated secure checkout, authentication and transactional email workflows, enabling the client to launch on schedule with an end-to-end purchase experience.",
    ],
  },
  {
    role: "CityFix, Civic Infrastructure Reporter",
    org: "Mobile/Full-Stack Project",
    dates: "Feb 2026 – Present",
    bullets: [
      "Built a cross-platform mobile app using React Native, TypeScript, Expo Router and the Google Maps API for geo-tagging civic issues with photos and severity ratings.",
      "Shipped a native Android build end-to-end, from concept through deployment, owning the full development lifecycle.",
    ],
  },
  {
    role: "Software Developer Intern",
    org: "Digitate, ignio AIOps (Fortune 500 SaaS)",
    dates: "Feb 2023 – Dec 2024",
    bullets: [
      "Resolved production bugs across a large enterprise codebase serving Fortune 500 clients, improving reliability of the anomaly detection pipeline for on-call engineering teams.",
      "Optimised SQL queries and built backend scripts that streamlined incident workflows, reducing manual triage overhead and improving response times.",
      "Took part in agile sprint planning and peer code reviews under senior engineers, building habits around clean, maintainable, production-grade code.",
    ],
  },
  {
    role: "Frontend Developer (Contract)",
    org: "Tap N' Care",
    dates: "Sep 2020 – Dec 2023",
    bullets: [
      "Built and shipped production React interfaces from Figma designs for a health app used by real patients and care providers, improving UI consistency across web and mobile.",
      "Collaborated with iOS and Android teams in agile sprints, helping meet release milestones and reduce cross-platform feature lag.",
    ],
  },
];

const resumeSkills = [
  ["Languages", "JavaScript, TypeScript, PHP, Java, C#, SQL, HTML, CSS"],
  ["Frontend", "React, Next.js (App Router), React Native, Tailwind CSS, Bootstrap"],
  ["Backend & DB", "Node.js, PHP, REST APIs, PostgreSQL, MySQL, Supabase, Authentication"],
  ["Tools", "Git, GitHub, Vercel, Android Studio, XAMPP, Azure Fundamentals, Agile/Scrum, GitHub Copilot"],
];

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
            Full-Stack Developer<br />
            {profile.email}<br />
            github.com/stat3m3nt | linkedin.com/in/andrew-evboifo-78a655187
          </p>
        </div>

        <h4>Summary</h4>
        <p>
          Full-stack developer seeking a Software Developer role where I can
          contribute production-ready code and grow alongside senior engineers.
          I have shipped full-stack web applications across enterprise, startup
          and freelance environments using JavaScript, TypeScript, React, PHP,
          Node.js and SQL, and I pick up new frameworks quickly. I am looking
          for a team where code quality and continuous learning are taken seriously.
        </p>

        <h4>Experience</h4>
        {experience.map((job) => (
          <div className="resume-item" key={`${job.role}-${job.org}`}>
            <div className="resume-row">
              <p className="resume-role">{job.role} | {job.org}</p>
              <p className="resume-dates">{job.dates}</p>
            </div>
            <ul>
              {job.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}

        <h4>Technical skills</h4>
        {resumeSkills.map(([group, items]) => (
          <p className="resume-skill" key={group}>
            <strong>{group}:</strong> {items}
          </p>
        ))}

        <h4>Education</h4>
        <div className="resume-item">
          <div className="resume-row">
            <p className="resume-role">Computer Systems Technology, Software Development (co-op) | Mohawk College</p>
            <p className="resume-dates">Expected December 2026</p>
          </div>
          <ul>
            <li>Relevant coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Design and SQL, Web Development and Frameworks.</li>
            <li>Hackathons: Seneca Energy Hackathon (May 2026), Google Cloud Hackathon, NSBEHacks.</li>
          </ul>
        </div>
        <div className="resume-item">
          <div className="resume-row">
            <p className="resume-role">Civil Engineering | McMaster University</p>
            <p className="resume-dates">2019 – 2023</p>
          </div>
        </div>
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

        <div className="cell cell-2">
          <p className="cell-label">Email</p>
          <p className="cell-value"><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <button className="copy-btn no-print" type="button" onClick={copyEmail}>
            {copied || "Copy address"}
          </button>
          <span className="sr-only" role="status" aria-live="polite">
            {copied === "Copied" ? "Email address copied to clipboard" : ""}
          </span>
        </div>
        <div className="cell cell-2">
          <p className="cell-label">GitHub</p>
          <p className="cell-value">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">github.com/stat3m3nt</a>
          </p>
        </div>

        <div className="cell cell-2">
          <p className="cell-label">LinkedIn</p>
          <p className="cell-value">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/andrew-evboifo</a>
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
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <p className="footer-name">{profile.name}</p>
          <p className="footer-role">Full-stack developer</p>
          <p className="footer-note">Open to junior and full-time software developer roles.</p>
        </div>

        <nav className="footer-col" aria-label="Footer">
          <p className="footer-label">Sections</p>
          <ul>
            {nav.map(([id, label]) => (
              <li key={id}><a href={`#${id}`}>{label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <p className="footer-label">Connect</p>
          <ul>
            <li><a href={`mailto:${profile.email}`}>Email</a></li>
            <li><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-base">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React and Vite</p>
        <a href="#top">Back to top &uarr;</a>
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
