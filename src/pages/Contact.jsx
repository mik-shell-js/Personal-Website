export default function Contact() {
  return (
    <>
        {/* <!-- Header Section --> */}
        <header>
            <div className="content-heading">
                <h1>Contact Me</h1>
            </div>
        </header>

        {/* <!-- Contact Information Section with a heading --> */}
        <section id="contact-info">
            <div className="content-heading h2">
                <h2>Get in Touch</h2>
            </div>
            <div className="content-paragraph">
                <p>
                    Feel free to reach out if you’d like to connect about tech, DEI, or skateboarding. I&apos;m always open to collaborating, discussing projects, or simply sharing insights into creating a more inclusive tech community. You can contact me via email or connect with me on LinkedIn.
                </p>
            </div>
            <div className="content-paragraph">
                <p>Email: <a href="mailto:mha57@cornell.edu">mha57@cornell.edu</a></p>
            </div>
            <div className="content-paragraph">
                <p>LinkedIn: <a href="https://www.linkedin.com/in/michel-adelien/" title = "Michel's LinkedIn" target="_blank">Michel&apos;s LinkedIn Profile</a></p>
            </div>
            <div className="content-paragraph">
                <p>GitHub: <a href="https://github.com/mik-shell-js" title = "Michel's GitHub" target = "_blank">Michel&apos;s GitHub</a></p>
            </div>
            {/* <!-- Source: AI generated, Prompt: "A clean, modern tech-themed contact section with icons for email, LinkedIn, and GitHub, all in a minimalistic design." --> */}
            <img src="images/contact_icons.jpg" alt="Contact Icons"/>
        </section>

        <div className="section-bar"></div>
    </>
  );
}
