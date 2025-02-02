export default function Blog() {
    return (
      <>
        {/* Header Section */}
        <header>
            <div className="content-heading">
            <h1>DEI and Tech Blog</h1>
            </div>
        </header>
        {/* Blog Section with a heading */}
        <section id="blog-posts">
            <div className="content-heading h2">
            <h2>Blog Posts</h2>
            </div>
            {/* Blog Post 1 */}
            <article>
            <div className="content-heading h3">
                <h3>The Importance of DEI in Emerging Technologies</h3>
            </div>
            <div className="content-paragraph">
                <p>
                In an increasingly interconnected world, diversity in technology is
                not just a moral imperative but a critical driver of innovation.
                Emerging technologies like artificial intelligence (AI) and machine
                learning (ML) have the potential to reshape industries, but without
                diverse voices, we risk building tools that reinforce existing biases.
                This post explores how companies can foster inclusion and why it&apos;s
                crucial to build diverse teams that reflect the realities of our
                world. By creating spaces where underrepresented groups can thrive, we
                can ensure that the future of tech benefits everyone.
                </p>
            </div>
            {/* Source: AI generated, Prompt: "A diverse group of tech professionals working together, with futuristic AI and ML technology visuals in the background, emphasizing innovation and collaboration." */}
            <img src="images/ai_collaboration.jpg" alt="AI Collaboration" />
            </article>
            <div className="section-bar" />
            <div>
            {/* Source: The Equality in Tech Report/Dice, Image URL: "https://www.weforum.org/agenda/2021/04/gender-race-discrimination-tech-industry-charts/" */}
            <figure>
                <img src="images/deiblogcontentpic.png" alt="AI Collaboration" />
                <figcaption>
                These pie charts highlight gender-based workplace discrimination,
                showing that 57% of women and 10% of men reported experiencing
                discrimination. Data is from the Equality in Tech Report by Dice.
                </figcaption>
            </figure>
            <div className="content-paragraph">
                <p>
                Despite increasing efforts to promote diversity, women and racial
                minorities still face significant challenges in the tech industry. A
                recent study reveals that 57% of women in tech report gender
                discrimination, while Black technologists experience the highest
                levels of racial bias at 48%. These disparities extend to pay and
                career satisfaction, with minorities being less likely to negotiate
                salaries and feeling less satisfied with their roles. Addressing these
                issues is critical to fostering an inclusive tech culture, where
                diversity drives innovation and equity.
                </p>
            </div>
            </div>
            <div className="section-bar" />
            {/* Blog Post 2 */}
            <article>
            <div className="content-heading h3">
                <h3>How Skateboarding Helps Me Understand UX Design</h3>
            </div>
            <div className="content-paragraph">
                <p>
                Skateboarding has taught me lessons about balance, flow, and
                creativity, all of which directly influence my approach to user
                experience (UX) design. Just like skateboarding, UX design requires
                understanding the dynamic interplay between elements and how users
                will interact with them. In this post, I dive into specific ways
                skateboarding shapes my design process, from finding creative
                solutions to obstacles, to building seamless flows that feel
                intuitive. I also share examples of how this hobby influences some of
                my recent design projects.
                </p>
            </div>
            {/* Source: AI generated, Prompt: "A dynamic image of a skateboarder performing tricks with UX wireframes and a laptop in the background, symbolizing creativity and tech." */}
            <img src="images/skate_ux.jpg" alt="Skateboarding and UX Design" />
            </article>
            <div className="section-bar" />
            <div>
            {/* Source: AppMaster, Image URL: "https://appmaster.io/blog/mobile-app-accessibility-designing-for-inclusivity" */}
            <figure>
                <img
                src="images/mobileappinterfacecontentpic.png"
                alt="AI Collaboration"
                />
                <figcaption>
                This infographic showcases essential questions and best practices for
                designing accessible mobile apps, focusing on screen sizes, standards,
                and testing strategies to improve user experience for all,
                particularly for those with disabilities.
                </figcaption>
            </figure>
            <div className="content-paragraph">
                <p>
                As the future of mobile app accessibility continues to evolve,
                innovations such as AI-powered voice recognition, gesture-based
                interfaces, and wearable tech integration are expanding inclusivity
                possibilities. These advancements align with the goals of your
                Inclusive App Design Mockup, which emphasizes making technology more
                accessible for all users. By incorporating features like voice
                commands and high-contrast designs, your app design can stay ahead of
                accessibility trends, ensuring that it meets the diverse needs of
                users in a rapidly changing tech landscape.
                </p>
            </div>
            </div>
            <div className="section-bar" />
            {/* Blog Post 3 */}
            <article>
            <div className="content-heading h3">
                <h3>Inclusive User Interfaces: Designing for Everyone</h3>
            </div>
            <div className="content-paragraph">
                <p>
                Designing inclusive user interfaces (UIs) isn&apos;t just about
                accessibility—it&apos;s about creating experiences that consider the wide
                range of users from all backgrounds and abilities. In this post, I
                provide a comprehensive guide to building UIs that don&apos;t just meet
                minimum requirements but go above and beyond to create an enjoyable
                experience for all users. I&apos;ll discuss best practices for color
                contrast, typography, and user testing, while sharing examples of
                projects where inclusivity was at the forefront.
                </p>
            </div>
            {/* Source: AI generated, Prompt: "A modern user interface mockup with high contrast and accessible design elements, showcasing inclusivity for all users." */}
            <img src="images/ui_mockup.jpg" alt="Inclusive UI Mockup" />
            </article>
            <div className="section-bar" />
            <div>
            {/* Source: Jesse James Garrett, Image URL: "http://www.jjg.net/ia/" */}
            <figure>
                <img
                src="images/uxdesignskatingcontentpic.png"
                alt="AI Collaboration"
                />
                <figcaption>
                This diagram, designed by Jesse James Garrett, breaks down the core
                components of user experience (UX) design, illustrating the
                relationships between visual, interaction, and information design, as
                well as user needs and content requirements, across different stages
                of a project.
                </figcaption>
            </figure>
            <div className="content-paragraph">
                <p>
                User-centered design is an iterative process that focuses on
                understanding users&apos; needs by continuously testing and refining
                solutions. This method mirrors how skateboarding has influenced my
                approach to UX design—just as a skateboarder adjusts to obstacles, I
                fine-tune my designs to ensure they meet the needs of users. By
                emphasizing empathy and feedback, I create interfaces that are both
                functional and enjoyable. This approach helps me foster a deep
                connection between creativity and technical precision, ensuring that
                every user interaction is seamless and intuitive, much like the flow
                of a skateboarding trick.
                </p>
            </div>
            </div>
        </section>
        <div className="section-bar" />
      </>
    );
  }
