import { Tabs, TabList, TabPanels, Item } from "@react-spectrum/tabs";
import { useNavigate } from "react-router-dom";

export default function NavigationMenu() {
  const navigate = useNavigate();

  return (
    <nav style={{ backgroundColor: "#0f172a", padding: "1rem" }}>
      <Tabs
        aria-label="Website Navigation"
        onSelectionChange={(key) => navigate(key)}
        orientation="horizontal"
        isQuiet
      >
        <TabList>
          <Item key="/">Home</Item>
          <Item key="/blog">Blog</Item>
          <Item key="/portfolio">Portfolio</Item>
          <Item key="/skating">Skateboarding</Item>
          <Item key="/contact">Contact</Item>
          <Item key="/about">About</Item>
        </TabList>
        <TabPanels>
          <Item key="/">
            <p>Welcome to the Home Page!</p>
          </Item>
          <Item key="/blog">
            <p>Read our latest Blog posts.</p>
          </Item>
          <Item key="/portfolio">
            <p>Explore the Portfolio.</p>
          </Item>
          <Item key="/skating">
            <p>Learn more about Skateboarding.</p>
          </Item>
          <Item key="/contact">
            <p>Get in touch with us through the Contact page.</p>
          </Item>
          <Item key="/about">
            <p>Discover more About us.</p>
          </Item>
        </TabPanels>
      </Tabs>
    </nav>
  );
}