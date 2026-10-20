import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Download,
  Mail,
  MapPin,
  Network,
  Sparkles,
  Terminal,
} from 'lucide-react';
import {
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiSupabase,
  SiTailwindcss,
} from 'react-icons/si';

const techIcons = {
  Python: SiPython,
  'C++': Code2,
  JavaScript: SiJavascript,
  SQL: Code2,
  React: SiReact,
  'Tailwind CSS': SiTailwindcss,
  'HTML/CSS': Code2,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  FastAPI: SiFastapi,
  LLMs: Sparkles,
  RAG: Sparkles,
  pgvector: SiPostgresql,
  MLflow: Sparkles,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Supabase: SiSupabase,
  Docker: SiDocker,
  AWS: Network,
  Git: SiGit,
  Postman: Code2,
  Groq: Sparkles,
  Gemini: Sparkles,
  Twilio: Mail,
  LangChain: SiLangchain,
};

const github = 'https://github.com/ammufeezzz';
const linkedin = 'https://www.linkedin.com/in/ammar-mufeez-0b05a5213/';
const email = 'mailto:mufeezammar29@gmail.com';

const skills = [
  { label: 'Languages', values: ['Python', 'C++', 'JavaScript', 'SQL'] },
  { label: 'Frontend', values: ['React', 'Tailwind CSS', 'HTML/CSS'] },
  { label: 'Backend', values: ['Node.js', 'Express', 'FastAPI'] },
  { label: 'Data & AI', values: ['LLMs', 'RAG', 'pgvector', 'MLflow'] },
  { label: 'Data Stores', values: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase'] },
  { label: 'Tools', values: ['Docker', 'AWS', 'Git', 'Postman'] },
];

const experiences = [
  {
    date: 'May 2026 — Jul 2026',
    role: 'Data Engineering Intern',
    company: 'Tredence Analytics',
    points: [
      'Built an agentic AI system for automated health-insurance verification using LLMs and knowledge-graph retrieval.',
      'Engineered FastAPI services to orchestrate graph queries and multi-step agent workflows.',
      'Created a responsive React interface for verification workflows and result visualization.',
    ],
  },
  {
    date: 'Nov 2025 — Jan 2026',
    role: 'Frontend Developer Intern',
    company: 'Acredge Landworks Pvt. Ltd.',
    points: [
      'Translated Figma designs into responsive, production-ready frontend components.',
      'Integrated REST APIs and resolved cross-browser UI issues to improve product consistency.',
      'Built an internal task-management tool adopted across the organization.',
    ],
  },
];

const projects = [
  {
    index: '01',
    title: 'SecureLink',
    type: 'ML security platform',
    description:
      'A phishing-aware URL shortener that classifies links before shortening them, pairing explainable ML detection with a fast redirect path.',
    highlights: ['~96% classifier accuracy', '13 engineered features', 'Redis cache-aside', 'HTTPS deployment'],
    stack: ['Python', 'FastAPI', 'MongoDB', 'Redis', 'Docker', 'AWS'],
    href: github,
    featured: true,
  },
  {
    index: '02',
    title: 'SocialSynapse',
    type: 'AI-powered second brain',
    description:
      'A WhatsApp-first knowledge system that captures social links, extracts their content, and turns them into a searchable, conversational personal knowledge base.',
    highlights: ['WhatsApp ingestion', 'Semantic search', 'RAG chat', 'Weekly AI digest'],
    stack: ['React', 'Express', 'Groq', 'Gemini', 'Supabase', 'pgvector', 'Twilio'],
    href: 'https://github.com/ammufeezzz/SocialSynapse',
  },
  {
    index: '03',
    title: 'BookSageAI',
    type: 'Conversational RAG',
    description:
      'An end-to-end PDF research companion that grounds conversations in uploaded documents and enriches answers with live web search.',
    highlights: ['PDF vectorization', 'Hybrid retrieval', 'Gemini-powered responses', 'Interactive document UI'],
    stack: ['React', 'Python', 'LangChain', 'Gemini', 'Supabase', 'pgvector'],
    href: github,
  },
];

const achievements = [
  ['TOP 100', 'Grab India Hackathon', 'Top 100 out of 1,000+ teams · 2025'],
  ['#03', 'Stellar × Polkadot Hackerhouse', 'Third place'],
  ['#05', 'Hack the Thread', 'Pan-India solo hackathon · 180DC NITK'],
];

const systemNodes = [
  { id: 'build', label: 'BUILD', detail: 'Full-stack products with a clear job to do.', destination: '#projects', position: 'build' },
  { id: 'data', label: 'DATA', detail: 'Pipelines and systems that turn information into action.', destination: '#work', position: 'data' },
  { id: 'ai', label: 'AI', detail: 'Agentic and retrieval-powered tools grounded in real use cases.', destination: '#projects', position: 'ai' },
];

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

function SectionHeading({ kicker, title, copy }) {
  return (
    <motion.div {...reveal} className="section-heading">
      <span className="eyebrow"><i /> {kicker}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </motion.div>
  );
}

function App() {
  const [activeNode, setActiveNode] = useState(systemNodes[0]);
  return (
    <main>
      <div className="scanline" aria-hidden="true" />
      <nav className="nav wrap">
        <a className="brand" href="#top" aria-label="Ammar Mufeez home">AM<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-resume" href="/Ammar_Mufeez_Resume.pdf" download>
          Resume <Download size={14} />
        </a>
      </nav>

      <section id="top" className="hero wrap">
        <motion.div {...reveal} className="hero-copy">
          <div className="availability"><span /> Available for opportunities</div>
          <p className="hero-kicker">HELLO, I’M</p>
          <h1>Ammar<br /><em>Mufeez.</em></h1>
          <p className="hero-intro">I build useful digital systems at the intersection of <strong>full-stack engineering, data,</strong> and <strong>AI.</strong></p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={18} /></a>
            <a className="button button-quiet" href={github} target="_blank" rel="noreferrer"><Terminal size={17} /> GitHub</a>
          </div>
        </motion.div>
        <motion.aside {...reveal} transition={{ ...reveal.transition, delay: 0.15 }} className="system-map">
          <div className="system-map-top"><span>SYSTEMS LAB</span><span className="online">LIVE</span></div>
          <div className="map-canvas" aria-label="Explore Ammar's areas of work">
            <svg viewBox="0 0 320 210" aria-hidden="true"><path d="M70 58 L160 126 L250 58 M160 126 L160 185" /><circle cx="160" cy="126" r="4" /></svg>
            {systemNodes.map(node => <motion.button type="button" className={`map-node ${node.position} ${activeNode.id === node.id ? 'active' : ''}`} key={node.id} onClick={() => setActiveNode(node)} whileTap={{ scale: .94 }}><i /><span>{node.label}</span></motion.button>)}
          </div>
          <motion.a className="map-detail" href={activeNode.destination} key={activeNode.id} initial={{ opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .22 }}><span>ACTIVE SIGNAL / {activeNode.label}</span><p>{activeNode.detail}</p><ArrowDownRight size={17} /></motion.a>
          <div className="system-map-footer"><span><MapPin size={13} /> NITK Surathkal, India</span><span>SELECT A NODE</span></div>
        </motion.aside>
      </section>

      <section className="ticker" aria-label="Areas of expertise">
        <div><span>FULL STACK</span><b>✦</b><span>DATA ENGINEERING</span><b>✦</b><span>AI SYSTEMS</span><b>✦</b><span>PROBLEM SOLVING</span></div>
      </section>

      <section id="about" className="about wrap section">
        <SectionHeading kicker="01 / THE PLAYER" title="Building systems that do more." />
        <motion.div {...reveal} className="about-grid">
          <p className="about-lead">I’m a fourth-year undergraduate at <strong>NITK Surathkal</strong>, studying Civil Engineering with a Minor in Management — and spending my time building with code.</p>
          <div className="about-body"><p>My work spans agentic AI, data pipelines, interfaces, and full-stack products. I’m most interested in taking an ambiguous problem and shaping it into a thoughtful, useful experience.</p><p>Outside the build, I mentor juniors and help run technical events as an Executive Member of IE NITK.</p></div>
        </motion.div>
      </section>

      <section className="skills section wrap">
        <SectionHeading kicker="02 / SKILL TREE" title="Tools I reach for." copy="A versatile stack, selected for building practical products end to end." />
        <div className="skills-grid">
          {skills.map((skill, i) => <motion.article {...reveal} transition={{ ...reveal.transition, delay: i * 0.04 }} className="skill-card" key={skill.label}><span className="skill-number">0{i + 1}</span><h3>{skill.label}</h3><div>{skill.values.map(value => { const Icon = techIcons[value] || Code2; return <span key={value}><Icon aria-hidden="true" />{value}</span>; })}</div></motion.article>)}
        </div>
      </section>

      <section id="work" className="experience section wrap">
        <SectionHeading kicker="03 / QUEST LOG" title="Experience earned." />
        <div className="timeline">
          {experiences.map((item, i) => <motion.article {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }} className="experience-card" key={item.company}>
            <div className="experience-meta"><span>{item.date}</span><b>0{i + 1}</b></div>
            <div><h3>{item.role}</h3><p className="company">{item.company}</p></div>
            <ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
          </motion.article>)}
        </div>
      </section>

      <section id="projects" className="projects section wrap">
        <SectionHeading kicker="04 / FEATURED BUILDS" title="Selected missions." copy="Products that combine engineering depth with a clear user need." />
        <div className="project-list">
          {projects.map((project, i) => <motion.article {...reveal} transition={{ ...reveal.transition, delay: i * 0.06 }} className={`project-card ${project.featured ? 'featured' : ''}`} key={project.title}>
            <div className="project-index">{project.index}</div>
            <div className="project-main"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><ul>{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul><div className="project-stack">{project.stack.map(item => { const Icon = techIcons[item] || Code2; return <span key={item}><Icon aria-hidden="true" />{item}</span>; })}</div></div>
            <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}><ArrowUpRight size={23} /></a>
          </motion.article>)}
        </div>
      </section>

      <section className="achievements section wrap">
        <SectionHeading kicker="05 / ACHIEVEMENTS UNLOCKED" title="Proof of play." />
        <div className="achievement-grid">{achievements.map(([rank, title, detail], i) => <motion.article {...reveal} transition={{ ...reveal.transition, delay: i * 0.07 }} key={title}><b>{rank}</b><h3>{title}</h3><p>{detail}</p></motion.article>)}</div>
      </section>

      <section id="contact" className="contact wrap">
        <motion.div {...reveal} className="contact-panel">
          <span className="eyebrow"><i /> 06 / START A CONVERSATION</span>
          <h2>Let’s build<br /><em>something real.</em></h2>
          <p>Have an opportunity, interesting problem, or idea worth exploring? I’d love to hear it.</p>
          <a className="button button-primary email-button" href={email}>Send an email <ArrowUpRight size={18} /></a>
          <div className="social-links"><a href={github} target="_blank" rel="noreferrer"><Terminal size={18} /> GitHub</a><a href={linkedin} target="_blank" rel="noreferrer"><Network size={18} /> LinkedIn</a><a href={email}><Mail size={18} /> Email</a></div>
        </motion.div>
      </section>

      <footer className="footer wrap"><span>© {new Date().getFullYear()} Ammar Mufeez</span><span>DESIGNED & BUILT WITH <Sparkles size={13} /> REACT</span></footer>
    </main>
  );
}

export default App;
