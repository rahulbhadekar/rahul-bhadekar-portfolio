
import { Fragment } from "react";

import { m } from "framer-motion";

import photo360 from "../assets/profile-360.webp";
import photo540 from "../assets/profile-540.webp";
import photo720 from "../assets/profile-720.webp";

import {
  ArrowDown,
  ArrowUpRight,
  BadgeCheck,
  Download,
  MapPin,
  Code2,
  Database,
  ShieldCheck,
  Terminal,
} from "lucide-react";

import {
  certifications,
  contact,
  navLinks,
  profile,
  experience,
  projects,
} from "../data/portfolio.js";

import { LinkedinIcon } from "./icons.jsx";
import CopyEmailButton from "./hero/CopyEmailButton.jsx";
import MagneticLink from "./hero/MagneticLink.jsx";


// ---------------------------------------------------------------------------
// ANIMATION SETTINGS
// ---------------------------------------------------------------------------

const ease = [0.22, 1, 0.36, 1];

const column = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
};

const rise = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease,
    },
    transitionEnd: {
      filter: "none",
    },
  },
};

const slide = {
  hidden: {
    y: 12,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

const nameLetters = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.035,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: "0.35em",
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease,
    },
    transitionEnd: {
      filter: "none",
    },
  },
};


// ---------------------------------------------------------------------------
// HERO CONTENT
// ---------------------------------------------------------------------------

const pillText = "JAVA • SPRING BOOT • REACT";

const certs = certifications.map((cert) => ({
  name: cert.name,
  code: cert.short ?? cert.name,
}));

const stats = [
  {
    value: experience.length,
    short: "Internships",
    label: "Internship Experiences",
  },
  {
    value: projects.length,
    short: "Projects",
    label: "Featured Projects",
  },
];

const caption =
  "mt-2 block font-mono text-[11px] tracking-[0.14em] text-muted uppercase whitespace-nowrap";

const RING =
  "conic-gradient(from 0deg, var(--c-accent), var(--c-blue), var(--c-coral), var(--c-accent))";


// ---------------------------------------------------------------------------
// BACKGROUND EFFECT
// ---------------------------------------------------------------------------

function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div className="bg-grid mask-radial absolute inset-0 opacity-60 dark:opacity-100" />

      <div className="absolute -top-48 -left-48 size-144 rounded-full bg-accent-soft opacity-90 blur-[110px] will-change-transform dark:bg-accent dark:opacity-13 animate-drift-1" />

      <div className="absolute top-1/4 -right-40 size-128 rounded-full bg-blue opacity-6 blur-[110px] will-change-transform dark:opacity-12 animate-drift-2" />

      <div className="absolute -bottom-56 left-1/3 size-112 rounded-full bg-coral opacity-4 blur-[110px] will-change-transform dark:opacity-8 animate-drift-3" />
    </div>
  );
}


// ---------------------------------------------------------------------------
// INTRO SECTION
// ---------------------------------------------------------------------------

function Intro() {
  const words = profile.name.split(" ");

  return (
    <m.div
      variants={column}
      initial="hidden"
      animate="show"
      className="relative min-w-0"
    >

      {/* Professional technology badge */}

      <m.p
        variants={rise}
        className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-surface/70 px-3.5 py-1.5 font-mono text-xs text-accent dark:border-accent/25 dark:bg-accent-soft/50"
      >
        <span aria-hidden="true" className="relative flex size-2">
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent" />
          <span className="relative size-2 rounded-full bg-accent" />
        </span>

        {pillText}
      </m.p>


      {/* Animated Name */}

      <m.h1
        id="hero-title"
        aria-label={profile.name}
        variants={nameLetters}
        className="mt-6 font-display text-5xl leading-[0.95] font-bold tracking-tight text-ink sm:mt-7 sm:text-6xl md:text-7xl lg:text-[clamp(3.75rem,6vw,5rem)] lg:whitespace-nowrap"
      >
        {words.map((word, w) => (
          <Fragment key={w}>
            {w > 0 && " "}

            <span className="inline-block whitespace-nowrap">
              {[...word].map((char, c) => (
                <m.span
                  key={c}
                  variants={letter}
                  className={`inline-block ${
                    w === words.length - 1 &&
                    c === word.length - 1
                      ? "after:text-accent after:content-['.']"
                      : ""
                  }`}
                >
                  {char}
                </m.span>
              ))}
            </span>
          </Fragment>
        ))}
      </m.h1>


      {/* Professional Role */}

      <m.p
        variants={rise}
        className="mt-5 font-display text-2xl leading-snug font-semibold tracking-tight text-ink sm:text-3xl xl:text-[2.125rem]"
      >
        {profile.role}

        <span className="font-normal text-muted/70"> / </span>

        <span className="text-gradient pr-1 font-serif text-[1.12em] font-normal tracking-normal italic">
          {profile.roleAccent}
        </span>
      </m.p>


      {/* Location */}

      <m.p
        variants={rise}
        className="mt-4 flex items-center gap-2 font-mono text-sm text-muted"
      >
        <MapPin
          className="size-4 shrink-0 text-accent"
          aria-hidden="true"
        />

        {profile.location}
      </m.p>


      {/* Introduction */}

      <m.p
        variants={slide}
        className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
      >
        {profile.intro}
      </m.p>


      {/* Action Buttons */}

      <m.div
        variants={rise}
        className="mt-8 flex flex-wrap items-center gap-3 sm:mt-9 lg:gap-2 xl:gap-3"
      >

        {/* View Projects */}

        <MagneticLink
          href="#projects"
          className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-ink px-5 text-sm font-semibold text-bg shadow-lg shadow-black/10 transition-shadow duration-300 hover:shadow-[0_14px_36px_-14px_var(--c-accent)] sm:w-auto"
        >
          View Projects

          <ArrowDown
            className="size-4 transition-transform duration-300 group-hover:translate-y-0.5"
            aria-hidden="true"
          />
        </MagneticLink>


        {/* Download Resume */}

        <MagneticLink
          href={profile.resumeFile}
          download
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-line bg-surface/60 px-5 text-sm font-semibold text-ink backdrop-blur transition-colors duration-300 hover:border-accent/50 sm:w-auto"
        >
          <Download className="size-4" aria-hidden="true" />

          Download Resume
        </MagneticLink>


        {/* LinkedIn */}

        {contact.linkedin && (
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-12 items-center gap-2 px-2 text-sm font-semibold text-ink transition-colors hover:text-accent lg:px-1.5 xl:px-2"
          >
            <LinkedinIcon className="size-4" />

            LinkedIn

            <ArrowUpRight
              className="size-4 text-muted transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
              aria-hidden="true"
            />

            <span className="sr-only">
              (opens in a new tab)
            </span>
          </a>
        )}


        {/* Email */}

        {contact.email && (
          <CopyEmailButton email={contact.email} />
        )}

      </m.div>


      {/* Profile Highlights */}

      <m.ul
        variants={rise}
        aria-label="Professional highlights"
        className="mt-8 flex flex-wrap items-end gap-x-5 gap-y-5 border-t border-line pt-6 sm:mt-10 sm:gap-x-10 sm:pt-7"
      >

        {stats.map(({ value, short, label }) => (
          <li key={label}>
            <span className="block h-9 font-display text-4xl leading-none font-bold tracking-tight text-ink">
              {value}
            </span>

            <span aria-hidden="true" className={caption}>
              {short}
            </span>

            <span className="sr-only">
              {label}
            </span>
          </li>
        ))}


        {/* Courses and learning badges */}

        {certs.length > 0 && (
          <li>
            <span className="flex flex-col items-start gap-1 sm:h-9 sm:flex-row sm:items-center sm:gap-1.5">

              {certs.map(({ name, code }) => (
                <span
                  key={name}
                  title={name}
                  className="inline-flex items-center gap-1 rounded-md border border-line bg-surface/60 px-1.5 py-0.5 font-mono text-[11px] font-medium whitespace-nowrap text-ink sm:px-2 sm:py-1 sm:text-xs"
                >
                  <BadgeCheck
                    className="size-3.5 shrink-0 text-accent"
                    aria-hidden="true"
                  />

                  <span aria-hidden="true">
                    {code}
                  </span>

                  <span className="sr-only">
                    {name}
                  </span>
                </span>
              ))}

            </span>

            <span className={caption}>
              Courses & Learning
            </span>
          </li>
        )}

      </m.ul>

    </m.div>
  );
}


// ---------------------------------------------------------------------------
// FLOATING ANIMATION WRAPPER
// ---------------------------------------------------------------------------

function Float({
  children,
  delay = 0,
  offset = false,
  className = "",
}) {
  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease, delay }}
      className={className}
    >
      <div
        className={`animate-float ${
          offset ? "[animation-delay:-3s]" : ""
        }`}
      >
        {children}
      </div>
    </m.div>
  );
}


// ---------------------------------------------------------------------------
// JAVA DEVELOPER FLOATING CARD
// ---------------------------------------------------------------------------

function JavaCard({ className = "" }) {
  const concepts = [
    ["01", "Object-Oriented Programming"],
    ["02", "Collections Framework"],
    ["03", "Exception Handling"],
    ["04", "Java 8 Features"],
  ];

  return (
    <div
      className={`rounded-2xl border border-line bg-surface/95 p-4 shadow-xl shadow-black/10 backdrop-blur-xl ${className}`}
    >

      <div className="flex items-center justify-between border-b border-line pb-3">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
            <Code2 size={17} />
          </div>

          <div>
            <p className="font-display text-sm font-bold text-ink">
              Core Java
            </p>

            <p className="font-mono text-[9px] text-muted">
              PROGRAMMING
            </p>
          </div>
        </div>

        <span className="rounded-md border border-accent/20 bg-accent-soft px-2 py-1 font-mono text-[9px] text-accent">
          JAVA
        </span>
      </div>


      <div className="mt-3 space-y-2">
        {concepts.map(([number, title]) => (
          <div
            key={number}
            className="flex items-center gap-2.5 text-[10px]"
          >
            <span className="font-mono text-accent">
              {number}
            </span>

            <span className="text-muted">
              {title}
            </span>

            <span className="ml-auto text-accent">
              <BadgeCheck size={12} />
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 border-t border-line pt-3">
        <Terminal size={13} className="text-accent" />

        <span className="font-mono text-[9px] text-muted">
          Building with Java
        </span>
      </div>

    </div>
  );
}


// ---------------------------------------------------------------------------
// SPRING BOOT FLOATING CARD
// ---------------------------------------------------------------------------

function SpringBootCard({ className = "" }) {
  const layers = [
    "Controller Layer",
    "Service Layer",
    "Repository Layer",
  ];

  return (
    <div
      className={`rounded-2xl border border-line bg-surface/95 p-4 shadow-xl shadow-black/10 backdrop-blur-xl ${className}`}
    >

      <div className="flex items-center justify-between border-b border-line pb-3">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-blue/10 text-blue">
            <Database size={17} />
          </div>

          <div>
            <p className="font-display text-sm font-bold text-ink">
              Spring Boot
            </p>

            <p className="font-mono text-[9px] text-muted">
              BACKEND DEVELOPMENT
            </p>
          </div>
        </div>

        <span className="rounded-md border border-blue/20 bg-blue/10 px-2 py-1 font-mono text-[9px] text-blue">
          API
        </span>
      </div>


      <div className="mt-3 space-y-2">
        {layers.map((layer, index) => (
          <div
            key={layer}
            className="flex items-center gap-2 rounded-lg border border-line bg-surface-2/60 px-2.5 py-2"
          >
            <span className="font-mono text-[10px] text-accent">
              0{index + 1}
            </span>

            <span className="text-[10px] font-medium text-ink">
              {layer}
            </span>
          </div>
        ))}
      </div>


      <div className="mt-3 flex flex-wrap gap-2 border-t border-line pt-3">

        <span className="inline-flex items-center gap-1 rounded-md bg-accent-soft px-2 py-1 font-mono text-[9px] text-accent">
          <ShieldCheck size={11} />
          JWT
        </span>

        <span className="inline-flex items-center gap-1 rounded-md bg-blue/10 px-2 py-1 font-mono text-[9px] text-blue">
          <Database size={11} />
          MySQL
        </span>

      </div>

    </div>
  );
}


// ---------------------------------------------------------------------------
// PROFILE VISUAL
// ---------------------------------------------------------------------------


function Visual() {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease, delay: 0.2 }}
      className="@container relative mx-auto aspect-square w-full max-w-88 sm:max-w-100 md:aspect-5/6 md:max-w-lg lg:aspect-100/134 lg:max-w-none"
    >

      {/* Background Panel */}

      <div
        aria-hidden="true"
        className="absolute top-0 right-0 bottom-[20cqw] left-0 overflow-hidden rounded-4xl border border-line bg-surface md:top-[12cqw] md:bottom-0 md:left-[20cqw]"
      >
        <div className="bg-grid mask-radial absolute inset-0 opacity-50 dark:opacity-70" />

        <div className="absolute top-[45%] left-1/2 size-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-soft blur-3xl dark:bg-accent dark:opacity-15" />
      </div>


      {/* Profile Photo with Animated Gradient Ring */}

      <div className="absolute top-[6cqw] left-[22cqw] size-[56cqw] md:top-[32cqw] md:left-[30cqw] md:size-[60cqw] lg:top-[40cqw]">

        {/* Outer Glow */}

        <div
          aria-hidden="true"
          className="absolute inset-[-10%] rounded-full opacity-15 blur-2xl dark:opacity-30 animate-rotate-ccw"
          style={{ background: RING }}
        />

        {/* Animated Gradient Border */}

        <div
          aria-hidden="true"
          className="absolute -inset-0.75 rounded-full opacity-80 dark:opacity-100 animate-rotate-cw"
          style={{ background: RING }}
        />


        {/* Rahul's Responsive Profile Photo */}

        <img
          src={photo540}
          srcSet={`
            ${photo360} 360w,
            ${photo540} 540w,
            ${photo720} 720w
          `}
          sizes="(min-width: 1280px) 280px, (min-width: 1024px) 24vw, (min-width: 768px) 308px, (min-width: 640px) 224px, (min-width: 392px) 198px, calc(56vw - 22px)"
          alt="Rahul Bhadekar - Software Developer"
          width={720}
          height={1080}
          fetchPriority="high"
          className="relative size-full rounded-full border-5 border-surface bg-surface-2 object-cover object-top"
        />

      </div>


      {/* Floating Java Card */}

      <Float
        delay={0.6}
        className="absolute top-0 left-0 hidden md:block"
      >
        <JavaCard className="w-75 text-[10px] lg:w-72 lg:text-[9.5px] xl:w-82 xl:text-[11px]" />
      </Float>


      {/* Floating Spring Boot Card */}

      <Float
        delay={0.8}
        offset
        className="absolute right-[-2cqw] bottom-0 md:bottom-[-8cqw]"
      >
        <SpringBootCard className="w-53 text-[10px] sm:w-58 sm:text-[10.5px] lg:w-53 lg:text-[10px] xl:w-64 xl:text-[11px]" />
      </Float>

    </m.div>
  );
}



// ---------------------------------------------------------------------------
// SCROLL INDICATOR
// ---------------------------------------------------------------------------

function ScrollCue() {
  const target = navLinks[0];

  if (!target) return null;

  return (
    <m.a
      href={`#${target.id}`}
      aria-label={`Scroll to ${target.label}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.8 }}
      className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-muted uppercase transition-colors hover:text-ink lg:flex"
    >
      <span className="flex h-9 w-5.5 justify-center rounded-full border border-line pt-1.5">
        <span className="size-1 animate-scroll-cue rounded-full bg-accent" />
      </span>

      Scroll
    </m.a>
  );
}


// ---------------------------------------------------------------------------
// MAIN HERO COMPONENT
// ---------------------------------------------------------------------------

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >

      <Backdrop />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pt-10 pb-16 sm:gap-16 sm:px-8 sm:pt-14 sm:pb-20 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-10 lg:pt-12 lg:pb-24 xl:gap-16">

        <Intro />

        <Visual />

      </div>

      <ScrollCue />

    </section>
  );
}
