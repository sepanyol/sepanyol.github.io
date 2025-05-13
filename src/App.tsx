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
            <span className="text-lg italic">Full Stack Engineer</span>
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
            <span className="font-bold">Frontend:</span> Angular, React,
            JavaScript, TypeScript, TailwindCSS
          </p>
          <p>
            <span className="font-bold">Backend:</span> Node.js, NestJS,
            Express.js
          </p>
          <p>
            <span className="font-bold">Testing & CI:</span> Cypress, Jest,
            GitHub Workflows, Docker
          </p>
          <p>
            <span className="font-bold">Web3 & Blockchain:</span> Solidity,
            Foundry, Hardhat
          </p>
          <p>
            <span className="font-bold">Methodologies:</span> Agile, Scrum,
            Test-Driven Development, MVP-Driven, UX-Focused
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
                  04/2024 - till now
                </time>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">Full Stack Engineer</span>
                  <span className="font-normal text-base italic">
                    at Web3 Creator
                  </span>
                </div>
                <p>
                  As part of my professional experience, I developed and
                  successfully launched a full-stack single-side staking dApp,
                  featuring custom smart contract mechanics such as time-locks
                  and reward redistribution tailored to the specific
                  requirements of the application. In parallel, I advised
                  traditional industrial companies on optimizing their processes
                  through the integration of blockchain technology, helping them
                  unlock new levels of efficiency, transparency, and security.
                  My development approach is firmly MVP-driven, with a strong
                  focus on security, scalability, and delivering real value to
                  users. Additionally, I earned a certificate as a developer for
                  decentralized applications with a focus on marketing and
                  sales.
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
                  01/2021 - till now
                </time>
                <div className="flex flex-col">
                  <span className="text-xl font-bold">Full Stack Engineer</span>
                  <span className="font-normal text-base italic">
                    at DeFi Infrastructure as a Service Platform (NDA)
                  </span>
                </div>
                <p>
                  As part of my work in blockchain development, I have designed
                  and launched a wide range of custom protocols and
                  decentralized applications. This includes the development of a
                  custom ERC20 protocol with cross-chain tokenomics and
                  integrated fee management, as well as a decentralized
                  application to facilitate interaction with various ecosystem
                  protocols. I also built and deployed a Liquidity Backing
                  protocol aimed at securing token project assets and enhancing
                  their credibility, complete with a user interface for seamless
                  access.
                  <br />
                  <br />
                  Additionally, I developed and launched the Token Disburser
                  protocol—a customizable vesting solution that enables token
                  projects to manage incentives, payroll workflows, and
                  contributor rewards efficiently, alongside a dedicated UI. I
                  also created a highly customizable single-side staking
                  protocol based on the ERC-2535 (Diamond Standard), allowing
                  projects to incentivize long-term holders and investors.
                  <br />
                  <br />
                  To support multi-chain ecosystems, I launched a cross-chain
                  protocol leveraging Celer cBridge, Interchain Messaging, and
                  Chainlink CCIP, enabling the propagation of critical ecosystem
                  configurations across multiple networks.
                  <br />
                  <br />
                  Security is a top priority in all my work. Every protocol I
                  develop undergoes thorough smart contract audits, and I
                  consistently use tools like Slither to analyze code quality. I
                  also ensure 100% test coverage for all smart contracts to
                  maintain reliability and robustness.
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
                  In my role as a software developer, I have been responsible
                  for the planning, conception, and implementation of various
                  projects within our proprietary eLearning platform, Digibiz24,
                  which is built on Angular and AngularJS. Additionally, I
                  contributed to the development of a website
                  builder-as-a-service platform, working extensively with
                  TypeScript, Vanilla JavaScript, and Handlebars.
                  <br />
                  <br />
                  A significant part of my work involved the design and
                  implementation of reusable component libraries using Angular
                  and Nx, as well as major refactoring efforts—such as
                  transitioning a Symfony-based server-side rendered (SSR)
                  application into a modern single-page application (SPA), and
                  migrating large portions of the website builder codebase from
                  JavaScript to TypeScript.
                  <br />
                  <br />
                  To ensure software quality, I introduced and maintained
                  testing frameworks, using Cypress for integration testing and
                  Jest for unit testing. I also optimized development processes
                  and supported quality assurance through continuous integration
                  and delivery pipelines, leveraging GitHub Workflows, Docker,
                  and Google Cloud Platform.
                  <br />
                  <br />
                  Beyond technical execution, I played a key role in defining
                  and delivering numerous features that directly contributed to
                  increased revenue for coaches and trainers using our platform.
                  I was also actively involved in recruiting and onboarding new
                  developers, ensuring a smooth integration into the team and
                  development processes.
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
                  As part of my responsibilities in developing a Business
                  Intelligence as a Service product, I led the planning, design,
                  and implementation of various projects based on Angular. I
                  also developed microservices to automate the creation of PDFs
                  for diverse email marketing campaigns, using technologies such
                  as Node.js, Protractor, Selenium, ImageMagick, and PDFKit.
                  <br />
                  <br />
                  In addition, I worked on large-scale SEO and SEM strategies
                  for Angular-based server-side rendered marketing pages. This
                  included generating and globally distributing over 10 million
                  highly optimized static SPAs—each tailored to specific
                  companies and HR codes—via Varnish Enterprise to ensure fast
                  load times and high availability.
                  <br />
                  <br />
                  I implemented process optimizations and supported quality
                  assurance by establishing continuous integration and delivery
                  pipelines using Docker and Bamboo. Furthermore, I played a key
                  role in shaping agile development practices, introducing and
                  managing workflows within both SCRUM and Kanban methodologies.
                  <br />
                  <br />
                  As team lead, I guided and trained a cross-functional frontend
                  team consisting of UX/UI designers and frontend developers. I
                  was also responsible for recruiting and onboarding new
                  designers and developers, ensuring they were effectively
                  integrated into the team and aligned with project goals and
                  quality standards.
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
                  In my role within the eCommerce sector, I led and managed
                  fulfillment solutions tailored specifically for the textile
                  and fashion industry. A key focus of my work was the
                  development and continuous optimization of our in-house core
                  store software to ensure scalability, performance, and
                  seamless integration with logistics and inventory systems.
                  <br />
                  <br />
                  I was responsible for the end-to-end planning, conception,
                  development, oversight, and launch of internationalized store
                  solutions across various European markets. In addition to
                  leading the technical project management efforts, I
                  coordinated cross-functional teams to deliver projects on time
                  and aligned with business objectives.
                  <br />
                  <br />
                  My role also included recruiting and onboarding new developers
                  and apprentices, helping them integrate smoothly into the
                  company&apos;s development processes. Furthermore, I served as
                  a certified trainer for IT specialists in application
                  development, mentoring them throughout their training and
                  ensuring they gained practical, industry-relevant skills.
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
                  In this role, I was responsible for developing deployment
                  strategies for Magento-based eCommerce systems, ensuring
                  reliable and efficient delivery pipelines tailored to the
                  needs of B2C shops in Germany. I conceptualized and delivered
                  numerous end-to-end customer projects, focusing on both
                  performance and business outcomes.
                  <br />
                  <br />
                  A significant part of my work involved high-impact SEO and SEM
                  optimization, aimed at achieving the best possible response
                  times and search visibility for online stores. I also
                  designed, maintained, and optimized server and software
                  architectures using the Zend Framework and Magento, leveraging
                  Varnish for advanced caching and performance improvements.
                  <br />
                  <br />
                  Additionally, I created and conducted workshops to upskill web
                  and graphic designers in modern web development practices,
                  fostering cross-disciplinary collaboration. I developed a
                  multi-client application to support the fast deployment of
                  TYPO3 CMS instances via flash-bootstrap, and subsequently led
                  the team responsible for scaling and enhancing this
                  architecture to support broader use cases and higher demand.
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
