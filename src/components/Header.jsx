import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export const Avatar = () => {
  return (
    <img src="images/avatar.png" className="w-10 h-10 mr-2 rounded-full " alt="alok's avatar" />
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "About", "Projects", "Experience", "Contact", "Blog", "Resume"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Avatar />
          <p className="font-bold text-inherit">AXJH03</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            {menuItems[0]}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
          {menuItems[1]}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
          {menuItems[2]}
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
          {menuItems[3]}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
          {menuItems[4]}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
          {menuItems[5]}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Resume</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

