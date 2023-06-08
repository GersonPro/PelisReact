import React, {useEffect, useState } from 'react';
import { MobileNav } from "@material-tailwind/react";
import { ChevronDownIcon, HomeIcon, UserCircleIcon, CubeTransparentIcon, Bars3Icon, XMarkIcon, FlagIcon, ChatBubbleOvalLeftIcon, UsersIcon, FolderIcon, Square3Stack3DIcon, RocketLaunchIcon, FaceSmileIcon, PuzzlePieceIcon, GiftIcon, FilmIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { Collapse, List, ListItem, Menu, MenuHandler, MenuList, MenuItem, Chip, Navbar, Typography, Button, IconButton } from "@material-tailwind/react";
import MovieSearch from './Busqueda';
const image = require("../img/Group 1 (1).png");
const dcImage = require("../img/dc-comics-logo-24x24.png");
const marvelImage = require("../img/marvel-comics-logo-48x20.png");


// Resto del código...

const links = [
  {
    label: 'Home',
    icon: HomeIcon,
    route: '/',
  },
  {
    label: 'Peliculas',
    icon: FilmIcon,
    route: '/about',
  },
  {
    label: 'Series',
    icon: ComputerDesktopIcon,
    route: '/about',
  },


];
const colors = {
  blue: "bg-gray-900 text-blue-500 rounded-full bg-opacity-50",
  orange: "bg-gray-900 text-orange-500 rounded-full bg-opacity-50",
  green: "bg-gray-900 rounded-full text-green-500 bg-opacity-50",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500 rounded-full bg-opacity-50" ,
  purple: "bg-gray-900 text-purple-500 rounded-full bg-opacity-50",
  teal: "bg-gray-900 text-teal-500 rounded-full bg-opacity-50 ",
  cyan: "bg-gray-900 text-cyan-500 rounded-full bg-opacity-50",
  pink: "bg-gray-900 text-pink-500 rounded-full bg-opacity-50",
};
 
const Categorias = [
  {
    color: "green",
    icon: FilmIcon,
    title: "Accion",
    description: "Learn about our story and our mission statement.",
    hover: "bg-gray-200",
    
  },
  {
    color: "blue",
    icon: FilmIcon,
    title: "Comedia",
    description: "News and writings, press releases, and resources",
  },
  {
    color: "purple",
    icon: FilmIcon,
    title: 'Tv Novelas',
    description: "We are always looking for talented people. Join us!",
  },
  {
    color: "cyan",
    icon: FilmIcon,
    title: "Series",
    description: "All the stuff that we dan from legal made us add.",
  },
  {
    color: "pink",
    icon: FilmIcon,
    title: "Estrenos",
    description: "Checkout our products that helps a startup running.",
  },
 
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
 
  const renderItems = Categorias.map(
    ({ icon, title, description, color, hover }, key) => (
      <a href="#" key={key}>
        <MenuItem className={`flex items-center gap-2 rounded-lg hover:bg-gray-800 p-2`}>
          <div className={`rounded-lg p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-5 w-5",
            })}
          </div>
          <div className=' m-2'>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-lg font-semibold text-gray-100" 
            >
              {title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal text text-left text-gray-100">
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
              Categories
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
        <MenuList className="hidden max-w-lx m-2 p-2 rounded-xl lg:block bg-gray-700 bg-opacity-80 backdrop-blur-md mt-4" >
          <ul className="grid grid-cols-2 gap-y-2 p-3">{renderItems}</ul>
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      const isMobile = window.matchMedia("(max-width: 720px)").matches;
      setIsMobile(isMobile);
    }

    // Agregar evento de escucha para cambios de tamaño de ventana
    window.addEventListener("resize", handleResize);

    // Comprobar el tamaño inicial de la ventana
    handleResize();

    // Limpiar el evento de escucha al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
       <li>
        <Typography>
        <a href="#" className="flex items-center">
             <img src={marvelImage}/>
            </a>
        </Typography>
      </li>
      <li>
        <Typography>
        <a href="#" className="flex items-center">
             <img src={dcImage}/>
            </a>
        </Typography>
      </li>
      <li>
        <Typography as="div" variant="small" color="blue-gray" className="p-1 font-normal">
          <NavListMenu />
        </Typography>
      </li>
      
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
   
     
    </ul>
  );
  return (
    <header>
    <nav className="top-0 left-0 right-0 m-3 shadow-2xl rounded-lg bg-gray-700 bg-opacity-80 backdrop-blur-md fixed text-gray-100 z-10">
     
      <ul className="flex">
        <>
            <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-transparent">
              <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                  as="a"
                  href="#"
                  className="mr-4 cursor-pointer py-1.5 font-medium"
                >
                  
                <img src={image} className='w-12'/>
                </Typography>
                <div className="flex items-center gap-4">
                  <div className="mr-4 hidden lg:block">{navList}</div>
                  <Button
                   variant="gradient"
                    size="sm"
                   className="hidden lg:inline-block bg-gradient-to-r from-blue-950 to-gray-950 text-gray-200  "
>
  <span>Gerson</span>
</Button>
 <MovieSearch/>
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
              {isMobile ? (
                <MobileNav open={openNav}>
                {navList}
                <Button variant="gradient" size="sm" fullWidth className="mb-2">
                  <span>Buy Now</span>
                </Button>
                
              </MobileNav>
              ) :  null}
            </Navbar>
          </>
        </ul>
      </nav>
    </header>
  );
}