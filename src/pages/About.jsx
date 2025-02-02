export default function About() {
  return (
    <>
        {/* Header Section */}
        <header>
          <div className="content-heading">
            <h1>About</h1>
          </div>
          <p>Michel Adelien - Bridging Tech, DEI, and Skate Culture</p>
        </header>
        {/* About Section */}
        <section id="about">
          <div className="content-heading h2">
            <h2>Meet Michel Adelien</h2>
          </div>
          <div className="content-paragraph">
            <p>
              I am Michel Adelien, a Posse Scholar and a full-time student at Cornell
              University, majoring in Information Science with concentrations in UI/UX
              Design and Data Science and Analytics, alongside a minor in Game Design.
              My passion lies at the intersection of technology, inclusivity, and
              creativity, ensuring that emerging technologies foster an equitable
              digital world. My journey started in high school, where I saw firsthand
              how tech could drive social change, and since then, I have committed to
              making the field more diverse, inclusive, and innovative.
            </p>
            <p>
              Raised in Chicago with roots in Haiti, I bring a unique cultural
              perspective that fuels my advocacy for DEI in the tech industry. I am an
              active member of ColorStack and a strong advocate for ensuring that
              marginalized voices have a place in technology. Beyond academics and
              activism, I enjoy skateboarding, which deeply influences my approach to
              design and problem-solving. The creativity, adaptability, and resilience
              required in skateboarding reflect my philosophy in tech—breaking
              barriers and redefining possibilities.
            </p>
          </div>
        </section>
        <div className="section-bar" />
        {/* About the Website Section */}
        <section id="about-website">
          <div className="content-heading h2">
            <h2>Why This Website Exists</h2>
          </div>
          <div className="content-paragraph">
            <p>
              This platform was created to serve as a convergence of my
              passions—technology, DEI advocacy, and skateboarding culture. Here, I
              share my insights, research, and projects aimed at fostering a more
              inclusive tech industry. Through blog posts, portfolio showcases, and
              tech-related discussions, I hope to inspire, educate, and connect with
              others who share similar values and interests.
            </p>
            <p>
              The website also functions as a personal portfolio, highlighting my work
              in UI/UX design, data analytics, and game design, while also offering a
              unique space to explore the parallels between skateboarding and
              technology. By weaving together these elements, I strive to build a
              digital environment that is as dynamic and boundary-pushing as the
              fields I am passionate about.
            </p>
          </div>
        </section>
        <div className="section-bar" />
    </>
  );
}
