import TravelMap from "@/components/TravelMap";
import { languages, visitedCountryCount } from "@/data/profile";
import styles from "./flight-centre.module.css";

const contact = {
  location: "Vancouver, BC, Canada",
  email: "me@chasecedar.com",
  phone: "Phone: [REDACTED]",
};

const summary = [
  "Travel is not a side note for me. I have stayed in hostels in Bolivia, five-star all-inclusives in Mexico, and on cruises in the Mediterranean. I backpacked across South America during my university exchange in Chile, and I still visit friends I made across Europe. I have no shortage of country-specific stories, and Flight Centre's purpose is one of the reasons this role stands out.",
  "That same curiosity is how I pick up systems. At iLearn I ran IT and led a digital transformation across brand, website, ads, and student acquisition. At Cryptech I helped take financial software from early venture capital to a profitable product, including scoping, testing, and an API release with documentation and training. When a tool does not exist, I build it. During time off for a trip to Australia I used AI-assisted development to ship mytaxspend.com and gdpincome.com over just a couple of weeks.",
];

const aiProjects = [
  {
    name: "gdpincome.com",
    dates: "2026",
    details: [
      "Designed and built a public GDP and income tool using AI-assisted development", "Includes country-level industry breakdown in US dollars and country-to-country comparisons for key data points that define a country's trajectory like demographics, debt, and life expectancy.", "Added Japanese language support to share with my partner's family",
    ],
  },
  {
    name: "mytaxspend.com",
    dates: "2026",
    details: [
      "I found high income earners often complain about Canadian taxes and compare our system to the USA so I wanted to see where our tax dollars come from and where they go.","Conceptualized over five years ago but always found it too daunting to build but now with AI and some time off work for an Australia trip, I built the full product myself over a couple weeks using public data sources.","This is the sister site to gdpincome.com where I wanted to compare countries' financial situations in a debt fueled world economy.",
    ],
  },
  {
    name: "Market Calls",
    dates: "2026",
    details: [
      "I love podcasts that dive deep into finance, technology, and geopolitics to keep up with where the world is heading.", "Listening at 2x speed was not enough to keep up with every daily podcast I like so I built a mp3 scraping tool that trancribes audio to text and runs analysis on it to create and dashboard and personalized daily message for the most structured financial pods.", "I now have an extra hour every day and a database of episodes to quickly refernce",
    ],
  },
  {
    name: "chasecedar.com",
    dates: "2026",
    details: [
      "This personal site is useful for allowing friends and family to follow my projects and to create custom job application pages.",
    ],
  },
];

const experience = [
  { role: "Head of Marketing / Director", company: "Cryptech Developments Ltd.", dates: "Feb 2022 - Present", details: ["Key contributor to a small software company building a project from early stage venture capital to fully operational and profitable financial software buisness", "Worked alongside development team to scope and test components including new features and a full API release cycle with extensive documentation and training for users"] },
  { role: "Marketing / IT Administrator", company: "iLearn Secondary School", dates: "Sept 2019 - Dec 2021", details: ["Led online school through a digital transformation that included a new brand, website, and student acquisition and retention campaigns", "Managed IT infrastructure and support for the school's digital systems and devices", "Automated marketing campaigns from Google ads, Facebook/Instagram ads, and developed other advertising and sales materials including direct mail campaigns"] },
  { role: "Founder", company: "KOI Research Group", dates: "Jan 2018 - Aug 2021", details: ["Built and managed a research and consulting company focused on the intersection of emerging financial technology and business", "Worked with clients to train staff and develop curriculum educating a wide range of organizations renging from school age children to university faculty and over 100 RCMP officers","Filmed, edited, and launched online course content for a global digital community"]},
];

const education = [
  { school: "University of Victoria (BC, Canada)", credential: "Bachelor of Commerce (Entrepreneurship)", dates: "2013-2017", notes: "Economics, Maths, Accounting, Statistics, Psychology, Computer Science, Commerce" },
  { school: "Universidad Adolfo Ibáñez (Viña del Mar, Chile)", credential: "International Business", dates: "2016-2016", notes: "International Exchange Program: Latin American Marketing and Business" },
];

const skills = ["Executive Leadership", "Software Development", "Data Analytics", "Product Management", "SEO & AI Marketing", "Marketing Automation & CRM", "Global Communications"];

const certifications = [
  { name: "Business in Latin America", issuer: "Universidad Adolfo Ibáñez", year: "2016" },
  { name: "Google Ads Certification", issuer: "Google", year: "2021" },
  { name: "Google Analytics Certification", issuer: "Google", year: "2021" },
  { name: "Google Search Certification", issuer: "Google", year: "2021" },
  { name: "Google Tag Manager Certification", issuer: "Google", year: "2021" },
];

function Line({ value }: { value: string }) {
  return value ? <span>{value}</span> : <span className={styles.blank} />;
}

export default function FlightCentre() {
  return (
    <main className={styles.page}>
      <article className={styles.sheet}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.pageName}>Flight Centre</h1>
            <p className={styles.person}>Chase Cedar</p>
          </div>
          <p className={styles.contact}>
            <Line value={contact.location} />
            <Line value={contact.email} />
            <Line value={contact.phone} />
          </p>
        </header>

        <section className={styles.section}>
          <h2>Summary</h2>
          {summary.length > 0 ? (
            summary.map((paragraph) => (
              <p className={styles.summary} key={paragraph.slice(0, 40)}>
                {paragraph}
              </p>
            ))
          ) : (
            <p className={styles.summary}>
              <span className={styles.blank} />
            </p>
          )}
        </section>

        <section className={styles.section}>
          <h2>Self-led AI generated projects</h2>
          {aiProjects.map((project, index) => (
            <div className={styles.entry} key={`ai-${index}`}>
              <div className={styles.entryTop}>
                <div>
                  <p className={styles.role}>
                    <Line value={project.name} />
                  </p>
                </div>
                <p className={styles.dates}>
                  <Line value={project.dates} />
                </p>
              </div>
              <ul className={styles.details}>
                {project.details.map((line, lineIndex) => (
                  <li key={`ai-${index}-line-${lineIndex}`}>
                    <Line value={line} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2>Experience</h2>
          {experience.map((job, index) => (
            <div className={styles.entry} key={`job-${index}`}>
              <div className={styles.entryTop}>
                <div>
                  <p className={styles.role}>
                    <Line value={job.role} />
                  </p>
                  <p className={styles.meta}>
                    <Line value={job.company} />
                  </p>
                </div>
                <p className={styles.dates}>
                  <Line value={job.dates} />
                </p>
              </div>
              <ul className={styles.details}>
                {job.details.map((line, lineIndex) => (
                  <li key={`job-${index}-line-${lineIndex}`}>
                    <Line value={line} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2>Education</h2>
          {education.map((item, index) => (
            <div className={styles.entry} key={`edu-${index}`}>
              <div className={styles.entryTop}>
                <div>
                  <p className={styles.role}>
                    <Line value={item.school} />
                  </p>
                  <p className={styles.meta}>
                    <Line value={item.credential} />
                  </p>
                </div>
                <p className={styles.dates}>
                  <Line value={item.dates} />
                </p>
              </div>
              <p className={styles.meta}>
                <Line value={item.notes} />
              </p>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2>Skills</h2>
          <ul className={styles.skills}>
            {skills.map((skill, index) => (
              <li key={`skill-${index}`}>
                <Line value={skill} />
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Certifications</h2>
          {certifications.map((item, index) => (
            <div className={styles.entry} key={`cert-${index}`}>
              <div className={styles.entryTop}>
                <div>
                  <p className={styles.role}>
                    <Line value={item.name} />
                  </p>
                  <p className={styles.meta}>
                    <Line value={item.issuer} />
                  </p>
                </div>
                <p className={styles.dates}>
                  <Line value={item.year} />
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2>Languages</h2>
          <div className={`${styles.langList} lang-list`}>
            {languages.map((lang) => (
              <div className="lang-bar" key={lang.name}>
                <strong id={`fc-lang-${lang.name}`}>{lang.name}</strong>
                <div
                  className="lang-track"
                  role="meter"
                  aria-labelledby={`fc-lang-${lang.name}`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={lang.value}
                  aria-valuetext={lang.level}
                >
                  <div className="lang-fill" style={{ width: lang.width }} />
                </div>
                <span>{lang.level}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Travel ({visitedCountryCount} countries)</h2>
          <TravelMap />
        </section>
      </article>
    </main>
  );
}
