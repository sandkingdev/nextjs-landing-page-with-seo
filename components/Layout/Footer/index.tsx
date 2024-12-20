import Link from "next/link"
import { TbBrandTelegram } from "react-icons/tb"

import { footerContent } from "@/lib/content"

import Container from "../../Container"
import Logo from "../Logo"
import FooterSection from "./footer-list"

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-tl-[60px] rounded-tr-[60px]   text-white pt-16">
      <div className={`container mx-auto px-7 sm:px-10 lg:px-10 relative  `}>
        <div className="flex flex-col items-center gap-4 py-10 ">
          <footer className="w-full">
            <div className="w-full mx-auto px-4 py-10">
              <div className="sm:flex sm:justify-between">
                <div className="mb-6 sm:mb-0">
                  <Logo textColor="white" />
                  <p className="text-gray-400 mt-4">
                    The ultimate deeplink technology for top Instagram
                    conversion.
                  </p>
                  <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-full flex items-center space-x-2">
                    <TbBrandTelegram />
                    <span>Telegram News</span>
                  </button>
                </div>
                <div className="flex flex-col space-y-2">
                  <h2 className="text-lg font-semibold">Explore</h2>
                  <Link
                    href="#welcome"
                    className="text-gray-400 hover:text-white"
                  >
                    Welcome
                  </Link>
                  <Link
                    href="#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </Link>
                  <Link
                    href="#reviews"
                    className="text-gray-400 hover:text-white"
                  >
                    Reviews
                  </Link>
                  <Link
                    href="#pricing"
                    className="text-gray-400 hover:text-white"
                  >
                    Pricing
                  </Link>
                  <Link href="#faq" className="text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </div>
                <div className="flex flex-col space-y-2">
                  <h2 className="text-lg font-semibold">Resources</h2>
                  <Link
                    href="/terms-and-conditions"
                    className="text-gray-400 hover:text-white"
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-400 hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/guides"
                    className="text-gray-400 hover:text-white"
                  >
                    Guides
                  </Link>
                  <Link
                    href="/affiliate-program"
                    className="text-gray-400 hover:text-white"
                  >
                    Affiliate Program
                  </Link>
                  <Link
                    href="/telegram-support"
                    className="text-gray-400 hover:text-white"
                  >
                    Telegram Support
                  </Link>
                </div>
              </div>
              <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col lg:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                  © 2024{" "}
                  <span className="font-semibold">GetAllMyLinks.com</span>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Footer
