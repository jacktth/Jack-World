import {
  Navbar,
  Link,
  Text,
  Avatar,
  Dropdown,
  NavbarProps,
} from "@nextui-org/react";
import { MutableRefObject, useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";

type homeLayoutProp = {
  projectRef: MutableRefObject<HTMLDivElement | null>;
  techStackField: MutableRefObject<HTMLDivElement | null>;
  contactField: MutableRefObject<HTMLDivElement | null>;
  welcomeField: MutableRefObject<HTMLDivElement | null>;
};

export default function Layout(prop: homeLayoutProp) {
  const toggleButton = useRef<HTMLButtonElement>(null);
  const scrollingToWelcome = () => {
    const element = prop.welcomeField;
    if (element.current)
      element.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
  };
  const scrollingToTechStack = () => {
    const element = prop.techStackField;
    if (element.current)
      element.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
  };
  const scrollingToProject = () => {
    const element = prop.projectRef;
    if (element.current)
      element.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
  };

  const scrollingToContact = () => {
    const element = prop.contactField;
    if (element.current)
      element.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
  };
  const collapseItems = [
    { title: "Welcome", scrollFn: scrollingToWelcome },
    { title: "My Tech Stack", scrollFn: scrollingToTechStack },
    { title: "Project", scrollFn: scrollingToProject },
    { title: "Contact", scrollFn: scrollingToContact },
  ];

  return (
    <Navbar
      shouldHideOnScroll
      className=""
      isBordered
      variant="sticky"
      css={{ backgroundColor: "$myDarkColor" }}
    >
      <Navbar.Brand>
        <Text className="font-bold text-2xl">Jack&apos;s World</Text>
      </Navbar.Brand>
      <Navbar.Content
        className="xm:hidden"
        enableCursorHighlight
        activeColor="secondary"
        variant="highlight-rounded"
        css={{
          jc: "center",
        }}
      >
        <Navbar.Link onClick={scrollingToWelcome}>Welcome</Navbar.Link>
        <Navbar.Link onClick={scrollingToTechStack} isActive>
          My Tech Stack
        </Navbar.Link>
        <Navbar.Link onClick={scrollingToProject}>Projects</Navbar.Link>
        <Navbar.Link onClick={scrollingToContact}>Contact</Navbar.Link>
      </Navbar.Content>

      <Navbar.Content></Navbar.Content>
      <div className="sm:hidden">
        <Dropdown>
          <Dropdown.Trigger>
            <Avatar bordered size="lg" as="button" icon={<AiOutlineMenu />} />
          </Dropdown.Trigger>
          <Dropdown.Menu aria-label="Dynamic Actions">
          <Dropdown.Item key="Welcome">
              <Link onClick={scrollingToWelcome}>Welcome</Link>
            </Dropdown.Item>
            <Dropdown.Item key="Projects">
              <Link onClick={scrollingToTechStack}>My Tech Stack</Link>
            </Dropdown.Item>
            <Dropdown.Item key="Projects">
              <Link onClick={scrollingToProject}>Projects</Link>
            </Dropdown.Item>
            <Dropdown.Item key="Contact">
              <Link onClick={scrollingToContact}>Contact</Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* <Navbar.Toggle showIn="xs" ref={toggleButton} />
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item.title}
            activeColor="secondary"
            // css={{
            //   color: index === collapseItems.length - 1 ? "$error" : "",
            // }}
            isActive={index === 2}
          >
            <Link
              onClick={(e) => {
                // toggleButton.current?.click()

                item.scrollFn();
              }}
              color="inherit"
              css={{
                minWidth: "100%",
              }}
            >
              {item.title}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse> */}
    </Navbar>
  );
}
