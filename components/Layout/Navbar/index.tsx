"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { FiUser } from "react-icons/fi"

import Logo from "../Logo"

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#reviews", label: "Reviews" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
]

const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detect scroll and toggle the background color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="sticky top-0 z-40">
      <header
        className={`sticky top-0 z-40 w-[73%] mx-auto border-2 ${
          isScrolled
            ? "bg-gradient-to-br from-[#FF7A4D] via-[#FF9966] to-[#FFB383] text-[#FF4500] shadow-md"
            : "bg-white text-black"
        } py-[0.25rem] mt-[0.5rem] mb-[0.5rem] transition-all ease-in-out rounded-[0.5rem]`}
      >
        <div className="container flex h-14 items-center justify-between p-2 mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <Logo textColor={isScrolled ? "#FF4500" : "black"} />
            <span
              className={`ml-2 text-3xl font-bold ${
                isScrolled ? "text-[#FF4500]" : "text-black"
              } hidden sm:block`}
            >
              REDDKARMA
            </span>
          </div>

          {/* Menu Button */}
          <button
            className={`lg:hidden focus:outline-none ${
              isScrolled ? "text-[#FF4500]" : "text-black"
            }`}
            onClick={(e) => {
              e.stopPropagation()
              setIsMenuOpen(!isMenuOpen)
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          {/* Navigation Items */}
          <nav className="hidden lg:flex justify-between items-center space-x-4">
            {navItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={`flex w-full items-center text-base whitespace-nowrap p-1 ${
                  isScrolled ? "text-black" : "text-[#5D596C]"
                } hover:text-[#7367f0] active:text-[#7367f0] rounded-md`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Login Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/Login">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#FF4500] text-white rounded-lg hover:bg-red-300 text-sm mr-3">
                <div className="flex items-center justify-center h-5 w-5 bg-transparent">
                  <FiUser className="h-full w-full" />
                </div>
                <span className="flex items-center h-5 leading-none">
                  Login/Register
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="absolute top-full bg-white w-full shadow-md left-0 right-0 lg:hidden transition-all ease-in-out">
            <div className="flex flex-col items-start px-5 py-3 bg-gradient-to-br from-[#FF7A4D] via-[#FF9966] to-[#FFB383]">
              {navItems.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="flex w-full items-center p-2 hover:text-[#7367f0] active:text-[#7367f0] rounded-md"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex w-full flex-col items-center justify-center gap-4 mt-4">
                <Link href="/Login">
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#FF4500] text-white rounded-lg hover:bg-red-300 text-sm mr-3">
                    <div className="flex items-center justify-center h-5 w-5 bg-transparent">
                      <FiUser className="h-full w-full" />
                    </div>
                    <span className="flex items-center h-5 leading-none">
                      Login/Register
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </header>
    </div>
  )
}

export default MainNav
