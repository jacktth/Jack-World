import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { MutableRefObject } from "react";

export default function Layout(projectRef: MutableRefObject<HTMLDivElement | null>) {
  const collapseItems = ["Home", "About", "Education", "Projects", "Contact"];
  const scrollingToProject = () => {
    const element = projectRef;
    if(element.current)
    element.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start"
    })};
  return (
    <Navbar className="" isBordered variant="sticky" css={{backgroundColor: '$myDarkColor'}} >
      <Navbar.Brand>
        <Text className="font-bold text-2xl">Jack&apos;s World</Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="highlight-rounded"
        css={{
          jc: "center",
        }}
      >
        <Navbar.Link href="/home">Home</Navbar.Link>
        <Navbar.Link isActive href="#">
          About Me
        </Navbar.Link>
        <Navbar.Link onClick={scrollingToProject}>Projects</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>

      </Navbar.Content>
      <Navbar.Content></Navbar.Content>
      <Navbar.Toggle showIn="xs" />
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="secondary"
            // css={{
            //   color: index === collapseItems.length - 1 ? "$error" : "",
            // }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
