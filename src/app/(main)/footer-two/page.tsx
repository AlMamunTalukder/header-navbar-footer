"use client";

import Link from "next/link";
import logo from "../../../assets/img/dazzle.svg";
import {
  Facebook,
  Instagram,
  YouTube,
  Twitter,
  LinkedIn,
  LocationPin,
} from "@mui/icons-material";
import Image from "next/image";
import { LuFacebook } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-sm text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="space-y-4">
        <Image src={logo} alt="dazzle"/>
          {/* <h2 className="text-2xl font-bold text-white">dazzle™</h2> */}
          <button className="bg-[#e7d0b1] text-black px-4 py-2 rounded">
            <LocationPin/> Store Location
          </button>
          <div className="flex gap-2 text-black mt-2">
            <Link href="#"><LuFacebook className="size-8 bg-[#e7d0b1] rounded-md p-1"/></Link>
            <Link href="#"><Instagram sx={{ bgcolor: "#e7d0b1", padding: "5px", borderRadius: "4px", fontSize:'32px' }} /></Link>
            <Link href="#"><LinkedIn sx={{ bgcolor: "#e7d0b1", padding: "5px", borderRadius: "4px", fontSize:'32px' }} /></Link>
            <Link href="#"><YouTube sx={{ bgcolor: "#e7d0b1", padding: "5px", borderRadius: "4px", fontSize:'32px' }} /></Link>
          </div>
          <div className="mt-3 text-gray-300 space-y-1">
            <p className="text-[#e7d0b1]"><span className=" text-white"> Email:</span> admin@dazzle.com.bd</p>
            <p className="text-[#e7d0b1]"><span className="text-white">Phone:</span> 09638001122</p>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-3">COMPANY</h3>
          <ul className="flex flex-col space-y-2 text-gray-300">
            <li><Link href="#"><p className="text-gray-300 hover:text-gray-400">About Us</p></Link></li>
            <li><Link href="#"><p className="text-gray-300 hover:text-gray-400">Our Brands</p></Link></li>
            <li><Link href="#"><p className="text-gray-300 hover:text-gray-400">Blogs</p></Link></li>
            <li><Link href="#"><p className="text-gray-300 hover:text-gray-400">Press Coverage</p></Link></li>
            <li><Link href="#"><p className="text-gray-300 hover:text-gray-400">Order Tracking</p></Link></li>
            <li><Link href="#"><p className="text-gray-300 hover:text-gray-400">Trade In</p></Link></li>
          </ul>
        </div>

        {/* HELP CENTER */}
        <div>
          <h3 className="font-semibold mb-3">HELP CENTER</h3>
          <ul className="flex flex-col space-y-2 text-gray-300">
            <li><Link href="#"><p className="text-gray-300 hover:text-gray-400">FAQ</p></Link></li>
            <li><Link href="#"><p className="text-gray-300 hover:text-gray-400">Support Center</p></Link></li>
            <li><Link href="#"><p className="text-gray-300 hover:text-gray-400">Announcement</p></Link></li>
            <li><Link href="#"><p className="text-gray-300 hover:text-gray-400">Corporate</p></Link></li>
            <li><Link href="#"><p className="text-gray-300 hover:text-gray-400">Feedback</p></Link></li>
            <li><Link href="#"><p className="text-gray-300 hover:text-gray-400">Sitemap</p></Link></li>
          </ul>
        </div>

        {/* TERMS & CONDITIONS */}
        <div>
          <h3 className="font-semibold mb-3">TERMS & CONDITIONS</h3>
          <ul className="flex flex-col space-y-2 text-gray-300">
            <li><Link href="#"><p className="text-gray-300 hover:text-gray-400">Terms & Conditions</p></Link></li>
            <li><Link href="#"><p className="text-gray-300 hover:text-gray-400">Refund Policy</p></Link></li>
            <li><Link href="#"><p className="text-gray-300 hover:text-gray-400">Privacy Policy</p></Link></li>
            <li><Link href="#"><p className="text-gray-300 hover:text-gray-400">Warranty Policy</p></Link></li>
            <li><Link href="#"><p className="text-gray-300 hover:text-gray-400">Exchange Policy</p></Link></li>
            <li><Link href="#"><p className="text-gray-300 hover:text-gray-400">EMI Policy</p></Link></li>
            <li><Link href="#"><p className="text-gray-300 hover:text-gray-400">Others Policy</p></Link></li>
          </ul>
        </div>

        {/* STAY CONNECTED */}
        <div>
          <h3 className="font-semibold mb-3">STAY CONNECTED</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><p>Branch 1: Shop No. 021C & 021D, North Court, Block - B, 4th floor, Jamuna Future Park, Dhaka.</p></li>
            <li><p>Branch 2: Shop No 4A-022B, West Court, Level 4, Block A, Jamuna Future Park, Dhaka.</p></li>
            <li><p>Branch 3: Shop No - 414 & 429, 4th floor, finlay square, east nasirabad, chittagong.</p></li>
            <li><p>Branch 4: 464, 4th floor, Sanmar Ocean City, Nasirabad, Chittagong.</p></li>
            <li><p>Branch 5: Shop-88, 89 Level-6, Block D, Bashundhara City Shopping Mall, Dhaka.</p></li>
            <li><p>Branch 6: Shop No- A19 & A20, 4th Floor, Centre Point Shopping Mall, Beside Dhaka Airport, Dhaka Mymensingh Highway, Uttara, Dhaka.</p></li>
          </ul>
        </div>
      </div>

      <div className="bg-[#e7d0b1] text-black text-center py-4 text-xs">
        &copy; {new Date().getFullYear()} Thanks From Dazzle™ Ltd. | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
