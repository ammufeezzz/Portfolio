import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Download,
  Mail,
  MapPin,
  Music2,
  Pause,
  Play,
  Network,
  Leaf,
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

const focusAreas = [
  { id: 'systems', label: 'Systems', detail: 'Turning ambiguous problems into reliable, useful products.', destination: '#projects' },
  { id: 'data', label: 'Data & AI', detail: 'Building agentic workflows, retrieval systems, and data-driven tools.', destination: '#work' },
  { id: 'product', label: 'Product', detail: 'Designing interfaces that make technically complex work feel simple.', destination: '#projects' },
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
  const [activeFocus, setActiveFocus] = useState(focusAreas[0]);
  const [isLoFiPlaying, setIsLoFiPlaying] = useState(false);
  const loFiRef = useRef(null);

  useEffect(() => () => {
    loFiRef.current?.context?.close();
  }, []);

  const toggleLoFi = () => {
    if (loFiRef.current) {
      const { context } = loFiRef.current;
      if (context.state === 'running') {
        context.suspend();
        setIsLoFiPlaying(false);
      } else {
        context.resume();
        setIsLoFiPlaying(true);
      }
      return;
    }

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    const master = context.createGain();
    master.gain.value = 0.055;
    master.connect(context.destination);

    // Soft suspended chord: deliberately sparse, warm, and unobtrusive.
    [146.83, 174.61, 220, 261.63].forEach((frequency, index) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = index % 2 ? 'sine' : 'triangle';
      oscillator.frequency.value = frequency;
      gain.gain.value = index === 0 ? 0.28 : 0.14;
      oscillator.connect(gain).connect(master);
      oscillator.start();
    });

    // A very quiet filtered noise layer gives it a gentle vinyl-like texture.
    const noise = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
    const noiseData = noise.getChannelData(0);
    for (let i = 0; i < noiseData.length; i += 1) noiseData[i] = (Math.random() * 2 - 1) * 0.09;
    const noiseSource = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const noiseGain = context.createGain();
    filter.type = 'lowpass'; filter.frequency.value = 520;
    noiseGain.gain.value = 0.09;
    noiseSource.buffer = noise; noiseSource.loop = true;
    noiseSource.connect(filter).connect(noiseGain).connect(master);
    noiseSource.start();

    loFiRef.current = { context };
    setIsLoFiPlaying(true);
  };

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
        <button type="button" className={`sound-toggle ${isLoFiPlaying ? 'playing' : ''}`} onClick={toggleLoFi} aria-pressed={isLoFiPlaying}>
          {isLoFiPlaying ? <Pause size={13} fill="currentColor" /> : <Play size={13} fill="currentColor" />} {isLoFiPlaying ? 'Pause sounds' : 'Lo-fi sounds'}
        </button>
        <a className="nav-resume" href="/Ammar_Mufeez_Resume.pdf" download>
          Resume <Download size={14} />
        </a>
      </nav>

      <section id="top" className="hero wrap">
        <motion.div {...reveal} className="hero-copy">
          <div className="availability"><span /> Available for opportunities</div>
          <p className="hero-kicker">HELLO, I’M · MAKING THINGS GROW</p>
          <h1>Ammar<br /><em>Mufeez.</em></h1>
          <p className="hero-intro">I build useful digital systems at the intersection of <strong>full-stack engineering, data,</strong> and <strong>AI.</strong></p>
          <div className="focus-switcher" aria-label="Explore Ammar's work by focus area">
            <div className="focus-tabs">{focusAreas.map(area => <button type="button" className={activeFocus.id === area.id ? 'active' : ''} onClick={() => setActiveFocus(area)} key={area.id}>{area.label}</button>)}</div>
            <motion.a className="focus-detail" href={activeFocus.destination} key={activeFocus.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .22 }}><span>CURRENT FOCUS</span><p>{activeFocus.detail}</p><ArrowDownRight size={17} /></motion.a>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={18} /></a>
            <a className="button button-quiet" href={github} target="_blank" rel="noreferrer"><Terminal size={17} /> GitHub</a>
          </div>
        </motion.div>
        <motion.aside {...reveal} transition={{ ...reveal.transition, delay: 0.15 }} className="garden-card" aria-label="A peaceful garden inspired creative profile">
          <div className="garden-sun" /><div className="garden-orb orb-one" /><div className="garden-orb orb-two" />
          <div className="garden-lines"><i /><i /><i /><i /></div>
          <div className="garden-copy"><span><Music2 size={15} /> IN A GENTLE RHYTHM</span><strong>Code that feels<br />good to use.</strong><p><MapPin size={13} /> NITK Surathkal, India</p></div>
          <div className="garden-stem stem-one"><i /><b /></div><div className="garden-stem stem-two"><i /><b /></div><div className="garden-stem stem-three"><i /><b /></div>
          <div className="garden-footer"><span><Leaf size={15} /> HUMAN-CENTRED BUILDING</span><span>2026</span></div>
        </motion.aside>
      </section>

      <section className="ticker" aria-label="Areas of expertise">
        <div><span>FULL STACK</span><b>✿</b><span>DATA ENGINEERING</span><b>♫</b><span>AI SYSTEMS</span><b>✿</b><span>THOUGHTFUL PRODUCTS</span></div>
      </section>

      <section id="about" className="about wrap section">
        <SectionHeading kicker="01 / ROOTS & RHYTHM" title="Building systems that do more." />
        <motion.div {...reveal} className="about-grid">
          <p className="about-lead">I’m a fourth-year undergraduate at <strong>NITK Surathkal</strong>, studying Civil Engineering with a Minor in Management — and spending my time building with code.</p>
          <div className="about-body"><p>My work spans agentic AI, data pipelines, interfaces, and full-stack products. I’m most interested in taking an ambiguous problem and shaping it into a thoughtful, useful experience.</p><p>Outside the build, I mentor juniors and help run technical events as an Executive Member of IE NITK.</p></div>
        </motion.div>
      </section>

      <section className="skills section wrap">
        <SectionHeading kicker="02 / THE TOOL GARDEN" title="Tools I reach for." copy="A versatile stack, selected for building practical products end to end." />
        <div className="skills-grid">
          {skills.map((skill, i) => <motion.article {...reveal} transition={{ ...reveal.transition, delay: i * 0.04 }} className="skill-card" key={skill.label}><span className="skill-number">0{i + 1}</span><h3>{skill.label}</h3><div>{skill.values.map(value => { const Icon = techIcons[value] || Code2; return <span key={value}><Icon aria-hidden="true" />{value}</span>; })}</div></motion.article>)}
        </div>
      </section>

      <section id="work" className="experience section wrap">
        <SectionHeading kicker="03 / THE PATH SO FAR" title="Experience earned." />
        <div className="timeline">
          {experiences.map((item, i) => <motion.article {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }} className="experience-card" key={item.company}>
            <div className="experience-meta"><span>{item.date}</span><b>0{i + 1}</b></div>
            <div><h3>{item.role}</h3><p className="company">{item.company}</p></div>
            <ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
          </motion.article>)}
        </div>
      </section>

      <section id="projects" className="projects section wrap">
        <SectionHeading kicker="04 / FEATURED BUILDS" title="Selected creations." copy="Products that combine engineering depth with a clear user need." />
        <div className="project-list">
          {projects.map((project, i) => <motion.article {...reveal} transition={{ ...reveal.transition, delay: i * 0.06 }} className={`project-card ${project.featured ? 'featured' : ''}`} key={project.title}>
            <div className="project-index">{project.index}</div>
            <div className="project-main"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><ul>{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul><div className="project-stack">{project.stack.map(item => { const Icon = techIcons[item] || Code2; return <span key={item}><Icon aria-hidden="true" />{item}</span>; })}</div></div>
            <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}><ArrowUpRight size={23} /></a>
          </motion.article>)}
        </div>
      </section>

      <section className="achievements section wrap">
        <SectionHeading kicker="05 / MILESTONES" title="Little celebrations." />
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
