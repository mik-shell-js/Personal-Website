import Footer from "../components/Footer";
import NavigationMenu from "../components/NavigationMenu";

export default function Portfolio() {
    return (
      <>
        {/* <!-- Header Section --> */}
        <header>
            {/* Navigation Menu */}
            <NavigationMenu />
            <div className="content-heading">
                <h1>Portfolio</h1>
            </div>
        </header>

        {/* <!-- Portfolio Section with a heading --> */}
        <section id="projects">
            <div className="content-heading">
                <h2>Projects</h2>
            </div>
            {/* <!-- Project 1 --> */}
            <article>
                <div className="content-heading h3">
                    <h3>Inclusive App Design: XYZ Project</h3>
                </div>
                <div className="content-paragraph">
                    <p>
                        In the future, I plan to design an app that prioritizes accessibility for users with a wide range of abilities. My goal is to incorporate voice navigation, high-contrast visuals, and customizable user interfaces, ensuring that the app serves as a model for inclusive design. By working closely with disability advocates and conducting user testing, I aim to ensure that this app will meet the diverse needs of its users. This project will serve as an example of how technology can break down barriers and promote digital inclusion.
                    </p>
                </div>
                {/* <!-- Source: AI generated, Prompt: "A mockup of a mobile app interface with voice command options and high-contrast visuals, showcasing accessibility features for visually impaired users." --> */}
                <img src="images/inclusive_app_mockup.jpg" alt="Inclusive App Mockup"/>
            </article>
            <div className="section-bar"></div>

            {/* <!-- Project 2 --> */}
            <article>
                <div className="content-heading h3">
                    <h3>Data Analysis: Diversity Metrics in Tech Companies</h3>
                </div>
                <div className="content-paragraph">
                    <p>
                        I am eager to dive into data analysis projects that focus on examining diversity metrics across tech companies. My future work will involve analyzing key factors like gender representation, racial diversity, and inclusion efforts within large tech organizations. By visualizing this data through interactive dashboards, I hope to uncover insights that can drive meaningful change in hiring practices and workplace policies. This project will help raise awareness about the importance of diversity in the tech industry and inform strategies for improvement.
                    </p>
                </div>
                {/* <!-- Source: AI generated, Prompt: "A data dashboard with diversity metrics, featuring bar graphs and pie charts showing gender and racial representation in top tech companies." --> */}
                <img src="images/diversity_dashboard.jpg" alt="Diversity Metrics Dashboard"/>
            </article>
            <div className="section-bar"></div>

            {/* <!-- Project 3 --> */}
            <article>
                <div className="content-heading h3">
                    <h3>Game Design: Building Inclusive Virtual Worlds</h3>
                </div>
                <div className="content-paragraph">
                    <p>
                        Looking ahead, I plan to create a virtual world that emphasizes inclusivity and representation. This future project will involve designing a gaming experience where players of all backgrounds and abilities can feel represented and engaged. I intend to focus on creating accessible gameplay features, including customizable controls and visual elements that cater to a diverse audience. By collaborating with game developers and inclusive design experts, I hope to bring this vision of an inclusive virtual world to life.
                    </p>
                </div>
                {/* <!-- Source: AI generated, Prompt: "A vibrant virtual world scene with diverse characters, accessible gameplay features, and an inclusive environment." --> */}
                <img src="images/inclusive_virtual_world.jpg" alt="Inclusive Virtual World"/>
            </article>
        </section>

        <div className="section-bar"></div>

        {/* <!-- Footer Section --> */}
        <Footer />
      </>
    );
  }
