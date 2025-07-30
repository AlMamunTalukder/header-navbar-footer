"use client";

import Link from "next/link";
import { Facebook, Instagram, LinkedIn, YouTube, Room, Send, Email } from "@mui/icons-material";
import Image from "next/image";
import payment from "../../../assets/img/payment__logos.webp";

const Footer = () => {
  return (
    <footer className="bg-[#0E1726] text-white text-sm mt-10">
      {/* Newsletter */}
      <div className="border-b border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-6 ">
        <div className="flex items-center gap-4">
          <div className="bg-white p-3 rounded-md">
            <Email className="text-[#FF5722]" />
          </div>
          <div>
            <p className="text-[#FF5722] font-semibold text-2xl">Subscribe To Our Newsletter</p>
            <p className="text-gray-300 text-base">Get all the latest information on Events, Sales and Offers.</p>
          </div>
        </div>
        <div className="flex mt-4 md:mt-0">
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 rounded-l-md text-black w-[420px] bg-white"
          />
          <button className="bg-[#FF5722] p-4 rounded-r-md">
            <Send className="text-white" />
          </button>
        </div>
      </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-10 py-8">
        <div>
          <h4 className="text-[#FF5722] font-semibold mb-4 text-xl">ABOUT US</h4>
          <ul className="flex flex-col space-y-2">
            <li><Link href="#"><p className="text-white">Regarding Us</p></Link></li>
            <li><Link href="#"><p className="text-white">Terms and Conditions</p></Link></li>
            <li><Link href="#"><p className="text-white">Track My Order</p></Link></li>
            <li><Link href="#"><p className="text-white">Career</p></Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#FF5722] font-semibold mb-4 text-xl">POLICY</h4>
          <ul className="flex flex-col space-y-2">
            <li><Link href="#"><p className="text-white">Delivery Policy</p></Link></li>
            <li><Link href="#"><p className="text-white">Point Policy</p></Link></li>
            <li><Link href="#"><p className="text-white">Return Policy</p></Link></li>
            <li><Link href="#"><p className="text-white">Refund Policy</p></Link></li>
            <li><Link href="#"><p className="text-white">Cancellation Policy</p></Link></li>
            <li><Link href="#"><p className="text-white">Privacy Policy</p></Link></li>
            <li><Link href="#"><p className="text-white">Warranty Policy</p></Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#FF5722] font-semibold mb-4 text-xl">HELP</h4>
          <ul className="flex flex-col space-y-2">
            <li><Link href="#"><p className="text-white">Contact Us</p></Link></li>
            <li><Link href="#"><p className="text-white">Exchange</p></Link></li>
            <li><Link href="#"><p className="text-white">Announcement</p></Link></li>
            <li><Link href="#"><p className="text-white">Emi Charge</p></Link></li>
            <li><Link href="#"><p className="text-white">Bank Transfer</p></Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#FF5722] font-semibold mb-4 text-xl">STAY CONNECTED</h4>
          <p className="mb-2">My Tech Ltd.</p>
          <p className="mb-2">contact@mytech.com</p>
          <p className="mb-4">01234-123456</p>

          <div className="flex items-center gap-4 mb-4">
            <Facebook className="cursor-pointer" />
            <Instagram className="cursor-pointer" />
            <LinkedIn className="cursor-pointer" />
            <YouTube className="cursor-pointer" />
          </div>

          <button className="flex items-center gap-2 px-3 py-2 border border-[#FF5722] rounded-md text-[#FF5722]">
            <Room fontSize="small" />
            <span>Store Location</span>
          </button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
      <div className="container mx-auto px-4 md:px-10 py-4 flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} My Tech All rights reserved</p>
        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <Image src={payment} alt="Visa" className="h-6 w-[180px]" />
        
        </div>
        <div className="mt-2 md:mt-0">
          <Link href="#top">
            <p className="flex items-center gap-1 text-[#FF5722] font-semibold cursor-pointer">
              SCROLL TO TOP <span className="text-xl">⬆️</span>
            </p>
          </Link>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
