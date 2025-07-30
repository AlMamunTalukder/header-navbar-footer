import { Facebook, Instagram, LinkedIn, LocationPin, Mail, Phone, Twitter, YouTube } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import img from "../../assets/img/googleplay.png";
import logo_bangla from "../../assets/img/wafi-bangla-logo.png";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-100 text-sm pt-10 pb-5 px-4 md:px-10">
            <div className="max-w-[1180px] mx-auto grid md:grid-cols-4 gap-10">
                {/* Column 1 - Logo & Description */}
                <div>
                    <Image src={logo_bangla} alt="Logo" width={200} height={80} />
                    <p className="mt-4 leading-6">
                        Wafilife is a leading book shop in Bangladesh. We offer thousands
                        of Islamic, general and academic books at a discounted price. We
                        provide good packaging with low shipping cost all over the
                        Bangladesh.
                    </p>
                    <p className="mt-4 font-bold text-white">অ্যাপ ডাউনলোড করুন</p>
                    <Link href="https://play.google.com/store">
                        <Image
                            src={img}
                            alt="Google Play"
                            width={180}
                            height={80}
                            className="mt-2"
                        />
                    </Link>
                </div>

                {/* Column 2 - Important Links */}
                <div>
                    <h3 className="text-white font-bold mb-3">প্রয়োজনীয় লিংক</h3>
                    <ul className="flex flex-col space-y-2">
                        <li><Link href="#" >
                            <p className="hover:underline text-[#999999] hover:text-white">যোগাযোগ করুন</p>
                        </Link></li>
                        <li><Link href="#" >
                            <p className="hover:underline text-[#999999] hover:text-white">ব্লগ</p>
                        </Link></li>
                        <li><Link href="#" >
                            <p className="hover:underline text-[#999999] hover:text-white">শপিং ব্যাগ</p>
                        </Link></li>
                        <li><Link href="#" ><p className="hover:underline text-[#999999] hover:text-white">প্রশ্নোত্তর</p></Link></li>
                        <li><Link href="#" ><p className="hover:underline text-[#999999] hover:text-white">কিভাবে অর্ডার করবেন ?</p></Link></li>
                        <li><Link href="#" ><p className="hover:underline text-[#999999] hover:text-white">শর্তাবলী</p></Link></li>
                        <li><Link href="#" ><p className="hover:underline text-[#999999] hover:text-white">রিটার্ন নীতিমালা</p></Link></li>
                        <li><Link href="#" ><p className="hover:underline text-[#999999] hover:text-white">প্রাইভেসি পলিসি</p></Link></li>
                    </ul>
                </div>

                {/* Column 3 - Popular */}
                <div>
                    <h3 className="text-white font-bold mb-3">জনপ্রিয়</h3>
                    <ul className="flex flex-col space-y-2">
                        <li><Link href="#" ><p className="hover:underline text-[#999999] hover:text-white">আপনার পছন্দের তালিকা</p></Link></li>
                        <li><Link href="#" ><p className="hover:underline text-[#999999] hover:text-white">জেনারেল ও একাডেমিক বই</p></Link></li>
                        <li><Link href="#" ><p className="hover:underline text-[#999999] hover:text-white">ড. খোন্দকার আব্দুল্লাহ জাহাঙ্গীর এর বই</p></Link></li>
                        <li><Link href="#" ><p className="hover:underline text-[#999999] hover:text-white">আরিফ আজাদ এর বই</p></Link></li>
                        <li><Link href="#" ><p className="hover:underline text-[#999999] hover:text-white">পি-আরডি</p></Link></li>
                        <li><Link href="#" ><p className="hover:underline text-[#999999] hover:text-white">গ্যাজেট</p></Link></li>
                        <li><Link href="#" ><p className="hover:underline text-[#999999] hover:text-white">ইলেকট্রনিক্স</p></Link></li>
                    </ul>
                </div>

                {/* Column 4 - Contact */}
                <div>
                    <h3 className="text-white font-bold mb-3">যোগাযোগ</h3>
                    <p className="flex items-start gap-2 mb-2">
                        <LocationPin />
                        Head Office: <br />
                        House 310, Road 21<br />
                        Mohakhali DOHS, Dhaka-1206
                    </p>
                    <p className="flex items-center gap-2 mb-2">
                        <Phone /> 096-7877-1365
                    </p>
                    <p className="flex items-center gap-2 mb-4">
                        <Mail /> sales@wafilife.com
                    </p>
                    <div className="flex gap-3">
                        <Link href="#" aria-label="Facebook">
                            <span className="text-white hover:text-[#1877F2]"><Facebook /></span>
                        </Link>
                        <Link href="#" aria-label="Instagram">
                            <span className="text-white hover:text-[#E4405F]"><Instagram /></span>
                        </Link>
                        <Link href="#" aria-label="YouTube">
                            <span className="text-white hover:text-[#FF0000]">
                                <YouTube />
                            </span>
                        </Link>
                        <Link href="#" aria-label="Twitter">
                            <span className="text-white hover:text-[#1DA1F2]">
                                <Twitter />
                            </span>
                        </Link>
                        <Link href="#" aria-label="LinkedIn">
                            <span className="text-white hover:text-[#0077B5]">
                                <LinkedIn />
                            </span>
                        </Link>
                    </div>

                </div>
            </div>

            {/* Bottom Line */}
            <div className="mt-10 text-center border-t border-gray-700 pt-5 text-xs text-gray-400">
                Copyright © 2025 Wafilife.com
            </div>
        </footer>
    );
};

export default Footer;
