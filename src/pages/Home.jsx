export default function Home() {
  return (
    <>
          {/* <!-- Header Section --> */}
          <header>
              <div className="content-heading">
                  <h1>Michel Adelien</h1>
              </div>
              <p>Where Technology, Diversity, Equity, Inclusion, and Skateboarding Converge</p>
          </header>

          {/* <!-- Introduction Section --> */}
          <section id="intro">
              <div className="content-heading h2">
                  <h2>&quot;Shaping the Future of Tech: Where Diversity, Innovation, and Creativity Skate Together&quot;</h2>
              </div>
              <p>
                  Welcome to my personal space, where technology and my passion for skateboarding intersect with diversity, equity, and inclusion (DEI) in the tech industry. My name is Michel Adelien, and this platform reflects my experiences and insights as a tech enthusiast and advocate for inclusive practices.
              </p>
              <figure>
                  {/* <!-- Source: (original work) Michel Adelien --> */}
                  <img src="images/skatingpic.jpg" alt="Michel Adelien Skateboarding in the Air" width='400px' height='711px' />
                  <figcaption>Michel Adelien - Skating through Tech and DEI</figcaption>
              </figure>
              <p>
                  My mission is to share my journey through tech while pushing forward the conversation about why DEI is essential in our industry. Whether you&apos;re here to explore my blog posts on DEI, dive into my tech projects, or learn how my love for skateboarding influences my approach to design, I hope you leave with fresh insights.
              </p>
              <p>
                  Start by exploring my latest blog posts to stay informed on DEI and tech trends. Take a look at my portfolio to discover projects where I’ve integrated inclusive design principles. Lastly, don&apos;t miss the Skateboarding and UX Design section to see how my personal passions and hobby shapes my work.
              </p>
          </section>

          <div className="section-bar"></div>

          {/* <!-- Call to Action Section --> */}
          <section id="call-to-action">
              <div className="content-heading h2">
                  <h2>Let&apos;s Collaborate</h2>
              </div>
              <div className="content-paragraph">
                  <p>
                      Whether you&apos;re interested in tech, DEI, or design, I’m always looking for new opportunities to connect and collaborate
                  </p>
              </div>
              <a href="/contact" className="cta-button">Contact Me</a>
          </section>

          <div className="section-bar"></div>
    </>
  )
}
