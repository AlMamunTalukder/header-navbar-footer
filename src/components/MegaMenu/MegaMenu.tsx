/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import Image from "next/image"
import { BiMenu } from "react-icons/bi"
import { BookOpenIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import { ChevronRight, Percent } from "@mui/icons-material"
import Link from "next/link"


interface Department {
  name: string
  icon: string
  subcategories?: {
    [key: string]: string[]
  }
}

const departments: Department[] = [
  {
    name: "Fashion",
    icon: "👗",
    subcategories: {
      Women: [
        "Tops & Blouses",
        "Accessories",
        "Dresses & Skirts",
        "Shoes & Boots",
        "Jewellery",
        "Sweaters",
        "Heels & Sandals",
        "Jeans & Shorts",
      ],
      Men: ["Accessories", "Watch Fashion", "Tees, Knits & Polos", "Paints & Denim"],
      "Kids Fashion": ["Casual Shoes", "Spring & Autumn", "Winter Sneakers"],
    },
  },
  {
    name: "Electronics",
    icon: "📱",
    subcategories: {
      "Mobile & Tablets": ["Smartphones", "Tablets", "Mobile Accessories", "Cases & Covers"],
      Computers: ["Laptops", "Desktops", "Monitors", "Keyboards & Mouse"],
    },
  },
  {
    name: "Gifts",
    icon: "🎁",
    subcategories: {
      Occasions: ["Birthday Gifts", "Anniversary Gifts", "Wedding Gifts", "Holiday Gifts"],
      Recipients: ["For Him", "For Her", "For Kids", "For Couples"],
    },
  },
  { name: "Home & Garden", icon: "🏠" },
  { name: "Music", icon: "🎵" },
  { name: "Sports", icon: "⚽" },
]

const megamenuData = {
  ACCESSORIES: [
    "Cables & Adapters",
    "Electronic Cigarettes",
    "Batteries",
    "Chargers",
    "Home Electronic",
    "Bags & Cases",
  ],
  "AUDIO & VIDEO": ["Televisions", "TV Receivers", "Projectors", "Audio Amplifier", "TV Sticks"],
  "CAMERA & PHOTO": [
    "Digital Cameras",
    "Camcorders",
    "Camera Drones",
    "Action Cameras",
    "Photo Supplies",
    "Camera & Photo",
  ],
  LAPTOPS: [
    "Gaming Laptops",
    "Ultraslim Laptops",
    "Tablets",
    "Laptop Accessories",
    "Tablet Accessories",
    "Laptop Bags & Cases",
  ],
}

export default function Megamenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false)
  const [hoveredDepartment, setHoveredDepartment] = useState<Department | null>(null)

  const handleMouseEnterDepartments = () => {
    setIsDepartmentsOpen(true)
    setIsOpen(false)
  }

  const handleMouseEnterShop = () => {
    setIsOpen(true)
    setIsDepartmentsOpen(false)
  }

  const handleMouseLeave = () => {
    setIsOpen(false)
    setIsDepartmentsOpen(false)
    setHoveredDepartment(null)
  }

  return (
    <div className="relative">
      {/* Main Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left Section - All Departments */}
            <div className="flex items-center space-x-8">
              <div onMouseEnter={handleMouseEnterDepartments} className="relative">
                <button className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium">
                  <BiMenu className="w-5 h-5" />
                  <span>All Departments</span>
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${isDepartmentsOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              {/* Main Navigation Items */}
              <div className="hidden md:flex items-center space-x-8">
                <div onMouseEnter={handleMouseEnterShop} className="relative">
                  <button className="text-gray-700 hover:text-gray-900 font-medium">Shop</button>
                </div>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                  Products
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                  Features
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                  Blog
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                  Elements
                </a>
                <a href="#" className="text-red-600 hover:text-red-700 font-medium">
                  Buy Porto!
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                <Percent className="w-5 h-5" />
                <span className="font-medium">Special Offers</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                <BookOpenIcon className="w-5 h-5" />
                <span className="font-medium">Recipes</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Megamenu Dropdown */}
      {(isOpen || isDepartmentsOpen) && (
        <div
          className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg z-50"
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex">
              {/* Left Sidebar - Departments - Only show when departments is hovered */}
              {isDepartmentsOpen && (
                <div className="w-64 bg-gray-50 border-r border-gray-200">
                  <div className="p-4">
                    {departments.map((dept, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-3 px-2 hover:bg-gray-100 rounded cursor-pointer group"
                        onMouseEnter={() => setHoveredDepartment(dept.subcategories ? dept : null)}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{dept.icon}</span>
                          <span className="text-gray-700 group-hover:text-gray-900">{dept.name}</span>
                        </div>
                        {dept.subcategories && (
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Main Megamenu Content - Only show when Shop is hovered */}
              {isOpen && (
                <div className="flex-1 p-6">
                  <div className="grid grid-cols-6 gap-8">
                    {/* Product Categories - 4 columns */}
                    {Object.entries(megamenuData).map(([category, items], index) => (
                      <div key={index} className="space-y-4">
                        <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">{category}</h3>
                        <ul className="flex flex-col space-y-2">
                          {items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Promotional Banners - 2 columns */}
                    <div className="col-span-2 space-y-4">
                      {/* Watch Promotion */}
                      <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-4 relative overflow-hidden">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-2">
                              40%
                            </div>
                            <div className="text-red-500 text-sm line-through">$450</div>
                            <div className="text-2xl font-bold text-gray-900">$270</div>
                            <div className="text-gray-600 text-sm">Watches</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide">HURRY UP!</div>
                          </div>
                          <div className="w-20 h-20">
                            <Image
                              src="/images/watch-promo.png"
                              alt="Apple Watch"
                              width={80}
                              height={80}
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Electronics Promotion */}
                      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-4 text-white relative overflow-hidden">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-3xl font-bold mb-1">ELECTRONIC</div>
                            <div className="text-3xl font-bold mb-2">DEALS</div>
                            <div className="bg-white text-black px-3 py-1 rounded text-xs font-bold inline-block mb-2">
                              Exclusive COUPON
                            </div>
                            <div className="text-2xl font-bold">
                              $100 <span className="text-sm font-normal">OFF</span>
                            </div>
                          </div>
                          <div className="w-20 h-20">
                            <Image
                              src="/images/headphones-promo.png"
                              alt="Headphones"
                              width={80}
                              height={80}
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Show both when departments is open - departments sidebar + shop content */}
              {isDepartmentsOpen && hoveredDepartment && hoveredDepartment.subcategories && (
                <div className="flex-1 p-6">
                  <div className="grid grid-cols-3 gap-8">
                    {Object.entries(hoveredDepartment.subcategories).map(([category, items], index) => (
                      <div key={index} className="space-y-4">
                        <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">{category}</h3>
                        <ul className="flex flex-col space-y-2">
                          {items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link href="#" >
                              <p className="text-gray-600 hover:text-gray-900 hover:underline text-sm">
                                {item}
                                </p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Show placeholder when departments is open but no department is hovered */}
              {isDepartmentsOpen && !hoveredDepartment && !isOpen && (
                <div className="flex-1 p-6">
                  <div className="text-center text-gray-500">
                    <p>Hover over a department to view subcategories</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

