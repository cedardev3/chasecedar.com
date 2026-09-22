import Image from "next/image";
import TravelMap from "@/components/TravelMap";

const languages = [
  { name: "English", level: "This is the easy one", width: "100%" },
  { name: "Spanish", level: "I can get around", width: "62%" },
  { name: "French", level: "Still early", width: "28%" },
  { name: "Japanese", level: "Started from zero", width: "12%" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-inner">
          <Image
            src="/profile.jpg"
            alt="Chase Cedar"
            width={512}
            height={512}
            priority
            className="hero-photo animate-rise"
          />
          <div className="hero-copy">
            <p className="brand animate-rise">Chase Cedar</p>
            <h1 className="animate-rise-delay">
              I never ran out of ideas. I ran out of people and patience.
            </h1>
            <p className="lede animate-rise-delay-2">
              AI is the first tool that lets me actually finish the stuff I used
              to abandon halfway.
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
              <a className="btn ghost" href="#work">
                Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="story">
        <p className="eyebrow">About</p>
        <h2>Too many ideas, not enough follow through.</h2>
        <p>
          I have always been the person with a notebook full of things I wanted
          to make. The problem was never imagination. I did not have a team, and
          I do not stick with one thing for years if I can help it. So a lot of
          it stayed in my head. AI changed that for me. It feels like extra
          manpower, which means I can sit down and build things I would have
          given up on before.
        </p>
      </section>

      <section className="section" id="work">
        <p className="eyebrow">Projects</p>
        <h2>A few things I have been working on.</h2>
        <div className="project-stack">
          <article>
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
              I was one of the first people they hired. I still work on it a
              lot, just not as my main job anymore.
            </p>
          </article>
          <article>
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
              I came up with this more than five years ago and never had a way
              to build it. I am doing the whole thing myself now.
            </p>
          </article>
          <article>
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
              A clearer look at GDP and income in US dollars, with a way to
              click into what each country actually produces.
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="markets">
        <p className="eyebrow">Markets</p>
        <h2>I watch stocks for fun. A lot of them.</h2>
        <p>
          I am an amateur investor. I spend a lot of time on business and the
          bigger economic picture, and I have gone through thousands of stocks
          listed in Canada and the US. I am not handing out tips. I just like
          knowing how companies and cycles actually work.
        </p>
      </section>

      <section className="section" id="languages">
        <p className="eyebrow">Languages</p>
        <h2>What I can speak, roughly.</h2>
        <div className="lang-list">
          {languages.map((lang) => (
            <div className="lang-bar" key={lang.name}>
              <strong>{lang.name}</strong>
              <div className="lang-track" aria-hidden="true">
                <div className="lang-fill" style={{ width: lang.width }} />
              </div>
              <span>{lang.level}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="life">
        <p className="eyebrow">Outside</p>
        <h2>I would rather be moving than sitting still.</h2>
        <p>
          Hockey, soccer, tennis, and a pile of other sports. I also like
          camping and wandering around somewhere new. If I am not at a desk I
          am probably outside.
        </p>
      </section>

      <section className="section map-section" id="travel">
        <p className="eyebrow">Travel</p>
        <h2>Places I have actually been.</h2>
        <p>
          Canada (4 provinces), USA (8 states), Mexico (4 provinces), Costa Rica,
          Colombia, Bolivia, Peru, Chile, Thailand, Japan, Italy, Malta, Greece,
          Germany, Austria, Switzerland, Belgium, Netherlands, and Australia.
        </p>
        <TravelMap />
      </section>

      <footer className="footer">
        <p>Chase Cedar</p>
        <a
          className="site-link"
          href="https://www.linkedin.com/in/chasecedar"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/chasecedar
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
          display: grid;
          grid-template-columns: minmax(220px, 360px) minmax(0, 1fr);
          gap: clamp(1.5rem, 4vw, 4rem);
          align-items: center;
          padding: clamp(1.5rem, 5vw, 4.5rem);
          max-width: 1120px;
          margin: 0 auto;
        }

        .hero-photo {
          width: min(100%, 360px);
          height: auto;
          aspect-ratio: 1;
          object-fit: cover;
          border-radius: 42% 58% 48% 52% / 42% 40% 60% 58%;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.35);
        }

        .brand {
          margin: 0 0 0.85rem;
          font-family: var(--font-display), serif;
          font-size: clamp(2.6rem, 7vw, 5.4rem);
          line-height: 0.92;
          letter-spacing: -0.04em;
          font-weight: 560;
        }

        .hero h1 {
          margin: 0;
          max-width: 14ch;
          font-family: var(--font-display), serif;
          font-size: clamp(1.55rem, 3.4vw, 2.45rem);
          line-height: 1.15;
          font-weight: 480;
        }

        .lede {
          margin: 1rem 0 0;
          max-width: 34ch;
          font-size: 1.08rem;
          line-height: 1.55;
          color: color-mix(in oklab, var(--foam) 82%, transparent);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.6rem;
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

        .map-section {
          max-width: 980px;
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
          .hero-inner {
            grid-template-columns: 1fr;
            padding-top: 3rem;
            padding-bottom: 3rem;
          }

          .hero-photo {
            width: min(68vw, 260px);
            justify-self: start;
          }

          .brand {
            font-size: clamp(2.4rem, 12vw, 4rem);
          }
        }
      `}</style>
    </main>
  );
}
