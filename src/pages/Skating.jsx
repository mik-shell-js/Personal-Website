export default function Skating() {
    return (
      <>
          {/* Header Section */}
          <header>
            <div className="content-heading">
              <h1>Skateboarding &amp; Tech</h1>
            </div>
          </header>
          {/* Skating Content Section with a heading */}
          <section id="skating-content" className="content-wrapper">
            <div className="content-heading h2">
              <h2>Skateboarding &amp; UX Insights</h2>
            </div>
            {/* Article 1 */}
            <article>
              <div className="content-heading h3">
                <h3>Finding Balance in Design</h3>
              </div>
              <div className="content-paragraph">
                <p>
                  Skateboarding is more than just a hobby—it&apos;s a mindset that has shaped
                  my approach to design. The balance and flow required in skateboarding
                  are the same principles I apply when designing user interfaces. I
                  often draw parallels between navigating obstacles on a board and
                  overcoming design challenges in my work. In this section, I explore
                  how skateboarding helps me build interfaces that feel intuitive,
                  balanced, and natural, much like a well-executed trick on a
                  skateboard.
                </p>
              </div>
              {/* Source: AI generated, Prompt: "A skateboarder balancing on a ledge, with UX wireframes and design elements subtly blended into the background, representing balance and design flow." */}
              <img src="images/balance_skateboard.jpg" alt="Balance and Design Flow" />
            </article>
            {/* Article 2 */}
            <article>
              <div className="content-heading h3">
                <h3>Creativity on Wheels: How Skateboarding Fuels Innovation</h3>
              </div>
              <div className="content-paragraph">
                <p>
                  Skateboarding forces you to think outside the box, whether it&apos;s
                  figuring out how to land a new trick or finding a creative path
                  through an urban environment. This creativity has fueled my innovation
                  in tech, allowing me to think beyond conventional solutions when
                  tackling design problems. In this section, I share examples of how the
                  unpredictability and challenges of skateboarding have inspired
                  breakthrough ideas in my tech projects. I think skating teaches
                  persistence and promotes a good sense of risk assessment and risk
                  management. All skills that I think help us to reach good design!
                </p>
              </div>
              {/* Source: AI generated, Prompt: "A skateboarder riding through a futuristic cityscape, with digital code, design sketches, and tech-inspired elements surrounding the environment." */}
              <img
                src="images/creativity_on_wheels.jpg"
                alt="Creativity and Skateboarding in Tech"
              />
            </article>
          </section>
          <div className="section-bar" />
      </>
    );
  }
