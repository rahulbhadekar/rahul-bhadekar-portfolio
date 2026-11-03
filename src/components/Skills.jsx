
import { m, stagger } from "framer-motion";

import {
  Activity,
  Boxes,
  Cloud,
  GitBranch,
  Workflow,
} from "lucide-react";

import { skills } from "../data/portfolio.js";
import Section from "./Section.jsx";

const EASE = [0.22, 1, 0.36, 1];

// Technology icons.
const icons = {
  cloud: Cloud,
  pipeline: Workflow,
  container: Boxes,
  monitor: Activity,
  git: GitBranch,
};


// ---------------------------------------------------------------------------
// RESPONSIVE BENTO GRID
// ---------------------------------------------------------------------------

function spanClasses(i, n) {
  const md = n % 2 === 1 && i === 0
    ? "md:col-span-2"
    : "";

  if (n === 1) {
    return `${md} lg:col-span-6`;
  }

  const wide = [0, 4, 2][n % 3];

  return `${md} ${
    i < wide
      ? "lg:col-span-3"
      : "lg:col-span-2"
  }`;
}


// ---------------------------------------------------------------------------
// SKILL CHIP ANIMATION
// ---------------------------------------------------------------------------

const chipList = {
  hidden: {},

  show: {
    transition: {
      delayChildren: stagger(0.05, {
        startDelay: 0.2,
      }),
    },
  },
};

const chip = {
  hidden: {
    opacity: 0,
    y: 10,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: EASE,
    },
  },
};


// ---------------------------------------------------------------------------
// SPOTLIGHT EFFECT
// ---------------------------------------------------------------------------

const spotlight = {
  background:
    "radial-gradient(380px circle at var(--spot-x, 50%) var(--spot-y, 0%), color-mix(in srgb, var(--c-accent) 14%, transparent), transparent 70%)",
};

function trackSpotlight(e) {
  if (e.pointerType !== "mouse") return;

  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();

  card.style.setProperty(
    "--spot-x",
    `${e.clientX - rect.left}px`
  );

  card.style.setProperty(
    "--spot-y",
    `${e.clientY - rect.top}px`
  );
}


// ---------------------------------------------------------------------------
// MAIN SKILLS SECTION
// ---------------------------------------------------------------------------

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical Skills"
      title="Technologies I"
      accent="work with"
      accentClass="text-blue"
      intro="My technical toolkit includes Java programming, backend application development, frontend technologies, relational databases, and software development tools."
    >

      <ul className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-6">

        {skills.map((group, i) => (
          <SkillCard
            key={group.category}
            group={group}
            index={i}
            total={skills.length}
          />
        ))}

      </ul>

    </Section>
  );
}


// ---------------------------------------------------------------------------
// INDIVIDUAL SKILL CARD
// ---------------------------------------------------------------------------

function SkillCard({ group, index, total }) {
  const Icon = icons[group.icon] ?? Cloud;

  const items = group.items ?? [];

  return (
    <m.li
      initial={{
        opacity: 0,
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "0px 0px -60px 0px",
      }}
      transition={{
        duration: 0.6,
        ease: EASE,
        delay: (index % 3) * 0.08,
      }}
      className={`min-w-0 ${spanClasses(index, total)}`}
    >

      <div
        onPointerMove={trackSpotlight}
        className="card group relative isolate h-full overflow-hidden p-6 sm:p-7"
      >

        {/* Mouse spotlight */}

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-fine:block"
          style={spotlight}
        />


        {/* Decorative background icon */}

        <Icon
          aria-hidden="true"
          strokeWidth={1}
          className="pointer-events-none absolute -bottom-14 -right-14 -z-10 size-40 text-accent opacity-[0.06] transition-transform duration-700 ease-out group-hover:-rotate-12 group-hover:scale-110"
        />


        {/* Category Heading */}

        <div className="flex items-start justify-between gap-4">

          <div className="flex min-w-0 items-center gap-3.5">

            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/25 transition-transform duration-300 group-hover:scale-105">

              <Icon
                className="size-5"
                aria-hidden="true"
              />

            </span>

            <h3 className="min-w-0 font-display text-lg font-bold leading-snug wrap-break-word sm:text-xl">
              {group.category}
            </h3>

          </div>

          <span
            aria-hidden="true"
            className="pt-1 font-mono text-xs text-muted"
          >
            {String(index + 1).padStart(2, "0")}
          </span>

        </div>


        {/* Technology Chips */}

        <m.ul
          variants={chipList}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "0px 0px -40px 0px",
          }}
          aria-label={group.category}
          className="mt-6 flex flex-wrap gap-2"
        >

          {items.map((item) => (

            <m.li
              key={item}
              variants={chip}
              className="max-w-full rounded-lg border border-line bg-bg/70 px-3 py-1.5 font-mono text-[13px] text-ink/90 wrap-break-word transition-[translate,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent dark:bg-surface-2"
            >
              {item}
            </m.li>

          ))}

        </m.ul>

      </div>

    </m.li>
  );
}
