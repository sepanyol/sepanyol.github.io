import { useState } from "react";
import { FaGithub, FaLinkedin, FaRocket } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import "./App.css";
import { Section } from "./Section";

function App() {
  const copyright = new Date().getFullYear();
  const EMAIL = "aGlAY2ViYWxsb3MuaW8=";
  const [hasCopied, setHasCopied] = useState(false);
  const handleEmailClick = () => {
    window.navigator.clipboard.writeText(window.atob(EMAIL));
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 5000);
  };
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-8">
          <div className="avatar ">
            <div className="w-48 rounded-full shadow-xl">
              <img src="/daniel.jpg" />
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start w-full gap-1 py-4">
            <span className="flex flex-col md:flex-row items-center md:gap-4">
              <span className="text-3xl font-bold">Daniel Ceballos Tejero</span>
              <span className="flex flex-row gap-0.5 items-center">
                <FaLocationDot className="size-4" /> Germany
              </span>
            </span>
            <span className="text-lg italic">
              Senior Agentic Full Stack Software Engineer
            </span>
            <div className="flex flex-row gap-8 mt-4">
              <a
                href="https://linkedin.com/in/daniel-ceballos/"
                target="_blank"
                className="flex flex-row gap-2 whitespace-nowrap"
              >
                <FaLinkedin className="size-6 inline-block" />
                <span className="hidden md:inline-block">
                  {" "}
                  /daniel-ceballos
                </span>
              </a>
              <a
                href="https://github.com/sepanyol/"
                target="_blank"
                className="flex flex-row gap-2 whitespace-nowrap"
              >
                <FaGithub className="size-6 inline-block" />
                <span className="hidden md:inline-block"> /sepanyol</span>
              </a>
              <span
                className="flex flex-row gap-2 whitespace-nowrap cursor-pointer"
                onClick={handleEmailClick}
              >
                <MdMail className="size-6 inline-block" />{" "}
                {hasCopied ? (
                  <span className="text-green-700">copied!</span>
                ) : (
                  <span>
                    Copy email{" "}
                    <span className="hidden md:inline-block">to clipboard</span>
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
        <Section>
          <h2 className="text-2xl font-bold">About me</h2>
          <p>
            I&apos;m a versatile Full Stack Engineer with over 15 years of
            experience bridging the worlds of Web2 and Web3. With a strong
            foundation in modern web technologies and architecture, I bring deep
            frontend expertise and full stack capabilities to both traditional
            and decentralized applications.
          </p>
          <p>
            In the Web2 space, I&apos;ve led the development of scalable SPAs
            and SSR solutions using frameworks like React, Angular, and Next.js,
            and have a proven track record in performance optimization, DevOps
            (Docker, CI/CD, GCP), and automated testing with Cypress and Jest.
          </p>
          <p>
            In Web3, I actively design and deploy secure smart contracts using
            Solidity and Foundry, and have built intuitive, user-friendly dApp
            interfaces. My experience extends to cross-chain integrations using
            Chainlink CCIP and Celer cBridge, focusing on creating seamless user
            experiences across complex decentralized systems.
          </p>
          <p>
            Currently, I&apos;m focused on enhancing Web3 usability through
            areas like account abstraction, decentralized identity, and the
            zero-knowledge stack. I thrive in remote-first, agile teams, and
            contribute across the entire product lifecycle. From MVP to
            production!
          </p>
        </Section>
        <Section>
          <h2 className="text-2xl font-bold">Primary Stack</h2>
          <p>
            <span className="font-bold">Agentic AI:</span> Claude Code, Codex
            CLI, GitHub Copilot CLI, OpenCode, MCP integration, Eval & Evidence
            Harness, Human-in-the-Loop Design
          </p>
          <p>
            <span className="font-bold">Frontend:</span> TypeScript, React,
            Next.js, Remix / React Router 7, Redux Toolkit, TailwindCSS
          </p>
          <p>
            <span className="font-bold">Backend:</span> Node.js, NestJS,
            Express.js, REST, OpenAPI, OAuth / JWT, PostgreSQL, SSR / SSG
          </p>
          <p>
            <span className="font-bold">Infrastructure & DevOps:</span> AWS,
            GCP, Vercel, Cloudflare, Docker, Terraform, Helm, Azure DevOps,
            GitHub Actions, Datadog
          </p>
          <p>
            <span className="font-bold">Quality Engineering:</span> Jest,
            Playwright, Cypress, TDD, Contract Testing, GraphQL Mocking, Sentry
          </p>
          <p>
            <span className="font-bold">Data & Observability:</span> Prometheus,
            Grafana, BI interfaces, High-Load Architectures
          </p>
          <p>
            <span className="font-bold">Methodology:</span> Agile, Kanban,
            Scrum, Cross-Functional Collaboration, Team Leadership, Distributed
            Teams
          </p>
        </Section>

        <Section>
          <h2 className="text-2xl font-bold">Experience</h2>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <FaRocket className="size-6" />
              </div>
              <div className="timeline-start mb-10 md:text-end flex flex-col gap-2">
                <time className="font-mono text-base italic mt-1">
                  09/2025 - till now
                </time>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">
                    Senior Software Engineer — Full Stack & Agentic Engineering
                  </span>
                  <span className="font-normal text-base italic">
                    at Tangany
                  </span>
                </div>
                <p>
                  I joined Tangany to help kick off a greenfield product in the
                  regulated digital-asset space — and used the moment to make
                  agentic engineering my primary workflow rather than a side
                  experiment.
                  <br />
                  <br />
                  <span className="font-bold">
                    Cross-repo Development Harness.
                  </span>{" "}
                  Designed and built a harness that operates across distributed
                  repositories (no monorepo) and keeps domain concepts and
                  patterns coherent everywhere agents touch code. It&apos;s the
                  substrate that lets a small team move like a much larger one.
                  <br />
                  <br />
                  <span className="font-bold">Evidence Harness.</span> An
                  autonomous verification layer that runs unit, integration and
                  Playwright UI tests against agent output, feeds the results
                  back into the loop, and lets iteration happen with minimal
                  human intervention.
                  <br />
                  <br />
                  <span className="font-bold">
                    Figma → Storybook pipeline.
                  </span>{" "}
                  Agents generate UI primitives from Figma designs and ship them
                  into Storybook with a Playwright-driven 1:1 visual diff
                  against the source. Closes the most common gap between design
                  intent and implementation.
                  <br />
                  <br />
                  <span className="font-bold">
                    Jira-MCP integration for epic decomposition.
                  </span>{" "}
                  Epics get broken down into the smallest sensible stories
                  autonomously and routed through the delivery flow — turning a
                  manual ritual into a reliable pipeline.
                  <br />
                  <br />
                  <span className="font-bold">
                    Tooling stack, evaluated in the open.
                  </span>{" "}
                  Claude Code, Codex CLI, GitHub Copilot CLI, OpenCode with
                  Superpowers and Oh-My-Open-Agent extensions — all piloted,
                  compared, and rolled into the team&apos;s daily workflow.
                  <br />
                  <br />
                  <span className="font-bold">Enabling the team.</span>{" "}
                  Kick-offs on agentic coding, deep dives on agent files and
                  skill libraries, 1:1 coaching across teams. The leverage
                  isn&apos;t the harness — it&apos;s everyone using it.
                  <br />
                  <br />
                  <span className="font-bold">Process redesign.</span> Replaced
                  the previous four-state Jira flow with a granular model that
                  finally exposes where work actually gets stuck. Tightened
                  deployment and API-doc automation alongside.
                  <br />
                  <br />
                  <span className="font-bold">
                    Classical engineering, of course.
                  </span>{" "}
                  OpenAPI-first workflows, contract and API testing, full
                  GraphQL mocking for the Cypress suite, hardening of the B2B2C
                  React surface, and pipelines on Azure DevOps, Terraform and
                  Helm.
                  <br />
                  <br />
                  The direction of travel: full-stack flows that are as
                  autonomous as they can responsibly be — with human-in-the-loop
                  reserved for the moments where it genuinely adds value.
                  <br />
                  <br />
                  <span className="font-bold">Stack:</span> TypeScript · React ·
                  NestJS · PostgreSQL · OpenAPI · Cypress · Playwright · Azure
                  DevOps · Terraform · Helm · Claude Code · Codex CLI · OpenCode
                </p>
              </div>
              <hr />
            </li>

            <li>
              <div className="timeline-middle">
                <FaRocket className="size-6" />
              </div>
              <div className="timeline-end mb-10 flex flex-col gap-2">
                <time className="font-mono text-base italic mt-1">
                  04/2024 - till now
                </time>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">
                    Software Engineer (Full Stack)
                  </span>
                  <span className="font-normal text-base italic">
                    Freelance
                  </span>
                </div>
                <p>
                  Delivered full-stack applications with modern React and
                  Next.js frontends and TypeScript-based domain logic.
                  <br />
                  <br />
                  Built secure, scalable platform features with a focus on user
                  experience, reliability, and data clarity.
                  <br />
                  <br />
                  Advised companies on integrating distributed systems and
                  automation workflows, translating complex requirements into
                  viable architectures.
                  <br />
                  <br />
                  Developed data-intensive dashboard and configuration
                  interfaces in Next.js and TypeScript.
                  <br />
                  <br />
                  Established test strategies (Jest, Cypress) and CI/CD
                  pipelines for high quality and maintainability.
                  <br />
                  <br />
                  Drove MVP-oriented solutions for clients with short iteration
                  and validation cycles.
                </p>
              </div>
              <hr />
            </li>
            <li>
              <div className="timeline-middle">
                <FaRocket className="size-6" />
              </div>
              <div className="timeline-start mb-10 md:text-end flex flex-col gap-2">
                <time className="font-mono text-base italic mt-1">
                  05/2019 - 04/2024
                </time>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">
                    Senior Frontend Engineer
                  </span>
                  <span className="font-normal text-base italic">
                    at Digistore24 GmbH
                  </span>
                </div>
                <p>
                  Planned, architected, and delivered large-scale frontend
                  projects for high-traffic SaaS in TypeScript, Angular, and
                  React/Next.js.
                  <br />
                  <br />
                  Led refactoring initiatives — migrating legacy SSR to modern
                  SPA architectures with significantly improved load times.
                  <br />
                  <br />
                  Designed modular component libraries and design systems that
                  enabled consistent UI patterns across distributed teams.
                  <br />
                  <br />
                  Introduced advanced test setups (Cypress, Jest), increasing
                  stability and reducing release bottlenecks.
                  <br />
                  <br />
                  Implemented CI/CD integrations on GitHub Workflows and GCP —
                  higher deploy velocity and stronger QA quality.
                  <br />
                  <br />
                  Shipped revenue-critical features for coaches and enterprise
                  customers, and supported hiring, onboarding, and mentoring of
                  developers.
                </p>
              </div>
              <hr />
            </li>
            <li>
              <div className="timeline-middle">
                <FaRocket className="size-6" />
              </div>
              <div className="timeline-end mb-10 flex flex-col gap-2">
                <time className="font-mono text-base italic mt-1">
                  03/2016 - 04/2019
                </time>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">
                    Technical Product Lead
                  </span>
                  <span className="font-normal text-base italic">
                    at Confidential Trade Organization GmbH
                  </span>
                </div>
                <p>
                  Architected and delivered a business intelligence SaaS
                  platform with complex dashboards, data visualizations, and
                  high-volume analytics workflows.
                  <br />
                  <br />
                  Implemented microservices in Node.js for automated document
                  generation and marketing analytics.
                  <br />
                  <br />
                  Optimized SEO and SEM pipelines and SSR marketing pages for
                  global distribution.
                  <br />
                  <br />
                  Led cross-functional teams (UX, UI, frontend) and scaled
                  engineering processes through mentoring and hiring.
                </p>
              </div>
              <hr />
            </li>

            <li>
              <div className="timeline-middle">
                <FaRocket className="size-6" />
              </div>
              <div className="timeline-start mb-10 md:text-end flex flex-col gap-2">
                <time className="font-mono text-base italic mt-1">
                  03/2015 - 02/2016
                </time>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">
                    Technical Product Lead
                  </span>
                  <span className="font-normal text-base italic">
                    at Wiethe Interaktiv GmbH & Co. KG
                  </span>
                </div>
                <p>
                  Delivered and optimized eCommerce solutions with high
                  performance requirements and complex data models.
                  <br />
                  <br />
                  Built and continuously developed core store software with a
                  focus on modularity and interface quality.
                  <br />
                  <br />
                  Coordinated international launches and led cross-functional
                  teams in delivering high-quality digital products.
                  <br />
                  <br />
                  Mentored developers and contributed to internal training
                  programs.
                </p>
              </div>
              <hr />
            </li>
            <li>
              <div className="timeline-middle">
                <FaRocket className="size-6" />
              </div>
              <div className="timeline-end mb-10 flex flex-col gap-2">
                <time className="font-mono text-base italic mt-1">
                  07/2011 - 02/2015
                </time>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">Full-Stack Engineer</span>
                  <span className="font-normal text-base italic">
                    at basecom GmbH & Co. KG
                  </span>
                </div>
                <p>
                  Developed end-to-end web applications spanning frontend,
                  backend, and infrastructure components.
                  <br />
                  <br />
                  Designed deployment strategies for performance-critical
                  eCommerce platforms.
                  <br />
                  <br />
                  Implemented SEO and SEM optimizations and high-performance
                  caching architectures.
                  <br />
                  <br />
                  Built and scaled multi-client systems.
                  <br />
                  <br />
                  Led small teams and ran workshops for designers and
                  developers.
                </p>
              </div>
              <hr />
            </li>

            <li>
              <div className="timeline-middle">
                <FaRocket className="size-6" />
              </div>
              <div className="timeline-start mb-10 md:text-end flex flex-col gap-2">
                <time className="font-mono text-base italic mt-1">
                  07/2008 - 06/2011
                </time>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">
                    Apprenticeship IT specialist in application development
                    (IHK)
                  </span>
                  <span className="font-normal text-base italic">
                    at basecom GmbH & Co. KG
                  </span>
                </div>
                <p>
                  In this role, I focused on the development and optimization of
                  the high-traffic social networking platform stayblue.de,
                  ensuring stability, performance, and scalability under heavy
                  user load. A core responsibility was the intensive refinement
                  and optimization of a custom object-oriented PHP framework,
                  significantly improving code quality, maintainability, and
                  execution speed.
                  <br />
                  <br />
                  Additionally, I developed merchandise management systems and
                  extended them with custom contract modules to support customer
                  and domain management processes. These backend systems were
                  built in PHP and tailored to meet complex business
                  requirements, contributing to streamlined operations and
                  enhanced service delivery.
                </p>
              </div>
              <hr />
            </li>
            <li>
              <div className="timeline-middle">
                <FaRocket className="size-6" />
              </div>
              <div className="timeline-end mb-10 flex flex-col gap-2">
                <time className="font-mono text-base italic mt-1">
                  07/2007 - 06/2008
                </time>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">
                    Internship in programming and web development
                  </span>
                  <span className="font-normal text-base italic">
                    at basecom GmbH & Co. KG
                  </span>
                </div>
                <p>
                  During my internship in programming and web development, I was
                  involved in several foundational projects that helped shape my
                  technical expertise. I contributed to the development of a
                  web-based CRM system and participated in the planning of a
                  web-based domain and contract management platform.
                  <br />
                  One of my key responsibilities was working on the early
                  development of stayblue.de, where I played a role in
                  converting the existing PHPBB framework into a custom,
                  object-oriented PHP framework. This transition laid the
                  groundwork for more scalable and maintainable future
                  development, marking an important step in the platform&apos;s
                  technical evolution.
                </p>
              </div>
              <hr />
            </li>
          </ul>
        </Section>
      </div>
      <footer className="font-mono text-sm pt-4 sm:pt-6 md:pt-10 text-center">
        ceballos.io &copy; {copyright}
      </footer>
    </div>
  );
}

export default App;
