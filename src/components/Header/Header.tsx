"use client";


import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from "@mui/material";
import logo from "../../assets/img/logo-v22.png";
import "./Header.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { KeyboardArrowDown, Search } from "@mui/icons-material";


const Header = () => {
  const [isClick, setIsClick] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const currentPath = usePathname();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Search for:", query);
  };

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };


  const closeSidebar = () => {
    setIsClick(false);
  };


  const toggleAccordion = (label: string) => {
    setActiveAccordion((prev) => (prev === label ? null : label));
  };


  const menuItems = [
    { href: "/", label: "হোম" },
    { href: "/about", label: "জেনারেল বই" },
    {
      href: "/services",
      label: "একাডেমিক ",
      // submenu: [
      //   { href: "/services/research", label: "Research & Development" },
      //   { href: "/services/development", label: "Sample Development" },
      //   { href: "/services/merchandising", label: "Merchandising" },
      //   { href: "/services/fab-sourcing", label: "Fabric Sourcing" },
      //   { href: "/services/production", label: "Production" },
      //   { href: "/services/qa-qc", label: "QA and QC" },
      // ],
    },
    { href: "/compliance", label: "আরবি বই" },
    { href: "/compliance", label: "বিষয়" },
    { href: "/compliance", label: "লেখক" },
    { href: "/compliance", label: "প্রকাশক" },
    { href: "/compliance", label: "বইমেলা - ২০২৫" },
    { href: "/compliance", label: "প্রি-অর্ডার" },
    { href: "/compliance", label: "লাইফস্টাইল" },
    {
      label: "স্টেশনারী",
      href: "/products",
      // submenu: [
      //   { href: "/products/woven", label: "Woven" },
      //   { href: "/products/knit", label: "Knit" },
      //   { href: "/products/sweater", label: "Sweater" },
      //   { href: "/products/homewear", label: "Homewear & Others" },
      // ],
    },
    // { href: "/contact", label: "Contact Us" },
  ];


  // const WishButton = () => (
  //   <Button
  //     variant="contained"
  //     className="w-full lg:w-auto mt-4 lg:mt-0 "
  //     onClick={closeSidebar}
  //     sx={{ background: 'white', color: 'black' }}
  //   >
  //     উইশ লিস্ট
  //   </Button>

  // );

  // const LoginButton = () => (
  //   <Button
  //     variant="contained"
  //     className="w-full lg:w-auto mt-4 lg:mt-0 "
  //     onClick={closeSidebar}
  //     sx={{ background: 'white', color: 'black' }}
  //   >
  //     লগইন / রেজিস্টার
  //   </Button>

  // );


  const navMenu = (
    <div className="">
      <ul className="flex flex-col lg:flex-row max-w-[1180px] mx-auto">
        {menuItems.map((item, index) => (
          <li key={index} className="relative group">
            {/* Large Screen Menu */}
            <div className="hidden lg:block ">
              <Link
                href={item.href || "#"}
                className={`flex items-center border-l border-gray-200 ${currentPath === item.href ? " bg-[#F23534]" : "hover:bg-red-500 "
                  }`}
                onClick={closeSidebar}
              >
                <p className="p-2">
                  {item.label}
                </p>
                {/* {item.submenu && (
                <KeyboardArrowDown
                  className="transform group-hover:rotate-180 transition-transform duration-200"
                  fontSize="small"
                />
              )} */}
              </Link>
              {/* {item.submenu && (
              <ul className="submenu absolute hidden group-hover:flex flex-col bg-gray-400 rounded shadow-lg p-2 min-w-[200px]">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      href={subItem.href}
                      className={`text-sm block py-2 px-3 hover:bg-gray-500 rounded transition-colors ${currentPath === subItem.href
                        ? "text-blue-500 font-bold"
                        : ""
                        }`}
                      onClick={closeSidebar}
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )} */}
            </div>
            {/* Small Screen Accordion */}
            <div className="lg:hidden">
              <Link
                href={item.href || "#"}
                className={`block py-2 px-4 hover:bg-gray-100 rounded ${currentPath === item.href ? "text-blue-500 font-bold" : ""
                  }`}
                onClick={closeSidebar}
              >
                {item.label}
              </Link>
              {/* {item.submenu ? (
              <Accordion
                disableGutters
                expanded={activeAccordion === item.label}
                onChange={() => toggleAccordion(item.label)}
                sx={{
                  boxShadow: "none",
                  backgroundColor: "transparent",
                  "&:before": {
                    display: "none"
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<MdKeyboardArrowDown />}
                  aria-controls={`panel-${index}-content`}
                  id={`panel-${index}-header`}
                  sx={{
                    "& .MuiAccordionSummary-expandIconWrapper": {
                      transform: activeAccordion === item.label ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    },
                  }}
                >
                  <Typography>{item.label}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ul className="flex flex-col">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="py-1">
                        <Link
                          href={subItem.href}
                          className={`text-sm block py-2 px-3 hover:bg-gray-100 rounded transition-colors ${currentPath === subItem.href
                            ? "text-blue-500 font-bold"
                            : ""
                            }`}
                          onClick={closeSidebar}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ) : (
              <Link
                href={item.href || "#"}
                className={`block py-2 px-4 hover:bg-gray-100 rounded ${currentPath === item.href ? "text-blue-500 font-bold" : ""
                  }`}
                onClick={closeSidebar}
              >
                {item.label}
              </Link>
            )} */}
            </div>
          </li>
        ))}
        {/* Login Button for Mobile */}
        <div className="flex items-center lg:hidden px-0">
          {/* <WishButton/>|<LoginButton /> */}
          <Link href={'#'}>
            উইশ লিস্ট </Link>
          |
          <Link href={'#'}>
            লগইন / রেজিস্টার
          </Link>
        </div>
      </ul>
    </div>
  );


  return (
    <div className="">
      <div className="h-full lg:h-32 z-10 py-3 lg:py-1  bg-white ">
        <div>
          <div className="w-full lg:h-20 flex items-center content-center justify-between gap-10 px-5 lg:px-0 bg-white max-w-[1180px] mx-auto">
            <Image
              src={logo}
              className="h-auto w-[100px] lg:w-[140px]"
              alt="logo"
            />
            <div className="hidden lg:flex w-full max-w-xl mx-auto ">
              <input
                type="text"
                placeholder="বইয়ের নাম ও লেখক দিয়ে অনুসন্ধান করুন"
                className="flex-1 px-4 py-2 border border-orange-500 rounded-l-md focus:outline-none focus:ring-1 focus:ring-orange-300"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                onClick={handleSearch}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 flex items-center justify-center rounded-r-md"
              >
                <Search />
              </button>
            </div>
            {/* Login Button for Desktop */}
            <div className="hidden lg:flex gap-1 lg:items-center ">
              <Link href="/" >
                <p className="hover:underline">
                  উইশ লিস্ট
                </p>
              </Link>
              <span>|</span>
              <Link href="/">
                <p className="hover:underline">লগইন / রেজিস্টার    </p>
              </Link>
            </div>
            <div className="lg:hidden px-2">
              <button className="p-1" onClick={toggleNavbar}>
                {isClick ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
          <div className='flex lg:hidden my-5 mx-4 '>
            <input
              type="text"
              placeholder="বইয়ের নাম ও লেখক দিয়ে অনুসন্ধান করুন"
              className="flex-1 px-4 py-2 border border-orange-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-300"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 flex items-center justify-center rounded-r-md"
            >
              <Search />
            </button>
          </div>
        </div>

        <div className="w-full border-gray-200 border-y shadow-md">
          <div className="hidden lg:flex  max-w-[1180px] mx-auto">{navMenu}</div>
        </div>
        {isClick && (
          <div className="lg:hidden absolute left-0 w-full bg-white text-black z-50 shadow-md pb-1 mt-[12px] min-h-screen pl-5 pt-5">
            {navMenu}
          </div>
        )}
      </div>
    </div>
  );
};


export default Header;
