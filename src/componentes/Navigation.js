import React from 'react';
import { MobileNav } from "@material-tailwind/react";
import { ChevronDownIcon, HomeIcon, UserCircleIcon, CubeTransparentIcon, Bars3Icon, XMarkIcon, FlagIcon, ChatBubbleOvalLeftIcon, UsersIcon, FolderIcon, Square3Stack3DIcon, RocketLaunchIcon, FaceSmileIcon, PuzzlePieceIcon, GiftIcon } from "@heroicons/react/24/outline";
import { Collapse, List, ListItem, Menu, MenuHandler, MenuList, MenuItem, Chip, Navbar, Typography, Button, IconButton } from "@material-tailwind/react";
const image = require("../img/Group 1 (1).png");

// Resto del código...

const links = [
  {
    label: 'Home',
    icon: HomeIcon,
    route: '/',
  },
  {
    label: 'About',
    icon: UserCircleIcon,
    route: '/about',
  },
  {
    label: 'DC',
    icon: GiftIcon,
    route: '/DC',
  },
  {
    label: 'MARVEL',
    icon: UserCircleIcon,
    route: '/MARVEL',
  },
];
const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};
 
const navListMenuItems = [
  {
    color: "dark",
    icon: FlagIcon,
    title: "About us",
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "orange",
    icon: ChatBubbleOvalLeftIcon,
    title: "Press",
    description: "News and writings, press releases, and resources",
  },
  {
    color: "green",
    icon: UsersIcon,
    title: (
      <div className="flex items-center gap-1">
        Careers{" "}
        <Chip
          size="sm"
          color="green"
          variant="ghost"
          value="We're hiring!"
          className="capitalize"
        />
      </div>
    ),
    description: "We are always looking for talented people. Join us!",
  },
  {
    color: "blue-gray",
    icon: FolderIcon,
    title: "Accion",
    description: "All the stuff that we dan from legal made us add.",
  },
  {
    color: "purple",
    icon: RocketLaunchIcon,
    title: "Products",
    description: "Checkout our products that helps a startup running.",
  },
  {
    color: "teal",
    icon: FaceSmileIcon,
    title: "Icons",
    description: "Set of beautiful icons that you can use in your project.",
  },
  {
    color: "cyan",
    icon: PuzzlePieceIcon,
    title: "UI Kits",
    description: "High quality UI Kits helps you to 2x faster.",
  },
  {
    color: "pink",
    icon: GiftIcon,
    title: "Open Source",
    description: "List of all our open-source projects, it's all free.",
  },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
 
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" />
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
} 

export function Navigation() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleNavigation = (route) => {
    window.location.href = route;
  };

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {links.map(({ label, route, icon: Icon }) => (
        <li key={route}>
          <Typography
            as="div"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <a href={route} className="flex items-center">
              <Icon className="h-6 w-6" />
              {label}
            </a>
          </Typography>
        </li>
      ))}
      <li>
        <Typography as="div" variant="small" color="blue-gray" className="p-1 font-normal">
          <NavListMenu />
        </Typography>
      </li>
    </ul>
  );
  return (
    <header>
      <nav className="top-0 left-0 right-0  bg-Slate-600 bg-opacity-80 backdrop-blur-lg fixed">
        <ul className="flex">
          <>
            <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-transparent">
              <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                  as="a"
                  href="#"
                  className="mr-4 cursor-pointer py-1.5 font-medium"
                >
                  
                <img src={image} className='w-14'/>
                </Typography>
                <div className="flex items-center gap-4">
                  <div className="mr-4 hidden lg:block">{navList}</div>
                  <Button
                   variant="gradient"
                    size="sm"
                   className="hidden lg:inline-block bg-gradient-to-r from-blue-800 to-sky-900"
>
  <span>Buy Now</span>
</Button>

                  <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                  >
                    {openNav ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </IconButton>
                </div>
              </div>
              
              <MobileNav open={openNav}>
                {navList}
                <Button variant="gradient" size="sm" fullWidth className="mb-2">
                  <span>Buy Now</span>
                </Button>
              </MobileNav>
            </Navbar>
          </>
        </ul>
      </nav>
    </header>
  );
}
