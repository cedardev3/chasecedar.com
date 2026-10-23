import Image from "next/image";
import EmailButton from "@/components/EmailButton";
import TravelMap from "@/components/TravelMap";
import { languages, visitedCountryCount } from "@/data/profile";

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#story">
        Skip to content
      </a>
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-identity animate-rise">
            <Image
              src="/profile.jpg"
              alt="Chase Cedar"
              width={200}
              height={200}
              priority
              className="hero-photo"
            />
            <div className="hero-who">
              <p className="brand">Chase Cedar</p>
              <p className="hero-place">Vancouver, BC</p>
            </div>
          </div>
          <h1 className="animate-rise-delay">
            See it. Build it. Get outside.
          </h1>
          <p className="lede animate-rise-delay-2">
            I help take products from a messy idea to something people
            actually use.
          </p>
          <div className="hero-actions animate-rise-delay-2">
            <a
              className="btn"
              href="https://www.linkedin.com/in/chasecedar"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <EmailButton />
          </div>
        </div>
      </section>

      <section className="section" id="story">
        <p className="eyebrow">About</p>
        <h2>I start with how its used, then I make it easier.</h2>
        <p>
          I look at the business first. What people are doing, where it gets
          stuck, what would actually help. Then I do not leave it as a note.
          I put a simpler version in people&apos;s hands.
        </p>
        <p>
          Sometimes that is a new thing from scratch. Sometimes it is a
          rebuild of something that has been patched for years. Sometimes it
          is a small tool that sits next to what you already have, so you do
          not have to rip out the old system to get a win. I like getting my
          hands dirty, seeing what the product actually needs, and making it
          do more with fewer moving parts.
        </p>
        <p>
          I sit with developers, scope and test features, and help ship with
          docs and training. I have run IT, rebuilt brands and websites, and
          run ads to actually get people in the door. I have taken software
          from an early mess to something live, and trained people when it
          needed to land.
        </p>
        <p>
          AI is extra hands, so the looking and the building can happen in
          the same stretch of work. The public sites below are things I took
          all the way through.
        </p>
        <p>
          When I talk with someone, I look for what they actually know. I
          ask until I get the real stuff, share what I have seen, and try to
          leave both of us knowing more than when we sat down.
        </p>
      </section>

      <section className="section project-section" id="builds">
        <div className="project-group">
          <p className="eyebrow">On my own</p>
          <h2>If it does not exist, I build it.</h2>
          <div className="project-stack">
          <article>
            <a
              className="project-preview"
              href="https://gdpincome.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/projects/gdpincome.png"
                alt="gdpincome.com landing page with a pie chart of large economies in US dollars"
                width={1200}
                height={750}
                className="project-shot"
              />
            </a>
            <h3>
              <a
                className="site-link"
                href="https://gdpincome.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                gdpincome.com
              </a>
            </h3>
            <p>
              A clean picture of GDP and income in US dollars, with industry
              breakdowns and country comparisons. Japanese so I could send
              it to family. The view I want before I trust a story about an
              economy.
            </p>
          </article>
          <article>
            <a
              className="project-preview"
              href="https://mytaxspend.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/projects/mytaxspend.png"
                alt="mytaxspend.com landing page with US and Canadian tax spending charts"
                width={1200}
                height={750}
                className="project-shot"
              />
            </a>
            <h3>
              <a
                className="site-link"
                href="https://mytaxspend.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                mytaxspend.com
              </a>
            </h3>
            <p>
              Follow the money. Where US and Canadian tax dollars come from
              and where they go, in a picture a team can actually use.
            </p>
          </article>
          <article>
            <div className="project-preview">
              <Image
                src="/projects/market-calls.png"
                alt="Market Calls dashboard showing Top Buys, market sentiment, and return cohort"
                width={1600}
                height={900}
                className="project-shot"
              />
            </div>
            <h3>Market Calls</h3>
            <p>
              Private desk tool. Finance and geopolitics pods, turned into a
              daily note. Saves me hours of listening. The brief I wanted
              when I had to get smart in a hurry.
            </p>
          </article>
          </div>
        </div>

        <div className="project-group">
          <p className="eyebrow">With a team</p>
          <h2>I help ship what I could not have built alone.</h2>
          <div className="project-stack">
            <article>
              <a
                className="project-preview"
                href="https://app.nept.finance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/projects/neptune.png"
                  alt="app.nept.finance market overview with lending, borrowing, and protocol totals"
                  width={1200}
                  height={750}
                  className="project-shot"
                />
              </a>
              <h3>
                <a
                  className="site-link"
                  href="https://app.nept.finance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  app.nept.finance
                </a>
              </h3>
              <p>
                Automated lending and borrowing against crypto assets. One of
                the fastest and most impressive lending protocols in
                existence. Built by a team of developers in my last job.
                There is no way I could have built this myself. I helped
                with communications, community, and the internal operations
                of the software company around it.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="markets">
        <p className="eyebrow">Markets</p>
        <h2>I watch stocks for fun. A lot of them.</h2>
        <p>
          Amateur investor. I have gone through thousands of listings in
          Canada and the US. I like sitting with how a company and a cycle
          actually work. I did not build Market Calls or the GDP tools to
          hand out stock tips. They are personal projects that save me time
          and, hopefully, help me earn money.
        </p>
      </section>

      <section className="section" id="languages">
        <p className="eyebrow">Languages</p>
        <h2>What I can speak, roughly.</h2>
        <div className="lang-list">
          {languages.map((lang) => (
            <div className="lang-bar" key={lang.name}>
              <strong id={`lang-${lang.name}`}>{lang.name}</strong>
              <div
                className="lang-track"
                role="meter"
                aria-labelledby={`lang-${lang.name}`}
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

      <section className="section" id="life">
        <p className="eyebrow">Outside</p>
        <h2>I exercise a lot so I can sit still when it counts.</h2>
        <p>
          Hockey, soccer, tennis, and a pile of other sports. Camping when I
          can. Moving around is how I stay sharp to sit down and do
          long stretches of work.
        </p>
      </section>

      <section className="section map-section" id="travel">
        <p className="eyebrow">Travel ({visitedCountryCount} countries)</p>
        <h2>Places I have stayed.</h2>
        <p>
          Most of this was in my 20s. I will be buying a condo in Vancouver
          soon and will need to stay put to get more work done. Aside from a
          winter trip for some sun, or a business trip if required, I will
          be happy to stick to beautiful British Columbia.
        </p>
        <TravelMap />
      </section>

      <footer className="footer">
        <p>Chase Cedar · Vancouver</p>
        <a className="site-link" href="mailto:me@chasecedar.com">
          me@chasecedar.com
        </a>
        <a
          className="site-link"
          href="https://www.linkedin.com/in/chasecedar"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </footer>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          color: var(--foam);
          background:
            radial-gradient(circle at 18% 20%, rgba(184, 90, 42, 0.35), transparent 34%),
            radial-gradient(circle at 82% 10%, rgba(61, 107, 85, 0.45), transparent 40%),
            linear-gradient(145deg, #0f1c17 0%, #1f3d32 48%, #2a4f41 100%);
        }

        .hero-glow {
          position: absolute;
          inset: -10%;
          background:
            radial-gradient(circle at 70% 60%, rgba(239, 230, 214, 0.12), transparent 28%),
            radial-gradient(circle at 30% 80%, rgba(184, 90, 42, 0.18), transparent 32%);
          pointer-events: none;
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.15rem;
          padding: clamp(2rem, 8vh, 5rem) clamp(1.5rem, 5vw, 4.5rem);
          max-width: 760px;
          margin: 0 auto;
        }

        .hero-identity {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .hero-photo {
          width: 72px;
          height: 72px;
          object-fit: cover;
          border-radius: 50%;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.28);
          border: 2px solid color-mix(in oklab, var(--foam) 28%, transparent);
        }

        .hero-who {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .hero-place {
          margin: 0;
          font-size: 0.92rem;
          letter-spacing: 0.04em;
          color: color-mix(in oklab, var(--foam) 68%, transparent);
        }

        .brand {
          margin: 0;
          font-family: var(--font-display), serif;
          font-size: clamp(2.1rem, 6vw, 3.4rem);
          line-height: 0.95;
          letter-spacing: -0.04em;
          font-weight: 560;
        }

        .hero h1 {
          margin: 0.4rem 0 0;
          max-width: 18ch;
          font-family: var(--font-display), serif;
          font-size: clamp(1.7rem, 4.2vw, 2.85rem);
          line-height: 1.12;
          font-weight: 480;
        }

        .lede {
          margin: 1rem 0 0;
          max-width: 42ch;
          font-size: 1.08rem;
          line-height: 1.55;
          color: color-mix(in oklab, var(--foam) 82%, transparent);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem;
          margin-top: 1.6rem;
        }

        .email-btn-wrap {
          position: relative;
          display: inline-flex;
        }

        .copy-note {
          position: absolute;
          left: 50%;
          bottom: calc(100% + 0.45rem);
          transform: translateX(-50%);
          white-space: nowrap;
          padding: 0.28rem 0.6rem;
          border-radius: 999px;
          background: var(--foam);
          color: var(--ink);
          font-size: 0.78rem;
          font-weight: 560;
          letter-spacing: 0.02em;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 2.85rem;
          padding: 0.7rem 1.15rem;
          border-radius: 999px;
          background: var(--cedar);
          color: var(--foam);
          text-decoration: none;
          font-weight: 560;
          transition: transform 160ms ease, background 160ms ease;
        }

        .btn:hover {
          transform: translateY(-1px);
          background: #9a4820;
        }

        .btn.ghost {
          background: transparent;
          border: 1px solid color-mix(in oklab, var(--foam) 35%, transparent);
        }

        .btn.ghost:hover {
          background: color-mix(in oklab, var(--foam) 10%, transparent);
        }

        .section {
          max-width: 760px;
          margin: 0 auto;
          padding: clamp(3.5rem, 8vw, 6rem) clamp(1.25rem, 4vw, 2rem);
        }

        .section p + p {
          margin-top: 1rem;
        }

        .map-section,
        .project-section {
          max-width: 980px;
        }

        .map-section > p {
          max-width: 62ch;
        }

        .project-preview {
          display: block;
          position: relative;
          overflow: hidden;
          margin: 0 0 1rem;
          aspect-ratio: 16 / 10;
          border-radius: 1rem;
          border: 1px solid var(--line);
          background: #0f1c17;
        }

        .project-shot {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
        }

        .eyebrow {
          margin: 0 0 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 0.78rem;
          color: var(--moss);
        }

        .section h2 {
          margin: 0 0 1rem;
          font-family: var(--font-display), serif;
          font-size: clamp(1.8rem, 4vw, 2.7rem);
          line-height: 1.12;
          letter-spacing: -0.03em;
        }

        .section p,
        .section li {
          font-size: 1.08rem;
          line-height: 1.7;
          color: color-mix(in oklab, var(--ink) 88%, transparent);
        }

        .project-group + .project-group {
          margin-top: 3.5rem;
        }

        .project-stack {
          display: grid;
          gap: 1.75rem;
          margin-top: 1.5rem;
        }

        .project-stack article {
          padding-top: 1.25rem;
          border-top: 1px solid var(--line);
        }

        .project-stack h3 {
          margin: 0 0 0.45rem;
          font-size: 1.25rem;
        }

        .lang-list {
          display: grid;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .footer {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem 1.5rem;
          justify-content: space-between;
          align-items: center;
          max-width: 980px;
          margin: 0 auto;
          padding: 2rem clamp(1.25rem, 4vw, 2rem) 3rem;
          border-top: 1px solid var(--line);
          font-family: var(--font-display), serif;
        }

        @media (max-width: 820px) {
          .hero-photo {
            width: 64px;
            height: 64px;
          }

          .brand {
            font-size: clamp(1.85rem, 9vw, 2.8rem);
          }
        }
      `}</style>
    </main>
  );
}
